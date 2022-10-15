const express = require('express')
const app = express()
const technologyRoute = express.Router()

// Technology model
let Technology = require('../models/Employee')

// Add Technology
technologyRoute.route('/create').post((req, res, next) => {
  Technology.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get All Technologies
technologyRoute.route('/').get((req, res) => {
  Technology.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single employee
technologyRoute.route('/read/:id').get((req, res) => {
  Technology.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update employee
technologyRoute.route('/update/:id').put((req, res, next) => {
  Technology.findByIdAndUpdate(
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

technologyRoute.route('/delete/:id').put((req, res, next) => {
  Technology.findByIdAndUpdate(
    req.params.id,
    {
       "$set": { "isActive": false }
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

module.exports = technologyRoute
