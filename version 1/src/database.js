const mongoose = require('mongoose');

const uri = 'mongodb+srv://masas:masasadmin@cluster0.sh9bv.mongodb.net/Administracion?retryWrites=true&w=majority'

const options = {useNewUrlParser: true, useUnifiedTopology: true};

mongoose.connect(uri, options).then(
    () => {console.log('Conectado a la DB')},
    err => {console.log(err)}
);

module.exports = mongoose
