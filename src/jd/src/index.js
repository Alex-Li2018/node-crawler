//  京东签到脚本
// const Log = require('./fileTools')
const { formatTime } = require('./utils')
const JingDongBean = require('./jdBean')
const JingDongPetSignBean = require('./jdPetSign')
// const JingDongStore = require('./jdStore')
// const JingDongCash = require('./jsCash')
// const JingDongShakeBean = require('./jdShakeBean')
// const jdLukyDraw = require('./jdLukyDraw')
const log4js= require('./log')
const logger = log4js.getLogger()

class JDScript {
    constructor({
        cookies,
        stop,
        name
    }) {
        // 单人签到
        this.cookies = cookies
        this.stop = stop || 0
        this.name = name
    }

    // 调用所有签到脚本
    async requestAll() {
        let str = ''
        const res = await Promise.all([
            JingDongBean(this.cookies, this.stop),
            JingDongPetSignBean(this.cookies, this.stop)
            // JingDongStore(this.cookies, this.stop),
            // JingDongCash(this.cookies, this.stop),
            // JingDongShakeBean(this.cookies, this.stop),
            // jdLukyDraw(this.cookies, this.stop)
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