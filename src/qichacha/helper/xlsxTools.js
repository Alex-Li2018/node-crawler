const nodexlsx = require('node-xlsx');
const xlsx = require('xlsx');
const fs = require('fs');

function readXLSXFile(path) {
    // workbook就是xls文档对象
    const workbook = xlsx.readFile(path);
    // 获取表明
    const sheetNames = workbook.SheetNames; 
    // 通过表明得到表对象
    const sheet = workbook.Sheets[sheetNames[0]]; 
    // 通过工具将表对象的数据读出来并转成jsonlistdata
    const reslistdata =xlsx.utils.sheet_to_json(sheet);

    return reslistdata
}

function writeXLSXFile(path, newSheet) {
    // data format
    var buffer = nodexlsx.build(newSheet);
    //write  default utf-8
    fs.writeFileSync(path, buffer);
}

module.exports = {
    readXLSXFile,
    writeXLSXFile
}