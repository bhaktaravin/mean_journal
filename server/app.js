require('dotenv').config({ path: "./config.env"}); 

const express = require('express'); 
const bodyParser = require('body-parser'); 
const mongoose = require('mongoose'); 

const entryRouter = require('./routes/entry'); 


const app = express(); 

mongoose.connect("mongodb+srv://userOne:JUECc9PuA8RE5X69@cluster0.bff6seb.mongodb.net/journal", {
  useNewUrlParser: true
}); 

const conn = mongoose.connection; 

conn.on('open', () => {
  console.log('DB is connected...');
});


app.use(bodyParser.json()); 

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    next();
});
app.use('/api', entryRouter); 

app.get("/",(req,res) => {{
  res.send("<h1>Testing</h1>");
}})


app.listen('8080', ()=>{
  console.log(`Server is running at port : 8080`);
})