const mongoose = require('mongoose');
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.URI_DB)
        console.log("Connect successfully");
    } catch (error) {
        console.log("Connect Failed");
        console.log(error);
    }
}

module.exports = connectDB;