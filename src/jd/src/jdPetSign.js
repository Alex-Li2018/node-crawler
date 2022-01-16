//  京东摇京豆

const $http = require('./http')()

function JingDongPetSignBean(KEY, s) {
    const JDBean = {
        name: '京东宠汪汪',
        notify: '',
        fail: null,
        success: null
    }
    return new Promise(resolve => {
        setTimeout(() => {
          const JDBUrl = options = {
            'url': 'https://jdjoy.jd.com/common/pet/newUserSign?reqSource=h5&invokeKey=q8DNJdpcfRQ69gIx&index=0',
            'headers': {
              'authority': 'jdjoy.jd.com',
              'lks': 'b515b33a20352a7d49749061c464f9c0',
              'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1',
              'lkt': '1642340789884',
              'content-type': 'application/json',
              'accept': '*/*',
              'origin': 'https://h5.m.jd.com',
              'sec-fetch-site': 'same-site',
              'sec-fetch-mode': 'cors',
              'sec-fetch-dest': 'empty',
              'referer': 'https://h5.m.jd.com/',
              'accept-language': 'zh-CN,zh;q=0.9',
              'cookie': KEY
            }
          };
          $http.get(JDBUrl, function(error, response, data) {
            try {
              if (error) {
                throw new Error(error)
              } else {
                const res = JSON.parse(data)
                if (res.success === true) {
                    JDBean.success = 1
                } else {
                    const Details = "response:\n" + data;
                    JDBean.fail = 1
                    console.log("\n" + "京东商城-京豆签到失败 " + Details)
                }
                
              }
            } catch (eor) {
              console.log("京东商城-京豆", "JDBean", eor, response, data)
            } finally {
              resolve(JDBean)
            }
          })
        }, s)
      });
}

module.exports = JingDongPetSignBean