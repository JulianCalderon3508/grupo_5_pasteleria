const fs = require('fs');
const path = require('path');

const productosArchivo = path.join(__dirname, '../data/productsData.json');
const productosJson = JSON.parse(fs.readFileSync(productosArchivo, 'utf-8'));


const productController ={
    producto:(req,res)=>{
        let categoria = req.query.categoria      
		let productos = productosJson.filter(producto => producto.Categoria == categoria)        
        res.render('products', {
            productos,
            categoria
        })
    },
    detalle:(req,res)=>{
        let id = req.params.id   
        console.log(id)   ;
		let producto = productosJson.find(producto => producto.id == id)        
        res.render('productDetail', {
            producto            
        })
    },
    createProduct:(req,res)=>{
        res.render('createProduct');
    },

    agregarProducto:(req,res)=>{
        let image
		if(req.files[0] != undefined){
			image = req.files[0].filename
		} else {
			image = 'default-image.png'
		}

		( req.files[0] != undefined ) ? image = req.files[0].filename : image = 'default-image.png'

		let newProduct = {
			id: productosJson[productosJson.length - 1].id + 1,
			Imagen: image,
			...req.body,
		};
        productosJson.push(newProduct)
		fs.writeFileSync(productosArchivo, JSON.stringify(productosJson, null, ' '));

		res.redirect('/product?categoria=' + req.body.Categoria);
    },




    editProduct:(req,res)=>{
        res.render('editProduct');
    }
}
module.exports = productController;