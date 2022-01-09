//  京东签到脚本
const schedule = require('node-schedule')
const JDScript = require('./src/index')

const httpSign = new JDScript({
    cookies: '__jdv=122270672|google|hkbsc10|cpc|notset|1640522972300; __jdu=1640522972298834482478; shshshfpa=aca00bf5-ffe2-c9f7-53f6-38553957ec25-1640522973; shshshfpb=gAmyqB6ns%2FiQpIq6%2FkDTjFw%3D%3D; areaId=22; ipLoc-djd=22-1930-0-0; __jdc=76161171; PCSYCityID=CN_510000_510100_0; cid=9; webp=1; mba_muid=1640522972298834482478; visitkey=67976348143089940; 3AB9D23F7A4B3C9B=GZDSOEZB2POIEKF5IRW5AMAHMPD75XL6CPF3KIJX3LWUKHDJ2DMCDKAS2D6XWLCKDSH7IFZKARWAZRHRMBWJYJQWNI; TrackerID=PeaAgOQzLzV359x5nPtwW_0r8kbvc0X-lEVhwjKpPaegLvwOZP4J9LwwrYAtenDdw7izWMmDdbCf74yZtB32NOT0O_O_IqNdsfjY6ZAKwvtTZ9-CoCx4gT5JMW2CD4e9pukfOIEAw3AVFmfcQ8zpFw; pt_key=AAJhyHNvADC0_HFa7Ygq5jj4JkaGVFNpaguRVkxQffQoZgx0BvTmFrOUP3skWbNX3lObjEeKctg; pt_pin=jd_hcPgzfZDwedM; pt_token=lexh2v6i; pwdt_id=jd_hcPgzfZDwedM; sfstoken=tk01mbe561bb8a8sMysxeDJodjg4zVET6NLAhV1zKgOr5vqEYLx3MKlNrk5kC6p7U5+80p0sqDjQPRn1KE+YIV8v3Bmh; sc_width=400; share_cpin=; share_open_id=; share_gpin=; shareChannel=; source_module=; erp=; wxa_level=1; jxsid=16410869368039744620; PPRD_P=UUID.1640522972298834482478; jxsid_s_u=https%3A//home.m.jd.com/myJd/newhome.action; retina=1; shshshfp=882f2fcd035671f29cf70c6e4581c5cb; wqmnx1=MDEyNjM3NTouby9lbjYwbzVuZC51aTVwaTNNZSllNDBlaTZyNGE0VlVIRkg%3D; __jda=76161171.1640522972298834482478.1640522972.1641086937.1641092692.5; __jdb=76161171.1.1640522972298834482478|5.1641092692; mba_sid=16410926926964229887531767384.1; __wga=1641092692870.1641092692870.1641086937561.1640526704860.1.4; jxsid_s_t=1641092693012',
    stop: 0,
    name: 'Alex'
})

// 每天7点准时跑脚本
schedule.scheduleJob('30 * * * * *', function(){
    httpSign.requestAll()
    console.log('scheduleCronstyle:' + new Date());
});
