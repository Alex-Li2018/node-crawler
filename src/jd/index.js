//  京东签到脚本
const schedule = require('node-schedule');
const JDScript = require('./src/index')
const log4js= require('./src/log')
const logger = log4js.getLogger()

const httpSign = new JDScript({
    cookies: '__jdu=1640522972298834482478; shshshfpa=aca00bf5-ffe2-c9f7-53f6-38553957ec25-1640522973; shshshfpb=gAmyqB6ns%2FiQpIq6%2FkDTjFw%3D%3D; unpl=JF8EAMdnNSttWE0GDEsGTEURTlgEWw4MSURRZmEGBg5YHFEETwZMGxJ7XlVdXhRKFx9ubxRXXVNIUg4aACsSEXteXVdZDEsWC2tXVgQFDQ8VXURJQlZAFDNVCV9dSRZRZjJWBFtdT1xWSAYYRRMfDlAKDlhCR1FpMjVkXlh7VAQrAhwXEU9eV1ZbC0gfCmZlAFFUW05SDCsyHCIge1lcW1wOSycCX2Y1FgkESFwHGAMTXxBMWFVaXgtDEQBsbwxdX11OXQYeBBIiEXte; __jdc=76161171; __jdv=76161171|baidu-pinzhuan|t_288551095_baidupinzhuan|cpc|0f3d30c8dba7459bb52f2eb5eba8ac7d_0_17c8a5ff044a4b53bc872cb1f40e5f83|1641734824572; areaId=22; ipLoc-djd=22-1930-0-0; retina=1; cid=9; webp=1; mba_muid=1640522972298834482478; visitkey=41592802285541710; 3AB9D23F7A4B3C9B=GZDSOEZB2POIEKF5IRW5AMAHMPD75XL6CPF3KIJX3LWUKHDJ2DMCDKAS2D6XWLCKDSH7IFZKARWAZRHRMBWJYJQWNI; TrackerID=23N90aEbKPix695CGffplk_b_jHTSNAsKNBWYmMdZ5GpkIfpTX_sGkLpIA-8UTYnaqJOiSc_d8vpXEbe1ZYPCtfS0HoVKQqbKepGAz5iEXxUuzDs0ur4ivDyArBQcScG2njRCUvhFXgmbDhq3jDDkg; pt_key=AAJh2uMfADC8eSZTkjgGfO_VX7barVBM5x2Pm9zOGkha7kne789ImP_FsUPW3oEr6vOVYZ3iArw; pt_pin=jd_55608af676f00; pt_token=4qcpxirb; pwdt_id=jd_55608af676f00; sc_width=414; shshshfp=d3b4de08c4f4aa00cdad74edd6e48efe; share_cpin=; share_open_id=; share_gpin=; shareChannel=; source_module=; erp=; __wga=1641736264063.1641734945089.1641734945089.1641734945089.4.1; __jda=76161171.1640522972298834482478.1640522972.1641734825.1642340577.9; qd_ad=-%7C-%7Cdirect%7C-%7C0; qd_uid=KYHB6C15-Y9GFV3W6SOO5BTU3K9WL; qd_fs=1642340577626; qd_ls=1642340577626; qd_ts=1642340577626; qd_sq=1; qd_sid=KYHB6C15-Y9GFV3W6SOO5BTU3K9WL-1; __jdb=76161171.4.1640522972298834482478|9.1642340577; mba_sid=16423405774712037527315183993.4; __jd_ref_cls=Babel_dev_other_newuser_qd', 
    stop: 0,
    name: 'Alex'
})

const httpSign1 = new JDScript({
    cookies: '__jdu=1640522972298834482478; shshshfpa=aca00bf5-ffe2-c9f7-53f6-38553957ec25-1640522973; shshshfpb=gAmyqB6ns%2FiQpIq6%2FkDTjFw%3D%3D; jcap_dvzw_fp=sFuJSBMCMwSvos2-3Le83FCaNbtVUFNhN30e4giUxBB7rSkZcDK--6t7h15NUUbNIuWOSQ==; whwswswws=; areaId=22; ipLoc-djd=22-1930-0-0; downloadAppPlugIn_downCloseDate=1641734863547_1800000; autoOpenApp_downCloseDate_auto=1642342494598_1800000; unpl=JF8EAMdnNSttXxsEDUhXH0IVSlRTW1sMHB8COzdWU19QTgAMHwseQRF7XlVdXhRKFx9vYBRXXlNLUA4YACsSEXteXVdZDEsWC2tXVgQFDQ8VXURJQlZAFDNVCV9dSRZRZjJWBFtdT1xWSAYYRRMfDlAKDlhCR1FpMjVkXlh7VAQrAhwXEU9eV1ZbC0gfCmZlAFFUW05SDCsyHCIge1RVVlgIQycCX2Y1FgkESV0FGQYZXxBMWFVaXgtDEQBsbwxdX11OXQYeBBIiEXte; __jda=76161171.1640522972298834482478.1640522972.1642342485.1642342524.11; __jdc=76161171; __jdv=76161171|baidu-pinzhuan|t_288551095_baidupinzhuan|cpc|0f3d30c8dba7459bb52f2eb5eba8ac7d_0_6aa9bd5a4086475f90eab6394e8584b0|1642342524385; wxa_level=1; retina=1; cid=9; jxsid=16423425326221352315; webp=1; mba_muid=1640522972298834482478; visitkey=4856057295028762; autoOpenApp_downCloseDate_jd_homePage=1642342533729_1; shshshfp=a462ad94f96ede239b20cfd452cebf9d; shshshsID=d784c6f3b8c89b1464720037211081ee_3_1642342539538; 3AB9D23F7A4B3C9B=GZDSOEZB2POIEKF5IRW5AMAHMPD75XL6CPF3KIJX3LWUKHDJ2DMCDKAS2D6XWLCKDSH7IFZKARWAZRHRMBWJYJQWNI; TrackerID=TUgyMVBBXjPN_F_zGA076N360zTRPVuTC4m2jJBhbBFpByg9v3Dl2aXXwaafTMVpph7ARk6UbaYx2Ak6_ZspLMk6H4TTUPdiOS9-iIKOH7ek99A5o0j2zjZ4HSBpoP6xSrDxF0XzlTgTlwN5muWY0Q; pt_key=AAJh5CxoADBYN6OqfVvN0KEFUdhAo7BplWCH-odpYdCDH_j9LKYqjvYkwIPpjnxnvtFeH-A9948; pt_pin=jd_427b83354e350; pt_token=7c869ysz; pwdt_id=jd_427b83354e350; sfstoken=tk01m896d1b25a8sM3gyeDN4MXgy0dA2I1kbFocD24Xq3dlZKJss20w31dAUUpzVnmJ5r9RLuM2672Tr6hTqGm1WiCSD; wqmnx1=MDEyNjM1NHMubzQ1MDJsLlA7IG4gX2tjWHBiNi5LLGVrZW4waTQgcjI3ZjduMjQyWU9PVSFIJQ%3D%3D; __jdb=76161171.4.1640522972298834482478|11.1642342524; mba_sid=16423425331243875332524084285.3; __jd_ref_cls=MHome_PageExpo',
    stop: 0,
    name: 'rong'
})

// 每天7点准时跑脚本
const  scheduleCronstyle = ()=>{
    //每分钟的第30秒定时执行一次:
    schedule.scheduleJob('0 0 7 * * *',()=>{
        httpSign.requestAll()
        httpSign1.requestAll()
        logger.info('scheduleCronstyle:' + new Date());
    }); 
}

scheduleCronstyle();

logger.info('脚本起来了')
