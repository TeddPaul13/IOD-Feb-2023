"use strict"
module.exports = (app) => {

    const calculatorController = require('../controllers/calculatorController')
    const teamController = require('../controllers/teamController')
    // Root router
    app.get("/", (req, res) => {
        res.send('MVC Structure')
    })

    //Calculator operation
    app.get('/teddy/add', (req, res) =>{
        calculatorController.addNumbers(req,res)
    })

    //Calculator operation
    app.get('/team/fetchTeamDetails', (req, res) =>{
        teamController.fetchTeamDetails(req,res);
    })
}