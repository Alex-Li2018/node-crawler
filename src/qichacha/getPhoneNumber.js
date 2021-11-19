const cheerio = require('cheerio');
const request = require('request')
const config = require('./config')
const fs = require('fs')
const path = require('path')

function getPhoneNumber(body) {
    $ = cheerio.load(body);
    const href = $('.list-group-item')[0].attribs.href;
    const url = `https://www.qcc.com${href}`
  
    const optionsHtml = {
      'method': 'GET',
      'url': url,
      'headers': {
        'authority': 'www.qcc.com',
        'cache-control': 'max-age=0',
        'sec-ch-ua': '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'upgrade-insecure-requests': '1',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36',
        'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-user': '?1',
        'sec-fetch-dest': 'document',
        'referer': 'https://www.qcc.com/',
        'accept-language': 'zh-CN,zh;q=0.9',
        'cookie': 'QCCSESSID=c009kv6apt6h5drnv6hi67ets2; qcc_did=d24f1684-829f-42bd-8e7f-533e7f004c7e; UM_distinctid=17d334cf295111e-0d71cd28993941-57b193e-1fa400-17d334cf296d4b; CNZZDATA1254842228=1069193032-1637235948-https%253A%252F%252Fwww.baidu.com%252F%7C1637238655; acw_tc=74d3b79716372450334875473effbe890fbb291f228aaef7862bb62429; zg_did=%7B%22did%22%3A%20%2217d334cf328677-045f140328d858-57b193e-1fa400-17d334cf329fe3%22%7D; zg_294c2ba1ecc244809c552f8f6fd2a440=%7B%22sid%22%3A%201637243220780%2C%22updated%22%3A%201637246171390%2C%22info%22%3A%201637243220782%2C%22superProperty%22%3A%20%22%7B%5C%22%E5%BA%94%E7%94%A8%E5%90%8D%E7%A7%B0%5C%22%3A%20%5C%22%E4%BC%81%E6%9F%A5%E6%9F%A5%E7%BD%91%E7%AB%99%5C%22%7D%22%2C%22platform%22%3A%20%22%7B%7D%22%2C%22utm%22%3A%20%22%7B%5C%22%24utm_source%5C%22%3A%20%5C%22baidu1%5C%22%2C%5C%22%24utm_medium%5C%22%3A%20%5C%22cpc%5C%22%2C%5C%22%24utm_term%5C%22%3A%20%5C%22pzsy%5C%22%7D%22%2C%22referrerDomain%22%3A%20%22www.baidu.com%22%2C%22cuid%22%3A%20%226dd69c6203eeabb7eadf158dd15cf5ef%22%7D'
      }    
    }
    
    optionsHtml.headers.cookie = config.cookie1
    return new Promise((resolve, reject) => {
      request(optionsHtml, (err, res) => {
        const phone = res.body.replace(/<script>window\.\_\_INITIAL_STATE\_\_.*<\/script>/, function() {
          let statestr = arguments[0]
          statestr = statestr
            .replace(/<script>window\.\_\_INITIAL_STATE\_\_\=/, '')
            .replace(/<\/script>/, '')
            .replace(/\(function\(\).*\(\)\)/, '')
            .replace(/;;/, '')
          console.log(JSON.parse(statestr))
          
          const phone = JSON.parse(statestr).company.companyDetail.ContactInfo.PhoneNumber
          if (err) {
            reject(err)
          } else {
            resolve(phone)
          }

          // return JSON.parse(statestr).company.companyDetail.ContactInfo.PhoneNumber
        })
        
        
        // if (err) {
        //   reject(err)
        // } else {
        //   resolve(phone)
        // }
      })
    })
}

module.exports = {
    getPhoneNumber
} 