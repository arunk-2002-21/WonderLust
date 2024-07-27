const mongoose = require('mongoose');
const initData = require('./data.js');
const Listing = require('../models/listing.js');

const MONGO_URL="mongodb://localhost:27017/wonderlust";

main().then(() => {
    console.log("Connected to DB");
}).catch((err) => {
    console.log(err);
})

async function main(){
    await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj, owner: "6699628ef3756459a894486e"}));
    await Listing.insertMany(initData.data);
    console.log("data was initailized")
}

initDB();