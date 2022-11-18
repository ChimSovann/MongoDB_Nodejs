var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("students");
    var myobj = {
        rollno: "03",
        name: "Berlin",
        branch: "CSE",
        class: "SE"
    };
    dbo.collection("student").insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("new field created");
        db.close();
    });
});