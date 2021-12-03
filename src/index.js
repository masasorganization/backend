const createRoles =require('./helper/initialSetup.js')
const express =require('express')
const morgan =require('morgan')

const app=express();

const cors = require('cors');
const Roles = createRoles();

// Requiriment

require ('./database');

// Middlewares

app.use(morgan('dev'));
app.use(express.json());
//---application/x-www-for-urlencoded
app.use(express.urlencoded({ extended: true }))
app.use(cors({origen : '*'})) //aqui debe ir el servicio donde este alojado el FrontEnd

app.use('/usuarios', require('./routes/Jefe.route'));
app.use('/productos', require('./routes/Producto.route'))
app.use('/ventas', require('./routes/Venta.route'))

// Port Config
 
app.set('puerto', process.env.PORT || 4000);
app.listen(app.get('puerto'), function () {
    console.log('Example app listening on port ' + app.get('puerto'));
});
 