import { Streams } from "../Models/Streams.js";

const addStreams = async (req,res) => {

    try{
        const stream = await Streams.create(req.body)

        res.status(200).json({
            status : "success",
            data : {
                stream : stream
            }
        })
    }catch(error){
        res.status(400).json({
            status : "fail",
        })
        console.log(error)
    }
}

const getAllStreams = async (req,res) => {
    try{
        const allStreams = await Streams.find()

        res.status(200).json(allStreams)

    }catch(error){
        console.log(error)
        res.status(400).json({
            status : "fail",  
        })
    }
}

const getStreamById = async (req,res) => {
    try{
        const {id} = req.params;

        const stream = await Streams.findById(id)

        if (!stream) {
            return res.status(404).json({
                status: "fail",
                message: "Stream not found",
            });
        }

        res.status(200).json({
            status: "success",
            data: {
                stream: stream,
            },
        });
    }catch(error){
        console.log(error);
        res.status(400).json({
            status: "fail",
            message: "Invalid id or error",
        });
    }
}
export { addStreams , getAllStreams , getStreamById}