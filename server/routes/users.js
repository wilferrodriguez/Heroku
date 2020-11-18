const express = require('express');
const router = express.Router();

const mysqlConnection  = require('../db/db');

// const config = {
//   headers: {
//     "Access-Control-Allow-Origin": "*",
//     "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
//   }
// };

router.post('/register',(req,res)=>{
  const {userEmail,password} = req.body;
  mysqlConnection.query(`INSERT INTO users(correo,contrasena) VALUES('${userEmail}','${password}')`, (err, results, fields) => {
    if (err) {
      res.json({ message:`Error`});
      return console.log(err.message);      
    }
    res.json({ message:`Usuario registrado`});
  });
});  

router.post('/login',(req,res)=>{
  const {userEmail,password} = req.body;
  mysqlConnection.query(`SELECT * FROM users WHERE correo ='${userEmail}' AND contrasena='${password}'`, (err, results, fields) => {
    if (err) {
      res.json({ message:`Error`});
      return console.log(err.message);
    }
    if(results.length>0){
      res.json({ message:`Bienvenido`});
    }
    else{
      res.json({ message:`Correo/contraseña errada, por favor verifique la info ingresada` });
    }
  });
});

// router.patch('/modulo/:id', (req, res) => {
//    const {modulo,mod} = req.body;  
//    const { id } = req.params;
//   mysqlConnection.query(`UPDATE modulos SET modulo = ?, modulos.mod= ? WHERE id = ?`, 
//   [modulo,mod,id], (err, rows, fields) => { 
//     if(!err) {
//       res.json({status: 'Módulo actualizado'});    } else {
//       console.log(err);
//     }
//   });
// });


module.exports = router;
