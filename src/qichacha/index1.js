const fs = require('fs')

const str = fs.readFileSync('./test.html', 'utf-8')

const arr = str.replace(/<script>window\.\_\_INITIAL_STATE\_\_.*<\/script>/, function() {
    let statestr = arguments[0]
    statestr = statestr.replace(/<script>window\.\_\_INITIAL_STATE\_\_\=/, '')
        .replace(/<\/script>/, '')
        .replace(/\(function\(\).*\(\)\)/, '')
    console.log(statestr)
})
