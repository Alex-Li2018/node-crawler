//  文件日志
const fs = require('fs-extra')

function formatMDContent(data, filename) {
    let str = `
# ${filename}
|名称|成功|失败|备注|
|---|---|---|---|
`

    data.forEach(item => {
        str += `
|${item.name}|${!!item.success ? '成功' : '失败'}|${!!item.fail ? '成功' : '失败'}|${item.notify}|
`
    })

    return str
}

function appendWritemdFile(filename, data) {
    const str = formatMDContent(data, filename)
    fs.appendFile(filename, str, function(err) {
        if (err) {
            console.log(err)
        }
    })
}

function Log(file, filename, data) {
    fs.ensureDir(file, function(err) {
        if (err) {
            console.error('创建文件失败')
            return
        }

        fs.ensureFile(`${file}/${filename}.md`, function(err) {
            appendWritemdFile(`${file}/${filename}.md`, data)
        })
    })
}

module.exports = Log