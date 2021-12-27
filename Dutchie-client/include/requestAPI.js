const request = require('request')


async function demoCrawlAPI(){
    let option = {
        'method':'GET',
        'url':'http://0.0.0.0:3000/shoes/get_all',
    };

    // return new Promise(resolve => {
    //     request(option, function (err, response) {
    //         if(err){
    //             throw new Error(err)
    //         }
    //         else{
    //             console.log(response.body)
    //             resolve(response.body)
    //         }
    //     })
    // })

    return new Promise( function (success, failure) {
        request(option, function (err, response, body) {
            if(!err && response.statusCode === 200){
                success(body);
            }else {
                failure(err)
            }
        })
    })
}


module.exports = {
    demoCrawlAPI : demoCrawlAPI
}