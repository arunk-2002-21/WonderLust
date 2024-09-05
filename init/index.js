const mongoose = require('mongoose');
const initData = require('./data.js');
const Listing = require('../models/listing.js');
require('dotenv').config();
const MONGO_URL = process.env.MONGO_ATLAS;

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
    initData.data = initData.data.map((obj) => ({...obj, owner: "66a4aa1e5e60163a948d6574"}));
    await Listing.insertMany(initData.data);
    console.log("data was initailized")
}


initDB();