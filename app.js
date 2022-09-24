const express = require('express');
const app = express();
app.use(express.static('public'));


app.listen(3030, ()=>{
    console.log('Servidor funcionando en puerto 3030');
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});


app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/carrito', (req,res)=>{
    res.sendFile(__dirname + '/views/carrito.html');
});

app.get('/product-detail', (req,res) => {
    res.sendFile(__dirname + '/views/productDetail.html')
});

