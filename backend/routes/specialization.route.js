const express = require('express')
const app = express()
const specializationRoute = express.Router()

// Specialization model
let Specialization = require('../models/Specialization')

// Add Specialization
specializationRoute.route('/createSpecialization').post((req, res, next) => {
  Specialization.create(req.body, (error, data) => {
    console.log(data);
    if (error) {
      return next(error)
    } else {
      console.log(data);
      res.json(data)
    }
  })
})

// Get All Specializations
specializationRoute.route('/getSpecialization').get((req, res) => {
  Specialization.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single Specialization
specializationRoute.route('/readSpecialization/:id').get((req, res) => {
  Specialization.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update Specialization
specializationRoute.route('/updateSpecialization/:id').put((req, res, next) => {
  Specialization.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error)
        console.log(error)
      } else {
        res.json(data)
        console.log('Data updated successfully')
      }
    },
  )
})

// Delete Specialization
specializationRoute.route('/deleteSpecialization/:id').delete((req, res, next) => {
  Specialization.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.status(200).json({
        msg: data,
      })
    }
  })
})

module.exports = specializationRoute
