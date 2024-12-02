const mongoose = require("mongoose");

require("dotenv").config();
exports.connect = () => {
    mongoose.connect(process.env.MONGODB_URL, {
        userNewUrlParser : true,
        useUnifiedTopology: true,
    })
    .then(() => {console.log("Db is connected successfully")})
    .catch((err) => {
        console.log("Db connection issues");
        console.log(err);
        process.exit(1);
    });
}