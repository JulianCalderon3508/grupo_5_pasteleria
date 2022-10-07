const mainController ={
    home:(req,res)=>{
        res.render('home');
    },
    compra:(req,res)=>{
        res.render('productCart');
    },
    login:(req,res)=>{
        res.render('login');
    },
    register:(req,res)=>{
        res.render('register');

    }
}

module.exports = mainController;