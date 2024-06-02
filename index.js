const express = require('express')
const app = express()
const mongoose = require('mongoose');
const config= require('./config/database.js')
const path=require('path');

mongoose.Promise=global.Promise;
mongoose.connect(config.uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log(config.secret);
    console.log('Connected to mongodb database:',config.db);
}).catch((err) => {
    console.error('Failed to connect to MongoDB:', err);
});

app.use(express.static(__dirname+'/src'))

app.get('*',  (req, res) => {
    res.sendFile(path.join(__dirname+'/src/index.html'));
  })
  
  app.listen(8080,()=>{
    console.log('Listening on port 8080')
  })