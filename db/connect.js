const mongoose = require('mongoose');

const connectDB = (url) => {

    //connect to the database 
    return mongoose.connect(url, {
        useNewUrlParser:true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    });
    
}


module.exports= connectDB;



//.then(()=>console.log('CONNECTED TO THE DB...'))
// .catch((err)=>console.log(err))