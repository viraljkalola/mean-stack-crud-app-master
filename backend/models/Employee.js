const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Technology = new Schema({
   technology: {
      type: String,
      // unique:true,
   },
   isActive:{
      type:Boolean,
      default:true,
   },
   CreatedBy:{
      type:String,   
   }
   
}, {
   timestamps:true,
   collection: 'technologies'
})

module.exports = mongoose.model('Technology',Technology )