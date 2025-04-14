import mongoose from "mongoose";
const connectToDatabase=async () => {
    const string="mongodb+srv://<db_username>:<db_password>@ews.2fqs7z0.mongodb.net/?retryWrites=true&w=majority&appName=EWS"
    try{
        await mongoose.connect("mongodb+srv://abhinavpal2405:abhinavpal2405@cluster0.ttyua.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    }
    catch(error){
        console.log(error)
    }
}
export default connectToDatabase