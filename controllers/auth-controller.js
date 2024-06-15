// // auth-controller.js
// const User=require("../models/user-model");
// const home = async (req, res) => {
//     try {
//         res.status(200).send("Hello Akshay");
//     } catch (error) {
//         console.log(error);
//     }
// };

// const register = async (req, res) => {
//     try {


//         const {username,email,phone,password}=req.body;
        

//         const userExist=User.findOne({email:email});

//         if(userExist){
//             return res.status(400).json({msg:"email already exists"});
//         }

//         await User.create({username,email,phone,password});

        
        
//         res.status(200).send(req.body);

    
    
    
//     } catch (error) {
//         res.status(400).send({ msg: "page not found" });
//     }
// };

// module.exports = { home, register };
// controllers/auth-controller.js

// controllers/auth-controller.js

const User = require("../models/user-model");

const home = async (req, res) => {
    try {
        res.status(200).send("Hello Akshay");
    } catch (error) {
        console.log(error);
    }
};

const register = async (req, res) => {
    try {
        const { username, email, phone, password } = req.body;

        const userExist = await User.findOne({ email: email });// always await this promise

        if (userExist) {
            return res.status(400).json({ msg: "Email already exists" });
        }

        await User.create({ username, email, phone, password });

        res.status(200).send(req.body);
    } catch (error) {
        console.error(error);
        res.status(400).send({ msg: "Page not found" });
    }
};

module.exports = { home, register };
