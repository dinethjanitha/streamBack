import mongoose from "mongoose";


const contactUsSchema = mongoose.Schema({
    name : {
        type : String,
        require : [true , "Name is required!"]
    },
    email : {
        type : String,
        require : [true , "Name is required!"]
    },
    subject : {
        type : String,
        require : [true , "Name is required!"]
    },
    message : {
        type : String,
        require : [true , "Name is required!"]
    }
})

const Contact = mongoose.model("ContactUs" , contactUsSchema)

export default Contact;