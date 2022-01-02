// 京东签到得京豆
const $http = require('./http')()

function JingDongBean(KEY, s) {
    const JDBean = {
        name: '京东签到',
        notify: '',
        fail: null,
        success: null
    }
    return new Promise(resolve => {
        setTimeout(() => {
          const JDBUrl = {
            url: 'https://api.m.jd.com/client.action',
            headers: {
              Cookie: KEY
            },
            body: 'functionId=signBeanIndex&appid=ld'
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
                  JDBean.fail = 1
                } else if (data.match(/跳转至拼图/)) {
                  JDBean.notify = "京东商城-京豆: 失败, 需要拼图验证 ⚠️"
                  JDBean.fail = 1
                } else if (data.match(/\"status\":\"?1\"?/)) {
                  console.log("\n" + "京东商城-京豆签到成功 " + Details)
                  if (data.match(/dailyAward/)) {
                    JDBean.notify = "京东商城-京豆: 成功, 明细: " + cc.data.dailyAward.beanAward.beanCount + "京豆 🐶"
                    JDBean.bean = cc.data.dailyAward.beanAward.beanCount
                  } else if (data.match(/continuityAward/)) {
                    JDBean.notify = "京东商城-京豆: 成功, 明细: " + cc.data.continuityAward.beanAward.beanCount + "京豆 🐶"
                    JDBean.bean = cc.data.continuityAward.beanAward.beanCount
                  } else if (data.match(/新人签到/)) {
                    const quantity = data.match(/beanCount\":\"(\d+)\".+今天/)
                    JDBean.bean = quantity ? quantity[1] : 0
                    JDBean.notify = "京东商城-京豆: 成功, 明细: " + (quantity ? quantity[1] : "无") + "京豆 🐶"
                  } else {
                    JDBean.notify = "京东商城-京豆: 成功, 明细: 无京豆 🐶"
                  }
                  JDBean.success = 1
                } else {
                  JDBean.fail = 1
                  console.log("\n" + "京东商城-京豆签到失败 " + Details)
                  if (data.match(/(已签到|新人签到)/)) {
                    JDBean.notify = "京东商城-京豆: 失败, 原因: 已签过 ⚠️"
                  } else if (data.match(/人数较多|S101/)) {
                    JDBean.notify = "京东商城-京豆: 失败, 签到人数较多 ⚠️"
                  } else {
                    JDBean.notify = "京东商城-京豆: 失败, 原因: 未知 ⚠️"
                  }
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

module.exports = JingDongBean