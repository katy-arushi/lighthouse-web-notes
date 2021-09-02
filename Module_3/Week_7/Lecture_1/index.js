const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const { Console } = require("console");

const app = express();
const port = 8080;

app.use(cookieParser())
app.use(express.static("public")); // Static files (css / images)
app.use(bodyParser.urlencoded({ extended: false }));// Parses the body of a form request string in an object

app.set("view engine", "ejs"); //

let users = {
}

const authenticateUser = (email, password) => {
    const user = users[email];
    if(user){
        if(user.password === password){
            console.log("Perfect!")
            return user;
        }
        
        console.log("Not Perfect!")
        return null;
    }
    
    console.log("Who are you?")
    return null;
    
}

app.get("/", (req, res) => {
    console.log(req.cookies)
    const email = req.cookies["userEmail"];
    const user = users[email]
    
    const templateVars = {user : user}
    res.render("index", templateVars)
    
})

app.post("/login", (req, res) => {
    console.log(req.body);

    // const email = req.body.email;
    // const password = req.body.password;
    const {email, password} = req.body;
    const user = authenticateUser(email, password);
    if(user){
        res.cookie("userEmail", user.email)
    }

    res.render("index", {user : user, name : user? user.name : ""})

})

app.post("/logout", (req, res) => {
    res.clearCookie("userEmail")
    res.redirect('/')
})

app.get("/register", (req, res) => {
    res.render("register", {user: undefined});
})

app.post("/register", (req, res) => {
    const user = {
        email : req.body.email,
        name : req.body.name,
        password : req.body.password
    };

    users[req.body.email] = user;
    console.log("users : ", users)
    // const {email, name, password} = req.body;
    // users[email] = {email, name, password};

    res.redirect('/')

} )

app.listen(port, () => console.log(`Express server running on port ${port}`));