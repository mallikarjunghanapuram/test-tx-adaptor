"use strict";


const customerModel = require("../models/customer");
const errorResponseHandler = require("../utilities/pc-helpers/errorResponseHandler");

exports.getCustomerDetails = async ctx => {
  try {
    const queryParams = ctx.request.query;
    const userDetailsRecord = await customerModel.find(queryParams);
    ctx.response.ok(userDetailsRecord, "successfully fetched response");
  } catch (error) {
    errorResponseHandler(ctx, error);
  }
};


exports.getCustomerDetailsId = async ctx => {
  console.log("test", ctx.params.id, "adapter")
    const userDetailsId = ctx.params.id;
    try {
      const userDetailsRecord = await customerModel.findOne({ userDetailsId });
      ctx.response.ok(userDetailsRecord, "successfully fetched response");
    } catch (error) {
      errorResponseHandler(ctx, error);
    }
};

exports.createCustomerDetails = async ctx => {
    const { userDetailsId, userId, amount, address } = ctx.request.body
    try {
      const customerModelBody = {userDetailsId,userId,amount,address}

      const customerModelObj = new customerModel(customerModelBody);
      
      const customerModelRecord = await customerModelObj.save();
      ctx.response.ok(customerModelRecord, "successfully created record");
    } catch (error) {
      ctx.response.badRequest(null, error.message);
    }
};

exports.updateCustomerDetails = async ctx => {
  try {
    const userDetailsId = {"_id" :ctx.params.id};
    const valueToUpdate = ctx.request.body;
    const customerModelRecord = await customerModel.findOneAndUpdate(
      userDetailsId , valueToUpdate , {new: true}
    );
    ctx.response.ok(customerModelRecord, "successfully created record");
  } catch (error) {
    ctx.response.badRequest(null, error.message);
  }
};

exports.deleteCustomerDetails = async ctx => {
  try {
    const userDetailsId = {"_id" :ctx.params.id};
    
    const customerModelRecord = await customerModel.deleteOne(
      userDetailsId , {new: true}
    );
    ctx.response.ok(customerModelRecord, "successfully created record");
  } catch (error) {
    ctx.response.badRequest(null, error.message);
  }
};