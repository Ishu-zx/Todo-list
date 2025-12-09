const express = require('express')
const router = express.Router()

let tasks = [],editvalue ='',index=null
// geting all tasks from the list
router.get('/',(req,res)=>{
    try {
        res.status(200).render('list',{tasks,editvalue})
    } catch (error) {
        res.status(400).send({error:error.message})
    }
})

// add task
router.post('/add',(req,res)=>{
    const task = req.body.task
    if(editvalue==''){
        tasks.push(task)
    }else{
        tasks[index]=task
        index=null
        editvalue = ''
    }
    res.redirect('/')
})

// edit task
router.get('/edit',(req,res)=>{
    editvalue = req.query.task
    index = req.query.index
    res.render('list',{tasks,editvalue})
})
//delete tasks
router.get('/delete',(req,res)=>{
    const task = req.query.task
    tasks = tasks.filter(item=> item != task)
    res.redirect('/')
})

module.exports = router