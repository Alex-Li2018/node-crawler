// 抓取知乎评论头像昵称
const xlsx = require('node-xlsx');
const fs = require('fs');
const https = require('https');
const axios = require('axios');

// 爬取知乎头像
let arr = [];
const forRequestHandler = (offset) => requestHandler(offset).then(res =>{
    if (res.is_end || arr.length > 500) {
        arr = arr.concat(res.data);
        return res;
    } else {
        arr = arr.concat(res.data);
        return forRequestHandler(res.offset).then(() => {
            return arr;
        });
    }
});

const requestHandler = (offset) => new Promise((resolve) => {
    const url = 'https://www.zhihu.com/api/v4/questions/20030360/answers';
    // const url = 'https://www.zhihu.com/api/v4/questions/461200301/answers';
    axios.get(url,{
        params: {
            include: 'data%5B*%5D.is_normal%2Cadmin_closed_comment%2Creward_info%2Cis_collapsed%2Cannotation_action%2Cannotation_detail%2Ccollapse_reason%2Cis_sticky%2Ccollapsed_by%2Csuggest_edit%2Ccomment_count%2Ccan_comment%2Ccontent%2Ceditable_content%2Cattachment%2Cvoteup_count%2Creshipment_settings%2Ccomment_permission%2Ccreated_time%2Cupdated_time%2Creview_info%2Crelevant_info%2Cquestion%2Cexcerpt%2Cis_labeled%2Cpaid_info%2Cpaid_info_content%2Crelationship.is_authorized%2Cis_author%2Cvoting%2Cis_thanked%2Cis_nothelp%2Cis_recognized%3Bdata%5B*%5D.mark_infos%5B*%5D.url%3Bdata%5B*%5D.author.follower_count%2Cvip_info%2Cbadge%5B*%5D.topics%3Bdata%5B*%5D.settings.table_of_content.enabled',
            // include: 'data[*].is_normal,admin_closed_comment,reward_info,is_collapsed,annotation_action,annotation_detail,collapse_reason,is_sticky,collapsed_by,suggest_edit,comment_count,can_comment,content,editable_content,attachment,voteup_count,reshipment_settings,comment_permission,created_time,updated_time,review_info,relevant_info,question,excerpt,is_labeled,paid_info,paid_info_content,relationship.is_authorized,is_author,voting,is_thanked,is_nothelp,is_recognized;data[*].mark_infos[*].url;data[*].author.follower_count,vip_info,badge[*].topics;data[*].settings.table_of_content.enabled',
            offset: offset,
            limit: 20,
            sort_by: 'default',
            platform: 'desktop'
        }
    }).then(res => {
        const arrRes = res.data.data.map(item => ({
            name: item.author.name,
            avatar_url: item.author.avatar_url
        }))
        
        resolve({
            offset: offset + 1,
            data: arrRes,
            is_end: res.data.paging.is_end
        });
    }).catch(err => {
        console.log(err);
    });
});

forRequestHandler(1).then(arr => {
    let data = []; // 其实最后就是把这个数组写入excel   
    let title = ['index','name','avatar_url']//这是第一行 俗称列名 
    data.push(title) // 添加
    arr.forEach((item, index) => {
        let arr = [];
        arr.push(index);
        arr.push(item.name)
        arr.push(item.avatar_url);
        data.push(arr);
    });
    writeXlsxHandler(data);
});

// 写xlsx
function writeXlsxHandler(data) {
    const buffer = xlsx.build([
        {
            name: 'sheet1',
            data: data
        }
    ]);
    fs.writeFile('./zhihuAuthor.xls', buffer, function (err) {
        if (err)
            throw err;
        console.log('Write to xls has finished');
        
        // 读xlsx
        //     const obj = xlsx.parse("./" + "resut.xls");
        //     console.log(JSON.stringify(obj)); 
    });
}
