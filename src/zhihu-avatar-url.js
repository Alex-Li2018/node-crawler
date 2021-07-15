// 处理知乎的数据为我们图片链接
const xlsx = require('node-xlsx');
const axios = require('axios');
const md5 = require("js-md5");
const fs = require("fs");
const https = require('https');
const fd = require("formdata-node");
const { rejects } = require('assert');
const { FormData, File, fileFromPathSync } = fd;

// 上传到自己服务器的请求头
const now = Date.now();
const secretHeaders = {
    'api-appid': 'b70482a9c35b',
    'api-timestamp': now,
    'api-salt': 'abcdefg',
    'api-token': md5(`${'b70482a9c35b' + '26148d621ef74844918af182d63976b6'}${now}abcdefg`)
};
const newArr = [];

// 读xlsx
const arr = xlsx.parse("./src/zhihuAuthor.xls");

const content = arr[0].data.slice(1);

function getBinary(url, name) {
    return new Promise((resolve, reject) => {
        https.get(url, res => {
            res.setEncoding('binary') // 二进制
            let files = '';
            res.on('data', chunk => { // 加载到内存
                files += chunk;
            }).on('end', () => { // 加载完
                fs.writeFile(`./src/imgs/${name}.jpg`, files, "binary", function(err){
                    if(err){
                        reject(err);
                    }
                    resolve(`./src/imgs/${name}.jpg`);
                });   
            })
        });
    });
}

function uploadQiniu(name, url) {
    const files = await getBinary(url, name);
    const param = new FormData();
    // 通过append向form对象添加数据
    param.set('file', fileFromPathSync(files));

    const header = { 'Content-Type': 'multipart/form-data', ...secretHeaders };

    const options = {

    };

    // const res = await axios.request({
    //     url: 'https://file.huanjutang.com/upload/image',
    //     method: 'post',
    //     data: param,
    //     headers: header
    // });

    // return res;
} 

async function uploadUrl() {
    for (let i = 0; i < content.length; i++) {
        let arr = [];
        const url = await uploadQiniu(content[i][1], content[i][2]);
        arr.push(i);
        arr.push(content[i][1]);
        arr.push(url);
        newArr.push(arr);
    }
    console.log(newArr);
} 

uploadUrl();