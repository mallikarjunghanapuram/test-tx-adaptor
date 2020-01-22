"use strict";

const mongoose = require('mongoose')
const variables = require('../variables')


const connect = () => {

    //mongoose.connect(uri, {config});
    mongoose.connect(`${variables.dbUrl}`, { useNewUrlParser: true,useUnifiedTopology: true  })
        .then(() => console.log("connected"))
        .catch(err => console.log('Could not connect to MongoDB...', err))

       // return mongoose.connect(uri, config);
}

module.exports = {connect};

// const mongoose = require('mongoose')

// const connect = () => {
//     console.log(`${'mongodb://localhost:27017'}/${'order'}`)
//     mongoose.connect(`${'mongodb://localhost:27017'}/${'order'}`, { useUnifiedTopology: true })
//         .then(() => console.log('Connected to mongoDB'))
//         .catch(err => console.log('Could not connect to MongoDB...', err))
// }

// module.exports = {connect};