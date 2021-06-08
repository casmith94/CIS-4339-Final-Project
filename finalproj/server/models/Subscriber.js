const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let subscriberSchema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  city: {
    type: String
  },
  state: {
    type: String
  },
  address: {
    type: String
  },
  phone: {
    type: Number
  },
  subscription_type: {
    type: String
  },
}, {
  collection: 'subscribers'
})

module.exports = mongoose.model('Subscriber', subscriberSchema)