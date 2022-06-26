const mongoose = require('mongoose');
// const {Schema} = mongoose;

const dataSchema = new mongoose.Schema({
  
    web_arr:{
        type: Array,
       items:{
        type:String
       }
      } 

    
})

module.exports = mongoose.model('Data', dataSchema)
