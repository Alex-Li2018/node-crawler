const request = require('request')
const cheerio = require('cheerio')
const fs = require('fs')
const arcticList = []
const imgList = []

const requstData = function(url){
	request('http://www.ichong123.com/news/124523.html',function(error, response, body) {
        //res.statusCode 为200则表示链接成功
		if(error === null && response.statusCode === 200){
			console.log('链接成功');
			// 使用cheerio来解析body（网页内容），提取我们想要的信息
			const $ = cheerio.load(body)
			//通过分析网页结构, 获取有效内容
			$('.ac-content').each(function(i, elem) {
                console.log()
                arcticList[i] = $(this).text();
                // 判断是否
                if ($(this).find('img')) {
                    imgList.push($(this).find('img').src)
                }
            });
            console.log(arcticList, imgList);
		}
	})
}

requstData();