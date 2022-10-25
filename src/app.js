const express = require('express');
const app = express();
const mainRouter = require('./routes/mainRoutes');
const productRouter = require('./routes/productsRouter');
const path = require('path');
const methodOverride =  require('method-override'); 

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(methodOverride('_method'));

app.set('views', path.join(__dirname,'/views'))
app.set('view engine', 'ejs');
app.use('/', mainRouter);
app.use('/product',productRouter);



app.listen(3030, ()=>{
    console.log('Servidor funcionando en puerto 3030');
});