const express = require('express')
const app = express()
const taskRoute = require('./routes/tasks.routes')

//middleware
app.set('view engine','ejs')
app.use(express.urlencoded({extended:false}))
app.use(express.static('public'))

app.use('/',taskRoute)

app.listen(3000,()=>{
    console.log('Server started.')
})