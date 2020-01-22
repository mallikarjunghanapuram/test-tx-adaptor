"use strict";

const mongoose = require("mongoose");
var Schema = mongoose.Schema;

const customerModelSchema = Schema(
  {
    userDetailsId: {
      type: String,
    },
    userId: {
      type: String
    },   
    amount: {
      type: String
    },
    address: {
      type: String
    },
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("customerModel", customerModelSchema);