const express = require("express"); //including or importing express in this app
const { request } = require("http");
const path = require("path"); //module to help with file path
const{MongoClient} = require("mongodb");//import MongoCient for mongodb
const dotenv = require("dotenv");
const cors = require("cors");

const app = express(); //Create an express app
const port = process.env.PORT || "8888"; //PORT is environment variable for process
dotenv.config();
//SET UP SOME PAGE ROUTES
app.use(cors());

//DB values
// const dbUrl = "mongodb://127.0.0.1:27017/twistedcartoons";
const dbUrl = `mongodb+srv://hannaelsa28:NrSk2EouvUfTfnRR@cluster0.1gcbuzk.mongodb.net/`;
// const dbUrl = "mongodb://dbuser:Test123!!@127.0.0.1:27017/?authSource=twistedcartoons";
const client = new MongoClient(dbUrl);

app.get("/",async(request,response)=>{
    //test getReviews()

     let projects =await getProjects();
     console.log(projects);
    response.json(projects);
});

app.listen(port,()=>{
    console.log(`Listening on http://localhost:${port}`)
});

//MongoDB Functions
async function connection(){
    await client.connect();
    db = client.db("portfolio");
    return db;
}
//Function to select all documents in the reviews collection
async function getProjects(){
    const db = await connection();
    const results = db.collection("Portfolio").find({});
    const res = await results.toArray();
    return res;
}
