const express = require('express');
const port =3002;
const bodyParse = require('body-parse');
const routes = require('./routes/routes');
const { error } = require('console');
const app = express();

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({
    extended: true,
}));

routes(app);

const server = app.listen(port,(error) =>{
    if(error) return console.log(`Error: ${error}`);
    console.log(`EL servidor escucha en el puerto ${server.address().port}`)
}
);
