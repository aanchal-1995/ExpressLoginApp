const express = require('express')
const path = require('path')
const bodyparser = require('body-parser')
const session = require('express-session')
const {v4:uuid4} = require('uuid');
const router = require('./router');
const app = express()

const PORT = process.env.PORT || 3000;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}))
app.use(session({
    secret:uuid4(),
    resave: true,
    saveUninitialized:true
}))

app.use('/static', express.static(path.join(__dirname, 'public')))
app.use('/assets', express.static(path.join(__dirname, 'public/assets')))

app.set("view engine", "ejs");
app.use('/route', router);

app.get('/', (req,res)=>{
    res.render('base', {title:"Login System" })
})

app.listen(PORT, ()=>{
    console.log(`Application is running on http://localhost:${PORT}`)
})