import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://trungvan1904:trungvan1904@cluster0.ozaqi.mongodb.net/test");
        console.log("Connect successfully!");
    } catch (error) {
        console.log(error);
    }
};

export default connectDB;
