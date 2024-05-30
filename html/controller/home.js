 const colors = require("colors")
var  f=1 ;
let sign=1;
let fg = false
 const fs = require("fs")
async function home(req,res)
{
    let data = req.body
 console.log((colors.bgWhite(data)))
 let textdata = fs.readFileSync("./database/login.json")

 textdata = JSON.parse(textdata)
 console.log(textdata)
 let i = 0 ;
 while(i<textdata.length)
    {if( (textdata[i]["phone"]==data.phone) && (textdata[i]["password"]==data.password))
        {
           console.log("founded")
           
           change();
        }
        else{
            console.log(textdata[i]["email"]+"!="+data.email +":"+ textdata[i]["password"]+"!="+data.password)
            console.log("not found")
        }
          i++;
    }
    if (f==0)
        {    
            res.render("home")
           
        }
        else{
            res.render("404")

        }
         
   // res.render('signup')    
}
function change(){
    f = 0;
    sign =0 ;
    // changeagain()
    return f
}
// function changeagain(){
//     f=0;
//     sign = 0;
//     return fg = true;
// }

f=0;
module.exports = {home,
    f,
    sign,
    fg,
    
}