const mongoose = require("mongoose");
require("dotenv").config(); //jo bhi hmne define kiya hoga file wo load process wale object me
const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {  //fetch the url from the env file
        useNewUrlParser: true,
        useUnifiedTopology: true,

    })
        .then(() => console.log("Db ka  connection i successfull"))
    .catch ( (error) => {
    console.log("Issue in the db");
    console.error(error.message);

    //used to end the process which is running at the same time with an exit code in NodeJS. 
    process.exit(1);
})

}

module.exports  = dbConnect;