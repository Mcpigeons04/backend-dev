const User = require("../models/user-model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const home = async (req, res) => {
    try {
        res.status(200).send("Hello Akshay");
    } catch (error) {
        console.error(error);
    }
};

const register = async (req, res) => {
    try {
        const { username, email, phone, password } = req.body;

        const userExist = await User.findOne({ email: email });

        if (userExist) { 
            return res.status(400).json({ msg: "Email already exists" });
        }

        const saltRound = 10;
        const hash_password = await bcrypt.hash(password, saltRound);

        const newUser = await User.create({ username, email, phone, password: hash_password });

        // Generate JWT token
        const token = await newUser.generateToken();

        res.status(200).json({ 
            user: {
                username: newUser.username,
                email: newUser.email,
                phone: newUser.phone,
                isAdmin: newUser.isAdmin
            },
            token 
        });

    } catch (error) {
        
        // res.status(400).send({ msg: "Page not found" });
        next(error);//error middleware
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userExist = await User.findOne({ email });

        if (!userExist) {
            return res.status(400).json({ message: "Invalid Credentials" });
        }

        const isPasswordValid = await bcrypt.compare(password, userExist.password);

        if (isPasswordValid) {
            const token = await userExist.generateToken();

            res.status(200).json({
                user: {
                    username: userExist.username,
                    email: userExist.email,
                    phone: userExist.phone,
                    isAdmin: userExist.isAdmin
                },
                token
            });
        } else {
            res.status(401).json({ message: "Invalid email or password" });
        }
    } catch (error) {
        console.error(error);
        // res.status(500).json("Internal server error");
        next(error);
    }
};

module.exports = { home, register, login };
