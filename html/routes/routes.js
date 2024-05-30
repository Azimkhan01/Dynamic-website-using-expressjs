
const express = require("express")
const {login} = require("../controller/login")
const {signup} = require("../controller/signup")
const {home} = require("../controller/home")
const {error} = require("../controller/error.js") 
const {profile} = require("../controller/profile")
const {homeget} = require("../controller/homeget.js")
const {about} = require("../controller/about.js")
const {logout} = require("../controller/logout.js")
const path = require("path");
const hbs =  require("hbs")
const colors = require("colors")
const router = express.Router();
// router.use(express.json())
// router.use(express.urlencoded())
router.route("/login").get(login)
router.route("/signup").post(signup)
router.route("/home").post(home)
router.route("/profile").get(profile)   
router.route("/home").get(homeget)
router.route("/about").get(about)
router.route("/logout").get(logout)
router.route("*").get(error)


module.exports = router