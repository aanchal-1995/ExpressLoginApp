var express = require('express');
var router = express.Router();

const credentials  = {
    email : "admin@gmail.com",
    password : "admin1234"
}

router.post('/login', (req,res)=>{
    if(req.body.email == credentials.email && req.body.password == credentials.password){
        req.session.user = req.body.email;
        res.redirect('/route/dashboard')
        // res.end("login Successful")
    }else{
        res.end("Invalid Credentials")
    }
})

router.get('/dashboard', (req,res)=>{
    if(req.session.user){
        res.render('dashboard', {user: req.session.user})
    }else{
        res.end("Invalid User")
    }
})

router.get('/logout', (req,res)=>{
    req.session.destroy(function(err){
        if(err){
            console.log(err);
            res.send("Error")
        }else{
            res.render('base', {title : 'Express', logout:'Logout Successful...!'})
        }
    })
})
module.exports = router;