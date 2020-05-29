const express = require('express');

const app =express();
const mongoose =require('mongoose');

require('dotenv').config()

mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser: true})

const db=mongoose.connection;

db.on('error',(error)=>{
    console.log(error)
})
db.on('open',()=>{
    console.log('connected to database')
})
app.use(express.json())

// //routes
// app.get('/',(req,res)=>{
//     res.send('we are on home');
// });
const subscribeRouter=require('./routes/subscribers');
app.use('/subscribers',subscribeRouter)
//listening to server
PORT= process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log('we are listening on port 3000')
});
