import mongoose from "mongoose";


const streamSchema = mongoose.Schema(
    {
        thumbnail : {
           type : String,
        //    required : [true , "Stream must have video link"],
            unique: true,
        },

        VideoLink : {
            type : String,
            required : [true , "Stream must have video link"],
            unique: true,
        },

        title : {
            type : String,
            required : [true , "Stream must title"],
        },
        description : {
            type : String,
            required : [true , "Stream must descriprption"],
        },

        catagory : {
            type : String,
            required : [true , "Stream must title"],
        },

        status : {
            type : String,
            required : [true , "Stream must status"],
        },


    }
)


const Streams = mongoose.model("Stream" , streamSchema)

export { Streams }
