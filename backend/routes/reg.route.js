const express = require('express')
const { request } = require('http')
const app = express()
const registrationRoute = express.Router()

// Technology model
let Registration = require('../models/Reg')

// Add Technology
registrationRoute.route('/createreg').post((req, res, next) => {
    Registration.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

registrationRoute.route('/login').post((req, res,next) => {
    Registration.findOne({username:req.body.username}, (error, data) => {
      // console.log(error);
      // console.log(data);
      if (error) {
        return next(error);
      } else { 
        if(data==null){
          res.json(undefined);
        } else{      
        if(req.body.password==data.password){
        res.json(data._id);
        }else{
          res.json(undefined); 
        }
        }
      }
    })
  })

// Get All Technologies
// technologyRoute.route('/').get((req, res) => {
//   Technology.find((error, data) => {
//     if (error) {
//       return next(error)
//     } else {
//       res.json(data)
//     }
//   })
// })

// Get single employee
// technologyRoute.route('/read/:id').get((req, res) => {
//   Technology.findById(req.params.id, (error, data) => {
//     if (error) {
//       return next(error)
//     } else {
//       res.json(data)
//     }
//   })
// })

// // Update employee
// technologyRoute.route('/update/:id').put((req, res, next) => {
//   Technology.findByIdAndUpdate(
//     req.params.id,
//     {
//       $set: req.body,
//     },
//     (error, data) => {
//       if (error) {
//         return next(error)
//         console.log(error)
//       } else {
//         res.json(data)
//         console.log('Data updated successfully')
//       }
//     },
//   )
// })

// Delete employee
// technologyRoute.route('/delete/:id').delete((req, res, next) => {
//   Technology.findOneAndRemove(req.params.id, (error, data) => {
//     if (error) {
//       return next(error)
//     } else {
//       res.status(200).json({
//         msg: data,
//       })
//     }
//   })
// })

// technologyRoute.route('/delete/:id').put((req, res, next) => {
//   Technology.findByIdAndUpdate(
//     req.params.id,
//     {
//        "$set": { "isActive": false }
//     },
//     (error, data) => {
//       if (error) {
//         return next(error)
//         console.log(error)
//       } else {
//         res.json(data)
//         console.log('Data updated successfully')
//       }
//     },
//   )
// })

module.exports = registrationRoute
