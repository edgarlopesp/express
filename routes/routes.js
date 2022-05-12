//commit 1 cargue la conexion del grupo mysql
const { response } = require('express');
const pool = require('../data/config');
const router = app =>{
    app.get('/',(request, response)=>{
    
    response.send({
        message:' bienvenido a node.js express rest app!'
    });
});

  //comit2  //mostrar todos los usurairos
  app.get('/users',(request, response)=> {
    pool.query('SELECT * FROM users',(error,result)=>{
        if(error)throw error;
        response.send(result);
    });
});
