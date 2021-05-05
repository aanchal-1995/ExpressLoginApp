const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8000;
app.use(express
    .urlencoded({
        extended : true
    }))
app.set('views', path.join(__dirname,"views"))
app.set("view engine", "pug")
app.get('/', (req,res)=>{
    res.render('index', {title : "Form Handling"})
})
app.post('/form_submit', (req,res)=>{
    const username = req.body.username;
    const email = req.body.email;
    res.end(`Your username is ${username} and your email is ${email}`)
})
app.listen(PORT, ()=>{console.log(`Application is running at http://localhost:${PORT}`)});


// app.set('view engine', 'pug');
// app.get('/', function(req,res){
//     res.render('vindex')

// }).listen(8000,()=> console.log("App listening to http://localhost:8000"));

const express = require('express');
const session = require('express-session')
const app = express();
const PORT = process.env.PORT || 8000;
app.use(session({
    secret: "Your secret key",
    resave: true,
    saveUninitialized : true
}));
app.get("/", (req,res)=>{
    req.session.name = "John"
    return res.send("Session Set")
})
app.get('/session', (req,res)=>{
    var name =req.session.name;
    return res.send(name)
})
app.get('/destroyed', (req,res)=>{
    req.session.destroy((req,res)=>{
        console.log("Session Destroyed")
    })
    return res.send("Session")
})
app.listen(PORT, ()=>{console.log(`Application is running at http://localhost:${PORT}`)});


