const db= require('./crud.js');
const express= require('express')
const path=require('path')
const hbs=require('hbs')
const mail=require('./email.js')

const port=process.env.PORT || 3000
const app=express()

//Define paths for express config
const viewspath= path.join(__dirname,'../sqlproject/templates/views')
const partialPaths= path.join(__dirname,'../sqlproject/templates/partials')
const publicDirevtoryPath = path.join(__dirname,'../sqlproject/public')


//setup handlebars engine an view location
app.set('view engine', 'hbs')
app.set('views', viewspath)
hbs.registerPartials(partialPaths)

//setup static directory to serve
app.use(express.static(publicDirevtoryPath))

app.get('',(req,res)=>{
    res.render('index',{
        title:'Collecting Data',
        name:'Parthdhwajendra'
    })
})


app.get('/testing',(req,res)=>{
   
    db.createTable('datatable');
    var values = [
    [req.query.fname, req.query.mname,req.query.lname,req.query.state,req.query.city,req.query.email,req.query.favbook,req.query.favpoem]];
    res.send({
        message:"Successfully Inserted"
    })

    db.addRow(values,"datatable");
    mail.send_email(req.query.email);
})




app.get('/about',(req,res)=>{
    res.render('about',{
        about:'This is about Nodejs',
        title:'About',
        name:'Parthdhwajendra'
    })
})
app.listen(port);