const connectDB = require('./db/connect')
const express = require('express')
const tasks = require('./routes/tasks');
//invoking dotenv config
require('dotenv').config()
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/not-found')
const app = express();
const PORT = process.env.PORT || 3000;

// setup middleware
app.use(express.json()); //if we dont use it, we wont get data in req.body
app.use(express.static('./public'));




// routes 
app.use('/api/v1/tasks', tasks)
app.use(notFound)
app.use(errorHandlerMiddleware)

const start = async () => {
    try{
        // if it connects to the DB, then start listening on port.
        // if not console log the error
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT, ()=>{
            console.log(`Listening on PORT ${PORT}\nhttp://localhost:3000/`);
        });
    }catch(error){
        console.log(error)
    }
}

start()


