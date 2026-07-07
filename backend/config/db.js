import mongoose  from "mongoose";

export const connectDB =async()=>{
    await mongoose.connect("mongodb+srv://anitayadav767704_db_user:Jp2hlMHwXVtsTEcr@cluster0.pb5ucef.mongodb.net/Medicare")
    .then(()=>{
        console.log("DB CONNECTED")
    })
}