const fs = require('fs');
const path = require('path');

const productosArchivo = path.join(__dirname, '../data/productsData.json');
const productos = JSON.parse(fs.readFileSync(productosArchivo, 'utf-8'));


const productController ={
    producto:(req,res)=>{
        let categoria = req.params.categoria
        console.log(categoria);
		let productosss = productos.find(producto => producto.categoria == categoria)
        res.render('products', {
            productos
        })

    },
    createProduct:(req,res)=>{
        res.render('createProduct');
    },
    editProduct:(req,res)=>{
        res.render('editProduct');
    }
}
module.exports = productController;