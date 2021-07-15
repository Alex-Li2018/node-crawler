// 抓取知乎评论头像昵称
const xlsx = require('node-xlsx');
const fs = require('fs');
const https = require('https');
const axios = require('axios');

// 爬取知乎头像
let arr = [];
const forRequestHandler = (offset) => requestHandler(offset).then(res =>{
    if (res.is_end || arr.length > 6000) {
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
    const url = 'https://www.zhihu.com/api/v4/questions/268882069/answers';
    axios.get(url,{
        params: {
            include: 'data[*].is_normal,admin_closed_comment,reward_info,is_collapsed,annotation_action,annotation_detail,collapse_reason,is_sticky,collapsed_by,suggest_edit,comment_count,can_comment,content,editable_content,attachment,voteup_count,reshipment_settings,comment_permission,created_time,updated_time,review_info,relevant_info,question,excerpt,is_labeled,paid_info,paid_info_content,relationship.is_authorized,is_author,voting,is_thanked,is_nothelp,is_recognized;data[*].mark_infos[*].url;data[*].author.follower_count,vip_info,badge[*].topics;data[*].settings.table_of_content.enabled',
            offset: offset,
            limit: 20,
            sort_by: 'default',
            platform: 'desktop'
        }
    }).then(res => {
        const arrRes = res.data.data.map(item => ({
            name: item.author.name,
            avatar_url: item.author.avatar_url_template
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
    // 数据去重, 不能有知乎用户
    const content = data.slice(1)
    const unique = [];
    content.forEach(item => {
        if (!(
            item[1] === '知乎用户' 
            || item[1] === '匿名用户' 
            || item[1] === '「已注销」' 
            || item[2] === 'https://pic2.zhimg.com/da8e974dc.jpg?source=1940ef5c')) {
            unique.push(item);
        }
    });
    let newArr = [];
    unique.forEach(item => {
        const originName = item[1];
        const flag = newArr.filter(_ => {
            return _[1] === originName;
        }).length === 0
        if (flag) {
            newArr.push(item);
        }
    });
    writeXlsxHandler(newArr);
});

// 写xlsx
function writeXlsxHandler(data) {
    const buffer = xlsx.build([
        {
            name: 'sheet1',
            data: data
        }
    ]);
    fs.writeFile('./src/zhihuAuthor.xls', buffer, function (err) {
        if (err)
            throw err;
        console.log('Write to xls has finished');
    });
}
