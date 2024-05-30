const {f} = require("./home")
const homeget = (req,res)=>{
  if(f==0)
    {
        res.render('homeget')
    }
}

module.exports={
    homeget
}