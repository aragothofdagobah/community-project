 'use strict'

const mongoose = require('mongoose'),
      Schema   = mongoose.Schema;

const articlesSchema = new Schema ({
  url   : String,
  name  : String,
  date  : {
        type    : Date,
        default : Date.now
  },
  desc  : String,
  tags  : Array

});

module.exports = mongoose.model('Articles', articlesSchema)
