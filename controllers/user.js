const User = require("../models/user")
const {validationResult} = require('express-validator')
const user = require("../models/user")
// var jwt = require('jsonwebtoken')
// var expressJwt = require('express-jwt')


exports.signup = (req, res) => {
    const user = new User(req.body)
  user.save((err, user) => {
    if(err) { 
      console.log(err);
      user
    }
    return res.json({
      message: "Success",
      user
    });
  })
}

//   if(!errors.isEmpty()) {
//     return res.status(400).json({
//       error: errors.array()[0].msg
//     })
//   }



//   })
// }


// exports.signin = (req, res) => {
//   const {email, password} = req.body

//   User.findOne({email}, (err, user) => {
//     if(err || !user) {
//       return res.status(400).json({
//         error: "Email was not found"
//       })
//     }

//     // Authenticate user
//     if(!user.authenticate(password)) {
//       return res.status(400).json({
//         error: "Email and password do not match"
//       })
//     }

//     // Create token
//     const token = jwt.sign({_id: user._id}, process.env.SECRET)

//     // Put token in cookie
//     res.cookie('token', token, {expire: new Date() + 1})

//     // Send response
//     const {_id, name, email} = user
//     return res.json({
//       token,
//       user: {
//         _id,
//         name,
//         email
//       }
//     })
    
//   })
// }

// exports.signout = (req, res) => {
//   res.clearCookie("token")
//   return res.json({
//     message: "User siginout successful"
//   })
// }