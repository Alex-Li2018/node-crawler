// 推荐搜索的接口
const config = require('./config') 
const request = require('request')

function recommendRequest(item) {
    var options = {
        'method': 'GET',
        'url': `https://www.qcc.com/gongsi_mindlist?type=mind&searchKey=${encodeURIComponent(item['企业名称'])}&searchType=0&suggest=1`,
        'headers': {
            'authority': 'www.qcc.com',
            'sec-ch-ua': '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
            'accept': '*/*',
            'x-requested-with': 'XMLHttpRequest',
            'sec-ch-ua-mobile': '?0',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36',
            'sec-ch-ua-platform': '"Windows"',
            'sec-fetch-site': 'same-origin',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'referer': 'https://www.qcc.com/',
            'accept-language': 'zh-CN,zh;q=0.9',
        }
    }
    options.headers.cookie = config.cookie1
    return new Promise((resolve, reject) => {
        request(options, function (error, response) {
            if (error) {
                reject(error)
            } else {
                resolve(response)
            }
        })
    })
}

module.exports = {
    recommendRequest 
}