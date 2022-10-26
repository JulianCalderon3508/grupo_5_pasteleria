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

		( req.files[0] != undefined ) ? image = req.files[0].filename : image = '';

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
        let id = req.params.id;
        console.log(id);
        let productoEditar = productosJson.find(producto => producto.id == id);
        res.render('editProduct', {productoEditar});
    },

    actualizar: (req,res)=>{
        let id = req.params.id;
        let image = '';
		let productoActualizar = productosJson.find(product => product.id == id)
        console.log(req.files);        
        console.log('EL BODY ES' + req.files)
		productoActualizar = {
			id: productoActualizar.id,
			...req.body,
			Imagen: productoActualizar.Imagen,
		};
		console.log(productoActualizar);
		let nuevoProducto = productosJson.map(producto => {
			if (producto.id == productoActualizar.id) {
				return producto = {...productoActualizar};
			}
			return productosJson;
		})

		fs.writeFileSync(productosArchivo, JSON.stringify(nuevoProducto, null, ' '));
		res.redirect('/product?categoria=' + req.body.Categoria);
    }
}
module.exports = productController;