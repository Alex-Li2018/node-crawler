const xlsx = require('node-xlsx');
const fs = require('fs');

// 读xlsx
const arr = xlsx.parse("./src/zhihuAuthor.xls");
const content = arr[0].data.slice(1);

let str = `
|  序号  |  昵称  |  头像 |
|  ----  |  ----  | ---- |
`

content.forEach((item, index) => {
    str += `|${index}|${item[1]}|<img src="${item[2]}" style="height: 120px; width: 120px; border-radius: 50%;" />||\n`
});

// 写markdown格式
fs.writeFile('./src/zhihuAuthor.md', str, 'utf-8', function (err) {
    if (err)
        throw err;
    console.log('Write to md has finished');
});