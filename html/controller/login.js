//Creating a login function which will handle login page data 
const express = require('express')
const router = express.Router(); 
const colors = require("colors")
const fs = require("fs");

const app = express();
async function login(req,res){
   console.log(colors.bgWhite("the page page started \n"))
   res.render('login')  
   console.log(colors.bgWhite("the login page operation done \n"))
}

module.exports = {login}