const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require ('body-parser');
require('dotenv/config'); 

mongoose.connect( process.env.DB_CONNECTION, { useNewUrlParser: true , useUnifiedTopology: true}, () => {
    console.log('connect to DB')

});

app.use(bodyParser.json());
//import routes
const filterRoute = require('./routes/filter');

app.use('/posts', filterRoute); //using it as middleware

// Routes
app.get('/', (req,res) => {
    res.send('we are on home');
    console.log('homme route')
})



//connect to DB

// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "<enter your url here>");
//     res.header(
//       "Access-Control-Allow-Headers",
//       "Set-Cookie,Origin, X-Requested-With, Content-Type, Accept"
//     );
//     res.header("Access-Control-Allow-Credentials", true);
//     if (req.method === "OPTIONS") {
//       res.header("Access-Control-Allow-Methods", "PUT,POST,PATCH,DELETE,GET");
//       return res.status(200).json({});
//     }
//     next();
//   });
app.listen(3000, () => {
    console.log('this is 3000')
});