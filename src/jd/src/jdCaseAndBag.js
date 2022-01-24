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
            url: 'https://api.m.jd.com/client.action?functionId=doInteractiveAssignment',
            headers: {
              Cookie: KEY,
              Host: 'api.m.jd.com',
              origin: 'https://pro.m.jd.com',
              referer: 'https://pro.m.jd.com/'
            },
            body: 'appid=babelh5&body=%7B%22encryptProjectId%22%3A%224GEd3mf7nGcVBkheTjwAzXHZpvuP%22%2C%22encryptAssignmentId%22%3A%2236ijrCmDp1FbbAdt2GoUyjijKoGQ%22%2C%22completionFlag%22%3Atrue%2C%22itemId%22%3A%221%22%2C%22sourceCode%22%3A%22aceaceqingzhan%22%7D&sign=11&t=' + Date.now()
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