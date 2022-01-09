//  京东摇京豆

const $http = require('./http')()

function jingDongLukyDraw(KEY, s) {
    const JDBean = {
        name: '京东抽奖',
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
              origin: 'https://h5.m.jd.com',
              referer: 'https://h5.m.jd.com/'
            },
            body: 'functionId=lotteryForTurntableFarm&appid=wh5'
          };
          $http.post(JDBUrl, function(error, response, data) {
            try {
              if (error) {
                throw new Error(error)
              } else {
                const cc = JSON.parse(data)
                const Details = "response:\n" + data;
                if (cc.code == 0) {
                  JDBean.success = 1
                } else {
                  JDBean.fail = 1   
                }

                JDBean.notify = Details 
              }
            } catch (eor) {
              console.log("京东抽奖", "JDBean", eor, response, data)
            } finally {
              resolve(JDBean)
            }
          })
        }, s)
      });
}

module.exports = jingDongLukyDraw