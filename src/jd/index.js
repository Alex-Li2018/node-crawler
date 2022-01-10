//  京东签到脚本
const schedule = require('node-schedule');
const JDScript = require('./src/index')
const log4js= require('./src/log')
const logger = log4js.getLogger()

const httpSign = new JDScript({
    cookies: '__jdv=122270672|google|hkbsc10|cpc|notset|1640522972300; __jdu=1640522972298834482478; shshshfpa=aca00bf5-ffe2-c9f7-53f6-38553957ec25-1640522973; shshshfpb=gAmyqB6ns%2FiQpIq6%2FkDTjFw%3D%3D; areaId=22; ipLoc-djd=22-1930-0-0; __jdc=76161171; PCSYCityID=CN_510000_510100_0; cid=9; webp=1; mba_muid=1640522972298834482478; visitkey=67976348143089940; 3AB9D23F7A4B3C9B=GZDSOEZB2POIEKF5IRW5AMAHMPD75XL6CPF3KIJX3LWUKHDJ2DMCDKAS2D6XWLCKDSH7IFZKARWAZRHRMBWJYJQWNI; TrackerID=PeaAgOQzLzV359x5nPtwW_0r8kbvc0X-lEVhwjKpPaegLvwOZP4J9LwwrYAtenDdw7izWMmDdbCf74yZtB32NOT0O_O_IqNdsfjY6ZAKwvtTZ9-CoCx4gT5JMW2CD4e9pukfOIEAw3AVFmfcQ8zpFw; pt_key=AAJhyHNvADC0_HFa7Ygq5jj4JkaGVFNpaguRVkxQffQoZgx0BvTmFrOUP3skWbNX3lObjEeKctg; pt_pin=jd_hcPgzfZDwedM; pt_token=lexh2v6i; pwdt_id=jd_hcPgzfZDwedM; sfstoken=tk01mbe561bb8a8sMysxeDJodjg4zVET6NLAhV1zKgOr5vqEYLx3MKlNrk5kC6p7U5+80p0sqDjQPRn1KE+YIV8v3Bmh; sc_width=400; share_cpin=; share_open_id=; share_gpin=; shareChannel=; source_module=; erp=; wxa_level=1; jxsid=16410869368039744620; PPRD_P=UUID.1640522972298834482478; jxsid_s_u=https%3A//home.m.jd.com/myJd/newhome.action; retina=1; shshshfp=882f2fcd035671f29cf70c6e4581c5cb; wqmnx1=MDEyNjM3NTouby9lbjYwbzVuZC51aTVwaTNNZSllNDBlaTZyNGE0VlVIRkg%3D; __jda=76161171.1640522972298834482478.1640522972.1641086937.1641092692.5; __jdb=76161171.1.1640522972298834482478|5.1641092692; mba_sid=16410926926964229887531767384.1; __wga=1641092692870.1641092692870.1641086937561.1640526704860.1.4; jxsid_s_t=1641092693012',
    stop: 0,
    name: 'Alex'
})

const httpSign1 = new JDScript({
    cookies: '__jdu=1640522972298834482478; shshshfpa=aca00bf5-ffe2-c9f7-53f6-38553957ec25-1640522973; shshshfpb=gAmyqB6ns%2FiQpIq6%2FkDTjFw%3D%3D; jcap_dvzw_fp=sFuJSBMCMwSvos2-3Le83FCaNbtVUFNhN30e4giUxBB7rSkZcDK--6t7h15NUUbNIuWOSQ==; whwswswws=; unpl=JF8EAMdnNSttWE0GDEsGTEURTlgEWw4MSURRZmEGBg5YHFEETwZMGxJ7XlVdXhRKFx9ubxRXXVNIUg4aACsSEXteXVdZDEsWC2tXVgQFDQ8VXURJQlZAFDNVCV9dSRZRZjJWBFtdT1xWSAYYRRMfDlAKDlhCR1FpMjVkXlh7VAQrAhwXEU9eV1ZbC0gfCmZlAFFUW05SDCsyHCIge1lcW1wOSycCX2Y1FgkESFwHGAMTXxBMWFVaXgtDEQBsbwxdX11OXQYeBBIiEXte; __jda=76161171.1640522972298834482478.1640522972.1641103020.1641734825.8; __jdc=76161171; __jdv=76161171|baidu-pinzhuan|t_288551095_baidupinzhuan|cpc|0f3d30c8dba7459bb52f2eb5eba8ac7d_0_17c8a5ff044a4b53bc872cb1f40e5f83|1641734824572; areaId=22; ipLoc-djd=22-1930-0-0; wxa_level=1; retina=1; cid=9; jxsid=16417348347155173930; webp=1; mba_muid=1640522972298834482478; visitkey=41592802285541710; autoOpenApp_downCloseDate_jd_homePage=1641734844009_1; downloadAppPlugIn_downCloseDate=1641734863547_1800000; 3AB9D23F7A4B3C9B=GZDSOEZB2POIEKF5IRW5AMAHMPD75XL6CPF3KIJX3LWUKHDJ2DMCDKAS2D6XWLCKDSH7IFZKARWAZRHRMBWJYJQWNI; TrackerID=23N90aEbKPix695CGffplk_b_jHTSNAsKNBWYmMdZ5GpkIfpTX_sGkLpIA-8UTYnaqJOiSc_d8vpXEbe1ZYPCtfS0HoVKQqbKepGAz5iEXxUuzDs0ur4ivDyArBQcScG2njRCUvhFXgmbDhq3jDDkg; pt_key=AAJh2uMfADC8eSZTkjgGfO_VX7barVBM5x2Pm9zOGkha7kne789ImP_FsUPW3oEr6vOVYZ3iArw; pt_pin=jd_55608af676f00; pt_token=4qcpxirb; pwdt_id=jd_55608af676f00; sfstoken=tk01mc23c1cb0a8sMisyKzNhVFNJLvUNSwxzx90H+34Kox0FP4XCY9qsTYQuGpacEFRIUKvPbGScSw6Ksl3ZgelVJqoD; __wga=1641734945089.1641734945089.1641734945089.1641734945089.1.1; PPRD_P=UUID.1640522972298834482478; jxsid_s_t=1641734945248; jxsid_s_u=https%3A//home.m.jd.com/myJd/newhome.action; sc_width=414; shshshfp=d3b4de08c4f4aa00cdad74edd6e48efe; shshshsID=048ef16ce2c1287162405f30740c8c44_3_1641734945795; wqmnx1=MDEyNjM3M3BtLkpvaTU4MGFpIGggIGEpVzYwTCAgbk0xUzY3WWYtNFlEIyhI; __jdb=76161171.6.1640522972298834482478|8.1641734825; mba_sid=16417348351932291781512287307.5',
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
