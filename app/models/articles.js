 'use strict'

const mongoose = require('mongoose'),
      Schema   = mongoose.Schema;

const articlesSchema = new Schema ({
  url   : {
        type   : String,
        unique : true
  },
  name  : String,
  date  : {
        type    : Date,
        default : Date.now
  },
  desc  : String,
  tags  : Array,
  rank  : {
        type    : Number,
        default : 0
  }

});

module.exports = mongoose.model('Articles', articlesSchema)
