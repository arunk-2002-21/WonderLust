const express = require('express');
const router = express.Router();
const User = require('../models/user.js');
const wrapAsync = require('../utils/wrapAsync.js');
const passport = require('passport');
const { saveRedirectUrl } = require('../middleware.js');
const UserController = require("../contollers/user.js");

router.route("/signup")
.get( UserController.renderSignUp)
.post( wrapAsync(UserController.signUp));


router.route("/login")
.get( UserController.renderLogin)
.post(saveRedirectUrl, passport.authenticate("local", { failureRedirect: '/login', failureFlash: true }), UserController.login);

router.get("/logout", UserController.logout);

module.exports = router;