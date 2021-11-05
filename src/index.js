const express=require('express');
const morgan=require('morgan');
const cors=require('cors');

const app=express();

require('./database');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'), function () {
    console.log('Example app listening on port ' + app.get('puerto'));
});
