const colors = require("colors")
const fs= require("fs")
const signup = async(req,res)=>{
  console.log(colors.magenta("signup page is started"))
  let data = req.body
  console.log(colors.italic("The data registered by the user is  :"+data).bgCyan)
  console.log(colors.green("data loading started..."))
  fs.appendFileSync("./database/login.txt",","+JSON.stringify(data))
  console.log(colors.green("data appended done in login.txt"))
  let textdata = fs.readFileSync("./database/login.txt")
  console.log(colors.green("data readed from login txt"))
  fs.writeFileSync("./database/login.json","["+textdata+"]")
  console.log(colors.green("data saved in login.json"))
  res.render("signup")

  console.log(colors.magenta("signup page is ended it's operation"))
}

module.exports = {signup}