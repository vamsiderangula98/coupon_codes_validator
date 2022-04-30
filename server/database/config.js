const mongoose = require('mongoose')

const url = "mongodb+srv://vamsid98:vamsid98@cluster0.6tlkj.mongodb.net/coupon_code_validator_db";
const open = (uri = url) => {

    return new Promise((resolve, reject) => {
        mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true  }, err => {
            if (err) return reject(err)
            console.log('connected to db!')
            resolve()
        })
    })
}


const close = () => mongoose.disconnect()

module.exports = { open, close }
