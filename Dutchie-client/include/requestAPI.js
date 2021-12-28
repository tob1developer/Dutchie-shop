const request = require('request')

const url = 'http://0.0.0.0'
const port = 3000;
const GET_allShoes = '/shoes/get_all'
const GET_shoesTrending = '/shoes/get/trending'
const GET_shippingMethod = '/shipping_method'
const GET_paymentMethod = '/payment_method'
const GET_shoesMale = '/shoes/get/male'
const GET_shoesFemale = '/shoes/get/female'
const GET_user ='/post/user'
const GET_cart = '/cart'
const POST_user = '/post/post_user'
const POST_cartSubmit = '/cart/update_sumbit'
const POST_cartAddShoes = '/cart/add_shoes'


const User = function (user){
    this.FirstName = user.FirstName
    this.LastName = user.LastName
    this.Phone = user.Phone
    this.Address = user.Address
    this.Email = user.Email
    this.CreationDate = user.CreationDate
    this.CookieName = user.CookieName
}



async function demoCrawlAPI(){
    let option = {
        'method':'GET',
        'url':'http://0.0.0.0:3000/shoes/get_all',
    };

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


async function getAllShoes(){
    let option = {
        'method':'GET',
        'url':`${url}:${port}${GET_allShoes}`,
    };

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
/**
 * Lay giay theo dang type
 * @param type - duoc truyen vao de switch url
 * @type {type: String}
 * @return {body, err}
 * @type { body: String, err: Error} trending || male || female
 * */
async function getAllShoesWithType(type){
    var urlSwitch = `${url}:${port}`
    switch (type) {
        case 'trending':
            urlSwitch = urlSwitch + GET_shoesTrending
            break;
        case 'male':
            urlSwitch = urlSwitch + GET_shoesMale
            break;
        case 'female':
            urlSwitch = urlSwitch + GET_shoesFemale
            break;
        default:
            urlSwitch = urlSwitch + GET_allShoes
    }
    let option = {
        'method':'GET',
        'url':urlSwitch,
    };

    return new Promise( function (success, failure) {
        request(option, function (err, response, body) {
            if(!err && response.statusCode === 200){
                console.log('GET: success get with type')
                success(body);
            }else {
                console.error(err)
                failure(err)
            }
        })
    })
}

/**
 * Tra ve phuong thuc van chuyen
 * @return {body, err} - Json phuong thuc van chuyen
 * @type {body : String, err : Error}
 * */
async function getShippingMethod(){
    let option = {
        'method':'GET',
        'url':`${url}:${port}${GET_shippingMethod}`,
    };
    return new Promise( function (success, failure) {
        request(option, function (err, response, body) {
            if(!err && response.statusCode === 200){
                console.log('GET: success get with shipping method')
                success(body);
            }else {
                console.error(err)
                failure(err)
            }
        })
    })
}


/**
 * Tra ve phuong thuc thanh toan
 * @return body dang string nhma JSON
 * @type {body: string}
 * */
async function getPaymentMethod(){
    let option = {
        'method':'GET',
        'url':`${url}:${port}${GET_paymentMethod}`,
    };
    return new Promise( function (success, failure) {
        request(option, function (err,  response, body) {
            if(!err && response.statusCode === 200){
                console.log('GET: success get with payment method')
                success(body);
            }else {
                console.error(err)
                failure(err)
            }
        })
    })
}

/**
 * Tra ve cart da luu theo cookie
 * @param cookie lay theo cookie
 * @return {body, err} JSON luu tru trong database
 * @type {body: String, err: Error}
 * */
async function getCart(cookie){
    let option = {
        'method':'GET',
        'url':`${url}:${port}${GET_cart}`,
        'headers': {
            'Content-Type': 'application/json',
            'Cookie':  `CookieName=${cookie}`
        },
        body: JSON.stringify({
            "CookieName": cookie
        })
    };
    return new Promise( function (success, failure) {
        request(option, function (err,  response, body) {
            if(!err && response.statusCode === 200){
                console.log('GET: success get with payment method')
                success(body);
            }else {
                console.error(err)
                failure(err)
            }
        })
    })
}

//TODO: gui thong tin user len server de luu
 function postUser(user){
    let options = {
        'method': 'POST',
        'url': `${url}:${port}${POST_user}`,
        'headers': {
            'Content-Type': 'application/json',
            'Cookie': user.CookieName
        },
        body: JSON.stringify(user)
    }

    return new Promise( function (success, failure) {
        request(options, function (err,  response, body) {
            if(!err && response.statusCode === 200){
                console.log('GET: success post user')
                console.log(body)
                success(body);
            }else {
                console.error(err)
                failure(err)
            }
        })
    })
}

async function getUserWithCookie(cookie) {
    let options = {
        'method': 'GET',
        'url': `${url}:${port}${GET_user}`,
        'headers': {
            'Content-Type': 'application/json',
            'Cookie': cookie
        },
        body: JSON.stringify({
            "CookieName": cookie
        })
    }
    return new Promise( function (success, failure) {
        request(options, function (err,  response, body) {
            if(!err && response.statusCode === 200){
                console.log('GET: success post user')
                console.log(body)
                success(body);
            }else {
                console.error(err)
                failure(err)
            }
        })
    })
}

async function getShoesWithId(id){
    let options = {
        'method': 'GET',
        'url': `${url}:${port}/shoes/${id}`,
    };
    return new Promise( function (success, failure) {
        request(options, function (err,  response, body) {
            if(!err && response.statusCode === 200){
                console.log('GET: success get with payment method')
                success(body);
            }else {
                console.error(err)
                failure(err)
            }
        })
    })
}

//TODO : update data cart
async function postCartSubmit(){}


//TODO: them cart
async function postCartAddShoes(id, value, cookie){
    let options = {
        'method': 'POST',
        'url': `${url}:${port}${POST_cartAddShoes}`,
        'headers': {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "ShoesID": id,
            "Quaintly": value,
            "CookieName": cookie
        })
    };
    return new Promise( function (success, failure) {
        request(options, function (err,  response, body) {
            if(!err && response.statusCode === 200){
                console.log('GET: success get with payment method')
                success(body);
            }else {
                console.error(err)
                failure(err)
            }
        })
    })
}

async function getOder(){

}
async function postOder(oder){
    var options = {
        'method': 'POST',
        'url': 'http://0.0.0.0:3000/post/oder',
        'headers': {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(oder)

    };
    return new Promise( function (success, failure) {
        request(options, function (err,  response, body) {
            if(!err && response.statusCode === 200){
                console.log('GET: success get with payment method')
                success(body);
            }else {
                console.error(err)
                failure(err)
            }
        })
    })
}


module.exports = {
    getAllShoes: getAllShoes,
    getAllShoesWithType: getAllShoesWithType,
    getShippingMethod: getShippingMethod,
    getPaymentMethod: getPaymentMethod,
    getCart: getCart,
    postUser: postUser,
    postCartSubmit: postCartSubmit,
    postCartAddShoes: postCartAddShoes,
    User: User,
    getShoesWithId: getShoesWithId,
    getUserWithCookie: getUserWithCookie,
    postOder: postOder
}