var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("students");
    var myquery = { branch: "CSE" };
    dbo.collection("student").deleteMany(myquery, function(err, obj) {
        if (err) throw err;
        console.log(" document(s) deleted");
        db.close();
    });
});