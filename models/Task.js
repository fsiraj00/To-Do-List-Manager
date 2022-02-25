const mongoose = require('mongoose')


//Schema defines the structure for the data document
//only the properties that you set in your schema will be passed onto the database, everything else will be ignored
const TaskSchema = new mongoose.Schema({
    name:{
        // built in validator

        type:String, //data type 
        required:[true,'Must provide name'], //cant post request without the "name" property
        trim:true, //trim whitespace on the string
        maxlength:[20,'Name cannot be more than 20 characters']
        
    },
    completed:{
        type:Boolean,
        default:false, //default is not completed, you have to set it to true for it to be completed

    }
})

//set up the model (model is a representation of the DB collection)
//model is a wrapper for the schema
//mongoose model provides an interface to the Database, using the model we can update, delete, query, and create easily


module.exports= mongoose.model('Task',TaskSchema)