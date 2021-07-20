const https = require('https');
const fs = require('fs');
const cheerio = require('cheerio');
// const request = require('request');

const url = 'https://mp.weixin.qq.com/s?__biz=Mzg2MTU3MjkwMg==&mid=2247498153&idx=1&sn=857370aac03b4e2f9ff21a9ecc70d687&chksm=ce17a3e0f9602af6c8da58647311d8a78af2993c7eab6ff28536ba8b93d21090eaa22a52a8c5&token=1543741430&lang=zh_CN#rd';
https.get(url, (result) => {
  result.setEncoding('utf-8');
  let resChunk = '';
  result.on('data', (chunk) => {
    resChunk += chunk;
  });
  result.on('end', () => {
    const $ = cheerio.load(resChunk);

    $('#js_content').each((index, res) => {
      if (res.attribs['style']) {
        res.attribs.style = 'visibility: visible';
      }
    });

    // 写入文件
    fs.appendFile('./index.html', $('#js_article').html(), 'utf-8', (err) => {
      if (err) {
        console.log(err);
      }
    });
  });
});
