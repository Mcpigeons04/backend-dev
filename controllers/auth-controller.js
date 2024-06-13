// auth-controller.js
const home = async (req, res) => {
    try {
        res.status(200).send("Hello Akshay");
    } catch (error) {
        console.log(error);
    }
};

const register = async (req, res) => {
    try {
        console.log(req.body);
        res.status(200).send(req.body);
    } catch (error) {
        res.status(400).send({ msg: "page not found" });
    }
};

module.exports = { home, register };
