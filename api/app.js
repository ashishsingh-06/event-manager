// require modules
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const userRoutes = require('./routes/user');
const adminRoutes = require('./routes/admin');

// mongoose
const mongoUri = 'mongodb://localhost:27017/event';
const config = { 
    useNewUrlParser : true,
    useCreateIndex : true,
    useUnifiedTopology: true
}

mongoose.connect(mongoUri,config).then((result)=>{
    console.log('db connected');
}).catch((err)=>{
    console.log(err);
});

// body-parser
app.use(bodyParser.json());

//cors 
app.use(cors())

// user routes
app.use('/user',userRoutes);

// admin routes
app.use('/admin',adminRoutes)


// export app
module.exports = app;
