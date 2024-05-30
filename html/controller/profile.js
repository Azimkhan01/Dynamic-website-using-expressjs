const home = require("./home")
const profile = (req,res)=>{
//   console.log(home.body() +"yehwala")
    if(home.f==0)
        {      console.log("running profile page")
            res.render('profile')
        }
        else{
            console.log("running error 404 for profile page")
            res.render('error')
        }
    }
module.exports = {profile}