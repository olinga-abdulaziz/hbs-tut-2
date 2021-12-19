const express=require('express')
const { engine } =require('express-handlebars')


const app=express()


app.set('view engine', 'hbs')
app.engine('hbs', engine({
    extname:'.hbs',
    defaultLayout:'main',
    layoutsDir:__dirname + '/views/layout',
    partialsDir:__dirname + '/views/partials',
}))
app.set('views', './views')

app.use(express.static(__dirname + './public'))

app.get('/',(req,res)=>{
    res.render('main')
})

app.get('/about',(req,res)=>{
    res.render('about')
})

app.get('/contact',(req,res)=>{
    res.render('contact')
})


app.listen(3000,()=>console.log('server started at port 3000'))