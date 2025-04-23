import Contact from "../Models/ContactUs.js";


const createMessage = async (req,res) => {
    try{
        const message = await Contact.create(req.body)

        res.status(200).json({
            status : "success",
            data : {
                message : message
            }
        })
    }catch(error){
        console.log("Error1")
    }
}


const getAllMessages = async (req,res) => {
    try{
        const messages  = await Contact.find();

        res.status(200).json({
            status : "success",
            data : {
                messages : messages
            }
        })
    }catch(erorr){
        console.log(error)
        res.status(400).json({
            status : "faild"
        })
    }
}

export { createMessage , getAllMessages}