const express=require('express');
const morgan=require('morgan');

const app=express();

const cors=require('cors');

// Requiriment

require ('./database');

// Middlewares

app.use(morgan('dev'));
app.use(express.json());
//---application/x-www-for-urlencoded
app.use(express.urlencoded({ extended: true }))
app.use(cors({origen : '*'})) //aqui debe ir el servicio donde este alojado el FrontEnd

app.use('/jefe', require('./routes/Jefe.route'));
app.use('/producto', require('./routes/Producto.route'))
app.use('/vendedor', require('./routes/Vendedor.route'))
app.use('/venta', require('./routes/Venta.route'))


// Port Config

app.set('puerto', process.env.PORT || 4000);
app.listen(app.get('puerto'), function () {
    console.log('Example app listening on port ' + app.get('puerto'));
});
 