'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Shoppinglist Schema
 */
var ShoppinglistSchema = new Schema({
  name: {
    type: String,
    default: '',
    required: 'Please fill Shoppinglist name',
    trim: true
  },
  color: {
    type: String,
    default: '',
    trim: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  modified: {
    type: Date,
    default: Date.now
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  content: {
    type: String,
    default: ''
  },
  contents: {
    type: [],
    default: [],
    required: 'Please enter content'
  },
  priority: {
    type: String,
    default: '',
    required: 'Please select a priority',
    trim: true
  }
});

mongoose.model('Shoppinglist', ShoppinglistSchema);
