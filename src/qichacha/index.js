// 调用接口
const path = require('path')
const { getPhoneNumber } = require('./getPhoneNumber')
const { recommendRequest } = require('./recommend')
const { readXLSXFile, writeXLSXFile } = require('./helper/xlsxTools')
const newSheet = [{
  name: 'sheet1',
  data: [
    ['序号','属地','企业名称','电话号码']
  ]
}]

// 读取xlsx
const reslistdata = readXLSXFile(path.resolve('./企业名单.xlsx'))


const list = reslistdata.slice(0, 1)

loadData(list[0])

async function loadData(item) {
  if (list.length === 0) {
    writeXLSXFile(path.resolve('./output.xlsx'), newSheet) 
    return 
  } 
  
  try {
    const { body } = await recommendRequest(item)
    const phone = await getPhoneNumber(body)

    newSheet[0].data.push([
      item['序号'],
      item['属地'],
      item['企业名称'],
      phone
    ])
    loadData(list.shift())
  } catch(err) {
    console.log(err)
    loadData(list.shift())
  }
}
