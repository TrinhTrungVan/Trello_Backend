import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(
            process.env.MONGO_URI ||
                "mongodb+srv://TrungVan1904:TrungVan1904@mycluster.96efpsw.mongodb.net/Trello_Clone"
        );
        console.log("Connect successfully!");
    } catch (error) {
        console.log(error);
    }
};

export default connectDB;
