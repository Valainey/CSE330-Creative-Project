var mongodb = require('./db');

function Comment(name,comment) {
	this.name = name;
    this.comment = comment;
}

module.exports = Comment;

Comment.prototype.save = function(callback) {
var name = this.name;
    comment = this.comment;
	
mongodb.open(function (err, db) {
    if (err) {
        return callback(err);
    }
 
    db.collection('posts', function (err, collection) {
        if (err) {
            mongodb.close();
            return callback(err);
        }

        collection.update({"name": name}, {$push:{"comments":comment}}
        , function (err,comment) {
            mongodb.close();
           if (err) {
            return callback(err);
          }
          callback(null, comment);

        });   
    });
});
}