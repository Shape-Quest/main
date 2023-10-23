//const User = require('../server')
const userController = {};
const mongoose = require('mongoose');
const User = require('../userModel')
const bcrypt = require ('bcrypt')



// userController.login = async (req, res, next) => {

// }

userController.signUp = async (req, res, next) => {
    console.log(req.params)
    try {
    const { username, password } = req.body;
    console.log('Creating user...');
    bcrypt.hash(password, 10, async (err, hash) => {
    if (err){
    console.error('Error hashing password', err);
    return next(err)
    }
    const newUser = new User({ username, password: hash });
    
    try {
    await newUser.save()
    console.log('New user Created', { username, password });
    res.locals.newUser = newUser;
    
    } catch (saveError) {
    console.error('Error saving user', saveError);
    return next(saveError) 
    }
    })
    } catch (err) {
    console.error('Error creating user', err)
    return next(err);
    }
    }

userController.login = async (req, res, next) => {
    console.log('logging in');
    try {
    const { username, password } = req.body;
    bcrypt.hash(password, 10, async (err, hash) => {
    const activeUser = User.findOne({ username, password: hash });
        
    if (activeUser) {
    console.log('Active user found');
    res.status(200).json({ message: "Login succesful", redirectTo: "/GameContainer" });
    } else {
        console.log("Error logging in");
        res.status(400).json({ message: "server side error during login" });
       }
      })
    }
     catch (err) {
        console.error("Error loggin in:", err);
        res.status(500).json({ message: "Server side error during login" });
    }
    }
// userController.signUp = async (req, res, next) => {
//     console.log(req.params)
//     try {
//         const { username, password } = req.body

//         console.log('creating user')
//         const newUser = new User({ username, password });
//         newUser.save();
//         res.locals.newUser = newUser
//         console.log('created newUser', { username, password })
//         return next()
//     } catch (err) {
//         return next(err)

//     }
// }

// userController.signUp = async (req, res, next) => {
//     console.log(req.params)
//     try {
//         const { username, password } = req.body;
//         console.log('Creating user...');
//         const newUser = new User({ username, password });
//         await newUser.save();

//         res.locals.newUser = newUser;
//         console.log('New user Created', { username, password });

//         // res.status(201).json({ message: "User created succesfully", redirectTo: "/" });
//     } catch (err) {
//         return next(err);
//     }
// }

// userController.login = async (req, res, next) => {
//     console.log('logging in')
//     try {
//         console.log('reqbody in usercontroller.login', req.body)
//         const { username, password } = req.body

//         const activeUser = await User.findOne({username, password})

//         if (activeUser){
//             console.log('Active user found')
//             return res.redirect('http://localhost:8080/')
//             // return next()
//         } else {
//             return console.log("Error logging in")

//         }
//     } catch (err) {
//         console.log("Error logging in", err)
//     }
// }

// userController.login = async (req, res, next) => {
//     console.log('logging in');
//     try {
//         const { username, password } = req.body;
//         const activeUser = await User.findOne({ username, password });

//         if (activeUser) {
//             console.log('Active user found');
//             res.status(200).json({ message: "Login succesful", redirectTo: "/GameContainer" });
//         } else {
//             console.log("Error logging in");
//             res.status(400).json({ message: "server side error during login" });
//         }
//     }
//     catch (err) {
//         console.error("Error loggin in:", err);
//         res.status(500).json({ message: "Server side error during login" });
//     }
// }
module.exports = userController