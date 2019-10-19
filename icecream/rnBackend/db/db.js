const mongoose = require("mongoose");

const mongodb_url = "mongodb+srv://claraayala:Abcabc123@cluster0-ydpcc.mongodb.net/test?retryWrites=true&w=majority";


mongoose.connect(mongodb_url, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

module.exports = {mongoose};


