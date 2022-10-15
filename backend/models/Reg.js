const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Registration = new Schema({
   username: {
      type: String,
   },
   password:{
      type:String,
   },
   email: {
      type: String,
   }
   
}, {
   timestamps:true,
   collection: 'registrations'
})

module.exports = mongoose.model('Registration',Registration )