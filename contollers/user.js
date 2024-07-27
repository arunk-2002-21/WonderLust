const User = require("../models/user");

module.exports.renderSignUp = (req, res) => {
    res.render("user/signup.ejs");
};

module.exports.signUp = async (req, res) => {
    try{
        let {username, email, password} = req.body;
        const newUser = new User({email, username});
        const registeredUser = await User.register(newUser, password);
        console.log(registeredUser);
        req.login(registeredUser, (err) => {
            if(err){
                return next(err);
            }
            req.flash("success", "User was registered!");
            res.redirect('/listings');
        })
        
    }
    catch(error){
        req.flash("error", error.message);
        res.redirect("/signup");
    }
    
};

module.exports.renderLogin = (req, res) => {
    res.render("user/login.ejs");
};

module.exports.login = async(req, res) => {
    req.flash("success", "Welcome to Wonderlust You are Logged in");
    let redirectUrl = res.locals.redirectUrl || "/listings" 
    res.redirect(redirectUrl);
    // res.redirect(res.locals.redirectUrl);
};

module.exports.logout = (req, res, next) => {
    req.logout((err) => {
        if(err) {
            next(err); 
        }
        req.flash("success", "You are logged out!");
        res.redirect("/listings");
    })
};