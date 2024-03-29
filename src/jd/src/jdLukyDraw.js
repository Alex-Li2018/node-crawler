//  京东天天抽奖

const $http = require('./http')()

function jingDongLukyDraw(KEY, s) {
    const JDBean = {
        name: '京东天天抽奖',
        notify: '',
        fail: null,
        success: null
    }
    return new Promise(resolve => {
        setTimeout(() => {
          const JDBUrl = {
            url: 'https://api.m.jd.com/client.action',
            headers: {
              Cookie: KEY,
              Host: 'api.m.jd.com',
              origin: 'https://h5.m.jd.com',
              referer: 'https://h5.m.jd.com/'
            },
            body: 'functionId=lotteryForTurntableFarm&appid=wh5&body=%7B%22type%22%3A1%2C%22version%22%3A4%2C%22channel%22%3A1%7D'
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