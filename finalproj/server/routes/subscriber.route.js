const express = require('express');
const subscriberRoute = express.Router();

// Subscriber model
let SubscriberModel = require('../models/Subscriber');

subscriberRoute.route('/').get((req, res) => {
    SubscriberModel.find((error, data) => {
     if (error) {
       return next(error)
     } else {
       res.json(data)
     }
   })
 })

 subscriberRoute.route('/create-subscriber').post((req, res, next) => {
    SubscriberModel.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

subscriberRoute.route('/edit-subscriber/:id').get((req, res) => {
   SubscriberModel.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update subscriber
subscriberRoute.route('/update-subscriber/:id').post((req, res, next) => {
  SubscriberModel.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data)
      console.log('Subscriber successfully updated!')
    }
  })
})

// Delete student
subscriberRoute.route('/delete-subscriber/:id').delete((req, res, next) => {
  SubscriberModel.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = subscriberRoute;