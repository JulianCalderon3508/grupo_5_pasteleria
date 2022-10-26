const express = require('express');
const productController = require('../controllers/productController')
const router = express.Router();
const multer = require('multer');
const path = require('path');
let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images')
    },
    filename: function(req,file,cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  }) 
  
let upload = multer({ storage: storage });
router.get('/',productController.producto);
router.get('/createProduct', productController.createProduct);
router.get('/detalle/:id', productController.detalle);
router.get('/editProduct/:id', productController.editProduct)
router.post('/', upload.any() , productController.agregarProducto); 
router.put('/editProduct/:id', upload.any(),productController.actualizar);
router.delete('/delete/:id', productController.destroy); 

module.exports = router;