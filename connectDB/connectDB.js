import mongoose from "mongoose";
const connectDB = async()=>{
    const connect = await mongoose.connect('mongodb://localhost:27017/crud_node');
    if (connect){
        console.log('connection successful......')
    }else{
        console.log("connection failed......")
    }
}

export default connectDB;