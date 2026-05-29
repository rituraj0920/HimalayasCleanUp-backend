const express=require("express");

const cookieParser = require("cookie-parser");

const cors =require("cors");

const authRoutes=require("./routes/volunteerRoutes");






const app=express();

const allowedOrigins = [
  "http://localhost:5173",
  "https://himalayas-clean-up-eight.vercel.app"
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));

app.use(cookieParser());
app.use(express.json());





app.get("/",(req,res)=>{
    res.send("hello world");
})


app.use('/api/auth', authRoutes);
// app.use('/api/food', foodRoutes);
// app.use("/api/food-partner",foodPartnerRoutes);




module.exports= app;