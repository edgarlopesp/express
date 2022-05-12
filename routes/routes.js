//commit 1 cargue la conexion del grupo mysql
const { response } = require('express');
const { request } = require('http');
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
//comit 3 mostrar un solo usuarios por id
app.get('/users/:id', (request, response)=>{
    const id = request.params.id;
    pool.query('    SELECT * FROM users WHERE id= ?',id, (error, result)=>{
        if (error) throw error;
        response.send(result);
    });
});

//comit 4 agregar un nuevo usuario
app.post('/users', (request, response)=>{
    pool.query('INSERT INTO users SET ?', request.body, (error, result)=>{
        if(error)throw error;
        response.status(201).send(`User added with ID: ${result.insertId}`);
    });
});

//comi5 put
add.put('/users/:id',(request, response)=>{
    const id =request.params.id;
    pool.query('UPDATE users SET ? WHERE id =?', [request.body, id], (error, result)=>{
        if(error) throw error;
        response.send('User updated successfully.');
    });
});

};