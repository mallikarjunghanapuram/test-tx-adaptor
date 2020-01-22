"use strict";

const dbUrl = process.env.DB_URI;
const dbname = process.env.DB_NAME;
const env = process.env.NODE_ENV || "development";
const host = process.env.APP_HOST || "localhost";
const port = process.env.APP_PORT || 1010;
const name = process.env.APP_NAME || "pm-customer-adapter";
const logLevel = process.env.LOG_LEVEL;


const variables = {
    dbUrl,
    dbname,
    env,
    host,
    port,
    name,
    logLevel
};

module.exports = variables;
