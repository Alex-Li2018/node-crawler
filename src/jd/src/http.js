const request = require('request');

function requestMethod() {
    const adapterStatus = (response) => {
        if (response) {
          if (response.status) {
            response["statusCode"] = response.status
          } else if (response.statusCode) {
            response["status"] = response.statusCode
          }
        }
        return response
    }
    
    const get = (options, callback) => {
        options.headers['User-Agent'] = 'JD4iPhone/167169 (iPhone; iOS 13.4.1; Scale/3.00)'
        
        request.get(options, (error, response, body) => {
            callback(error, adapterStatus(response), body)
        })
    }

    const post = (options, callback) => {
        options.headers['User-Agent'] = 'JD4iPhone/167169 (iPhone; iOS 13.4.1; Scale/3.00)'
        if (options.body) options.headers['Content-Type'] = 'application/x-www-form-urlencoded'
       
        request.post(options, (error, response, body) => {
            callback(error, adapterStatus(response), body)
        })
    }

    return {
        get,
        post
    }
}

module.exports = requestMethod