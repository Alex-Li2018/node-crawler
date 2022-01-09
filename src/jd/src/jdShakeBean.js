//  京东摇京豆

const $http = require('./http')()

function JingDongShakeBean(KEY, s) {
    const JDBean = {
        name: '京东摇京豆',
        notify: '',
        fail: null,
        success: null
    }
    return new Promise(resolve => {
        setTimeout(() => {
          const JDBUrl = {
            url: 'https://api.m.jd.com',
            headers: {
              Cookie: KEY,
              Host: 'api.m.jd.com',
              origin: 'https://spa.jd.com',
              referer: 'https://spa.jd.com'
            },
            body: 'functionId=pg_interact_interface_invoke&appid=sharkBean'
          };
          $http.post(JDBUrl, function(error, response, data) {
            try {
              if (error) {
                throw new Error(error)
              } else {
                const cc = JSON.parse(data)
                const Details = "response:\n" + data;
                if (cc.code == 3) {
                  console.log("\n" + "京东商城-京豆Cookie失效 " + Details)
                  JDBean.notify = "京东商城-京豆: 失败, 原因: Cookie失效‼️"
                  JDBean.success = 1
                } else {
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

module.exports = JingDongShakeBean