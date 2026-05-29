const app =require("./src/app");
const connectDB =require("./src/config/db");
connectDB();
require('dotenv').config();



app.listen(5000,()=>{
    console.log("server is running on port 5000");
})