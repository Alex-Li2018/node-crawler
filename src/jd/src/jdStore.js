const $http = require('./http')()

function JingDongStore(KEY, s) {
    const JDGStore = {
      name: '商城',
      success: null,
      fail: null,
      notify: ''
    };

    return new Promise(resolve => {
      setTimeout(() => {
        $http.get({
          url: 'https://api.m.jd.com/api?appid=jdsupermarket&functionId=smtg_sign&clientVersion=8.0.0&client=m&body=%7B%7D',
          headers: {
            Cookie: KEY,
            Origin: `https://jdsupermarket.jd.com`
          }
        }, (error, response, data) => {
          try {
            if (error) throw new Error(error);
            const cc = JSON.parse(data);
            const Details = "response:\n";
            if (cc.data && cc.data.success === true && cc.data.bizCode === 0) {
              console.log(`\n京东商城-超市签到成功 ${Details}`)
              JDGStore.success = 1
              JDGStore.bean = cc.data.result.jdBeanCount || 0
              JDGStore.notify = `京东商城-超市: 成功, 明细: ${JDGStore.bean||`无`}京豆 🐶`
            } else {
              if (!cc.data) cc.data = {}
              console.log(`\n京东商城-超市签到失败 ${Details}`)
              const tp = cc.data.bizCode == 811 ? `已签过` : cc.data.bizCode == 300 ? `Cookie失效` : `${cc.data.bizMsg||`未知`}`
              JDGStore.notify = `京东商城-超市: 失败, 原因: ${tp}${cc.data.bizCode==300?`‼️`:` ⚠️`}`
              JDGStore.fail = 1
            }
          } catch (eor) {
            console.log("京东商城-超市", "JDGStore", eor, response, data)
          } finally {
            resolve(JDGStore)
          }
        })
      }, s)
    });
}

module.exports = JingDongStore