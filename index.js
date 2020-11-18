const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
//const sha1 = require("sha1");
// const cookieParser = require("cookie-parser");

const users = require('./routes/users');

const app = express();

app.set('port', process.env.PORT || 3001);

app.use(express.json());

app.use(cors({origin: '*'}));
//app.use(cors({origin: 'https://kuepj-3000.sse.codesandbox.io'}));

app.get('/',(req,res)=>{
  res.send('hi');
});

// Routes//
app.use('/api',users);

app.listen(app.get('port'), () => {
  console.log(`running server port 3001`);
});