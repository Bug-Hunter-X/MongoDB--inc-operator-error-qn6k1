```javascript
//Correct usage of $inc operator in MongoDB update operation
db.collection('myCollection').updateOne({"_id": ObjectId("650b23e59679a7f25a56816c")}, {"$inc": {"count": 10}});
```