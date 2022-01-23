//  京东天天抽奖

const $http = require('./http')()

function jdCaseAndBag(KEY, s) {
    const JDBean = {
        name: '京东箱包专场',
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
              origin: 'https://pro.m.jd.com',
              referer: 'https://pro.m.jd.com/'
            },
            body: 'functionId=doInteractiveAssignment'
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

module.exports = jdCaseAndBag