const request = require('request')
const fs = require('fs')
const http = require('http');
const dir = './src/quanyou/'
let imgList = []

const requstData = function(url){
    let requestData = {
        "filed1": 17,
        "filed2": 28,
        "page": 0
    }
	request({
        url: 'http://www.quanyou.com.cn/apiproduct.html',
        method: 'post',
        json: true,
        headers: {
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            'cookie': 'bancon_fa=yes'
        },
        formData: requestData
    },function(error, response, body) {
        //res.statusCode 为200则表示链接成功
		if(error === null && response.statusCode === 200){
            imgList = body.product;
            // console.log('链接成功', imgList);
            imgList.forEach(function(item) {
                console.log('http://www.quanyou.com.cn/'+ item.news_face)
                if (!fs.existsSync('./src/quanyou')) {
                    // 文件不存在
                    fs.mkdirSync('./src/quanyou')
                }
                request('http://www.quanyou.com.cn/'+ item.news_face).pipe(fs.createWriteStream(dir + item.news_title + '.png'));
            })
		}
	})
}

requstData();