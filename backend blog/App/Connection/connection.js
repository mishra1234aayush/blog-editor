const mongoose = require('mongoose');
const url = require('../Url/url')

const connect = mongoose.connect(url.url).then(()=>{
    console.log('successfully connect...');  
}).catch((err)=>{
console.log(err);
})

module.exports = {connect}
