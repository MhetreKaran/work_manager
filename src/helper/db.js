import mongoose from "mongoose";
export const connectDb = async()=>{
    try {
        const connection = await mongoose.connect(process.env.MONGO_DB_URL,{dbName:"work_manager"});
        console.log("db connected...");
        // console.log(connection);
        //testing and creating user
        // const uuser = new User({
        //     name:'test',
        //     email:'testing@test.com',
        //     password:'testing123',
        //     about:'this is testing'
        // })
        // await uuser.save();
        // console.log('user is created');
        // console.log("connection host",connection.host);

    } catch (error) {
        console.log("failed to connect with database");
        console.log(error);
    }
}