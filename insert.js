var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("students");
    var myobj = [{
            rollno: "01",
            name: "China",
            branch: "CSE"
        },
        {
            rollno: "02",
            name: "Jamaica",
            branch: "CSE"
        }
    ];
    dbo.collection("student").insertMany(myobj, function(err, res) {
        if (err) throw err;
        console.log("table created");
        db.close();
    });
});