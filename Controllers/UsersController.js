import bcrypt from "bcrypt"; 
import jwt from "jsonwebtoken"; 
import User from "../Models/Users.js";

const registration = async (req, res) => {
    try {

        console.log(req.body)
        const saltRounds = 5
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(req.body.password, salt);

        console.log(hash)

        const rqBody = {
            name : req.body.name,
            email : req.body.email,
            password : hash,
        }

        const user = await User.create(rqBody);
        res.status(200).json({
            status: "success",
            message: {
                data: user,
            },
        });
    } catch (error) {
        res.status(400).json(error.errorResponse.errmsg);
        console.log(error);
    }
};

const signin = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                status: "fail",
                message: "Email and password are required",
            });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({
                status: "fail",
                message: "Invalid email or password",
            });
        }


        const isPasswordValid = await bcrypt.compare(password , user.password);
        
        if (!isPasswordValid) {
            return res.status(401).json({
                status: "fail",
                message: "Invalid email or password",
            });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "1h",
        });

        res.status(200).json({
            status: "success",
            message: "Login successful",
            token,
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "An error occurred during login",
        });
        console.log(error);
    }
};

export { registration, signin };