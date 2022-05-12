//commit 1 cargue la conexion del grupo mysql
const { response } = require('express');
const pool = require('../data/config');
const router = app =>{
    app.get('/',(request, response)=>{
    
    response.send({
        message:' bienvenido a node.js express rest app!'
    });
});
