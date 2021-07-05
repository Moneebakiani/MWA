const mongoose = require("mongoose");
require("./paintings.model");
require("./user-model");

const dbName = "meanPaintings";
const dburl = "mongodb://localhost:27017/" + dbName;

mongoose.connect(dburl, { useNewUrlParser: true, useUnifiedTopology: true });


mongoose.connection.on("connected", function () {
    console.log("Mongosse Connected");
});

mongoose.connection.on("disconnected", function () {
    console.log("Mongosse disconnected");
})

mongoose.connection.on("error", function (err) {
    console.log("Mongoose Connection error", err);
});

process.on("SIGINT", function () {
    mongoose.connection.close(function () {
        console.log("send disconnection to mongoose because of application termination");
        process.exit(0);
    });
});

process.on("SIGTERM", function () {
    mongoose.connection.close(function () {
        console.log("Send disconnect to mongoose because of application termination");
        process.exit(0);

    });

});

process.on("SIGUSR2", function () {
    mongoose.connection.close(function () {
        console.log("Send disconnect to mongoose because of application restart");
        process.kill(process.pid, "SIGUSR2");
    });
});

