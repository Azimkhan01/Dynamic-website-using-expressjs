const home = require("./home")
const logout = (req,res)=>{
//   console.log(home.body() +"yehwala")
    if(home.f==0)
        {      console.log("running logout page")
            res.render('logout')
        }
        else{
            console.log("running error 404 for profile page")
            res.render('error')
        }
    }
module.exports = {logout}