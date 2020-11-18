const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
//const sha1 = require("sha1");
// const cookieParser = require("cookie-parser");

const users = require('./routes/users');

const app = express();

app.use(express.json());
app.use(cors({origin: '*'}));

// Routes//
app.use('/api',users);

// app.use(
//   cors({
//     origin: ["http://localhost:3000"],
//     methods: ["GET", "POST"],
//     credentials: true,
//   })
// );
// app.use(cookieParser());

// app.use(
//   session({
//     key: "userId",
//     secret: "subscribe",
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//       expires: 60 * 60 * 24,
//     },
//   })
// );

// const db = mysql.createConnection({
//   user: "root",
//   host: "localhost",
//   password: "password",
//   database: "LoginSystem",
// });


// app.get("/login", (req, res) => {
//   if (req.session.user) {
//     res.send({ loggedIn: true, user: req.session.user });
//   } else {
//     res.send({ loggedIn: false });
//   }
// });

// app.post("/login", (req, res) => {
//   const username = req.body.username;
//   const password = req.body.password;

//   db.query(
//     "SELECT * FROM users WHERE username = ?;",
//     username,
//     (err, result) => {
//       if (err) {
//         res.send({ err: err });
//       }

//       if (result.length > 0) {
//         bcrypt.compare(password, result[0].password, (error, response) => {
//           if (response) {
//             req.session.user = result;
//             console.log(req.session.user);
//             res.send(result);
//           } else {
//             res.send({ message: "Wrong username/password combination!" });
//           }
//         });
//       } else {
//         res.send({ message: "User doesn't exist" });
//       }
//     }
//   );
// });

app.listen(3001, () => {
  console.log("running server");
});
