const mongoose = require('mongoose');
const initData = require('./data.js');
const Listing = require('../models/listing.js');

const MONGO_URL = "mongodb+srv://arunkamble122402:ITVpGIftqPq133WG@movielist.xclusj4.mongodb.net/?retryWrites=true&w=majority";

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