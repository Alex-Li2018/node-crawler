const $http = require('./http')()

function JingDongCash(KEY, s) {
    const JDCash = {
      name: '现金',
      success: null,
      fail: null,
      notify: ''
    };
    return new Promise(resolve => {
      setTimeout(() => {
        const JDCAUrl = {
          url: 'https://api.m.jd.com/client.action?functionId=ccSignInNew',
          headers: {
            Cookie: KEY
          },
          body: "body=%7B%22pageClickKey%22%3A%22CouponCenter%22%2C%22eid%22%3A%22O5X6JYMZTXIEX4VBCBWEM5PTIZV6HXH7M3AI75EABM5GBZYVQKRGQJ5A2PPO5PSELSRMI72SYF4KTCB4NIU6AZQ3O6C3J7ZVEP3RVDFEBKVN2RER2GTQ%22%2C%22shshshfpb%22%3A%22v1%5C%2FzMYRjEWKgYe%2BUiNwEvaVlrHBQGVwqLx4CsS9PH1s0s0Vs9AWk%2B7vr9KSHh3BQd5NTukznDTZnd75xHzonHnw%3D%3D%22%2C%22childActivityUrl%22%3A%22openapp.jdmobile%253a%252f%252fvirtual%253fparams%253d%257b%255c%2522category%255c%2522%253a%255c%2522jump%255c%2522%252c%255c%2522des%255c%2522%253a%255c%2522couponCenter%255c%2522%257d%22%2C%22monitorSource%22%3A%22cc_sign_ios_index_config%22%7D&client=apple&clientVersion=8.5.0&d_brand=apple&d_model=iPhone8%2C2&openudid=1fce88cd05c42fe2b054e846f11bdf33f016d676&scope=11&screen=1242%2A2208&sign=1cce8f76d53fc6093b45a466e93044da&st=1581084035269&sv=102"
        };
        $http.post(JDCAUrl, function(error, response, data) {
          try {
            if (error) {
              throw new Error(error)
            } else {
              const Details = "response:\n";
              const cc = JSON.parse(data)
              if (cc.busiCode == "0") {
                console.log("\n" + "京东现金-红包签到成功 " + Details)
                JDCash.success = 1
                JDCash.Cash = cc.result.signResult.signData.amount || 0
                JDCash.notify = `京东现金-红包: 成功, 明细: ${JDCash.Cash || `无`}红包 🧧`
              } else {
                console.log("\n" + "京东现金-红包签到失败 " + Details)
                JDCash.fail = 1
                if (data.match(/(\"busiCode\":\"1002\"|完成签到)/)) {
                  JDCash.notify = "京东现金-红包: 失败, 原因: 已签过 ⚠️"
                } else if (data.match(/(不存在|已结束)/)) {
                  JDCash.notify = "京东现金-红包: 失败, 原因: 活动已结束 ⚠️"
                } else if (data.match(/(\"busiCode\":\"3\"|未登录)/)) {
                  JDCash.notify = "京东现金-红包: 失败, 原因: Cookie失效‼️"
                } else {
                  const msg = data.split(/\"msg\":\"([\u4e00-\u9fa5].+?)\"/)[1];
                  JDCash.notify = `京东现金-红包: 失败, ${msg||`原因: 未知`} ⚠️`
                }
              }
            }
          } catch (eor) {
            console.log("京东现金-红包", "JDCash", eor, response, data)
          } finally {
            resolve(JDCash)
          }
        })
      }, s)
    });
}

module.exports = JingDongCash
  