import mongoose from "mongoose";
const connectToDatabase=async () => {
    try{
        await mongoose.connect("mongodb+srv://abhinavpal2405:abhinavpal2405@cluster0.ttyua.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    }
    catch(error){
        console.log(error)
    }
}
export default connectToDatabase