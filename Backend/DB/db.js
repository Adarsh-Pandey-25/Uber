import mongoose from "mongoose";

const connectDB= async()=> {
    try {
        await mongoose.connect(process.env.DB_URL).then(()=>{
            console.log(`Connected to Database ${process.env.DB_User}`);
        });
        
        
    } catch (error) {
        console.log("Connection to databse failed!!", error);
        
    }
};

export default connectDB;