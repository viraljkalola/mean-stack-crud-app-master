const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Specialization = new Schema({
   Specialization_name: {
      type: String
   },
   Specialization_details: {
      type: String
   },
   isActive: {
      type: Boolean,
      default:true
   },
   cretaedOn: {
      type: Date
   },
   createdBy:{
    type: String
   },
   updatedOn:{
    type:Date
   },
   updatedBy:{
    type:String
   }
}, {
   collection: 'specialization'
})

module.exports = mongoose.model('Specialization', Specialization)