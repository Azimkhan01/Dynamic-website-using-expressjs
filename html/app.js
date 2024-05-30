const express = require("express") //exprees added module
const colors = require("colors") //colors added module
const path = require("path")
const hbs = require("hbs")
const app = express();
const publicpath = path.join(__dirname,"./views")
const partialpath = path.join(__dirname,"./views/partials")
const fs = require("fs")
app.use(express.json())
app.use(express.urlencoded())
app.use(express.static(publicpath))
const routes = require("./routes/routes")
app.use("/",routes)
app.set('view engine','hbs')
hbs.registerPartials(partialpath)
 

const Port = 8000
app.listen(8000,'127.0.0.1',()=>{
    console.log(`\n The server is running at port: ${Port}`.bgGreen+"\n")
})