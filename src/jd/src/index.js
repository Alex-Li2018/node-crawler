//  京东签到脚本
// const Log = require('./fileTools')
const { formatTime } = require('./utils')
const JingDongBean = require('./jdBean')
const JingDongPetSignBean = require('./jdPetSign')
const JingDongShakeBean = require('./jdShakeBean')
const jdLukyDraw = require('./jdLukyDraw')
const jdCaseAndBag = require('./jdCaseAndBag')

// const JingDongStore = require('./jdStore')
// const JingDongCash = require('./jsCash')
const log4js= require('./log')
const logger = log4js.getLogger()

class JDScript {
    constructor({
        cookies,
        cookies_app,
        stop,
        name
    }) {
        // 单人签到
        this.cookies = cookies
        this.cookies_app = cookies_app
        this.stop = stop || 0
        this.name = name
    }

    // 调用所有签到脚本
    async requestAll() {
        let str = ''
        const res = await Promise.all([
            // JingDongBean(this.cookies, this.stop),
            // JingDongPetSignBean(this.cookies, this.stop + 1000),
            // jdLukyDraw(this.cookies_app, this.stop + 2000),
            // JingDongShakeBean(this.cookies_app, this.stop + 3000),
            jdCaseAndBag(this.cookies_app, this.stop + 4000)

            // JingDongStore(this.cookies, this.stop),
            // JingDongCash(this.cookies, this.stop),
        ])
        res.forEach(item => {
            str += `
                |${ formatTime() }|${this.name}|${item.name}|${!!item.success ? '成功' : '失败'}|${item.notify}|
            `
        })
        logger.info(str)
        // Log(this.name, formatTime(), res)
    }
}

module.exports = JDScript