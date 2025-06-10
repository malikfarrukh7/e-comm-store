const express = require('express');
const mongoose = require('mongoose');
const cors  = require('cors');
const app = express();
const port = 3000;
const categoryRoutes  = require('./routes/category');
const brandRoutes  = require('./routes/brand')

app.use(express.json());
app.use(cors({
  origin: '*', // Allow all origins, you can specify specific origins if needed
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow specific HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'] // Allow specific headers
}));

app.get("/", (req, res) => {
  res.send("server running");
});


app.use("/category", categoryRoutes);

app.use("/brand", brandRoutes);

async function connectDB(){
  await mongoose.connect("mongodb://localhost:27017",{dbName:"e-comm-store-db"})
  console .log("connected to db");
}

connectDB().catch((err)=>{
  console.error(err);
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});