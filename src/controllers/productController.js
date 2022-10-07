const productController ={
    producto:(req,res)=>{
        res.render('productDetail')

    },
    createProduct:(req,res)=>{
        res.render('createProduct');
    },
    editProduct:(req,res)=>{
        res.render('editProduct');
    }
}
module.exports = productController;