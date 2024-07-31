const mongoose = require('mongoose');

const url = "mongodb://localhost/dev_paytm";

mongoose.connect(url)
mongoose.set('debug', { shell: true });
const con=mongoose.connection
con.on('open', ()=>{
    console.log('DB connected...')
})