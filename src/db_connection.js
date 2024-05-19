import mongoose from "mongoose";

export const conectionDB = () =>{

    mongoose.connect(process.env.URI_MONGO,
        { useNewUrlParser: true, useUnifiedTopology: true }
    )
    const db = mongoose.connection
    
    db.on("error",console.error.bind(console,"conection failed: "))
    
    db.once("open", function () {
        console.log("database connected!")
    })
    

}