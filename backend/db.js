const mongoose = require('mongoose');
const mongoURL = ("mongodb://zomato:zomato123@ac-xcrgeko-shard-00-00.o06j9ry.mongodb.net:27017,ac-xcrgeko-shard-00-01.o06j9ry.mongodb.net:27017,ac-xcrgeko-shard-00-02.o06j9ry.mongodb.net:27017/test?ssl=true&replicaSet=atlas-63homh-shard-0&authSource=admin&retryWrites=true&w=majority")

const mongoDB = () => {
  return mongoose.connect(mongoURL, { useNewUrlParser: true })
    .then(() => {
      console.log("connected");
      const fetched_data = mongoose.connection.db.collection("fooditems");
      return fetched_data.find({}).toArray()
    })
    .then((data) => {
      global.fooditems = data;
      const foodCategory = mongoose.connection.db.collection("foodCategory");
      return foodCategory.find({}).toArray()
    })
    .then((catData) => {
      global.foodCategory = catData;
    })
    .catch((err) => {
      console.log("---", err); 
    });
}

module.exports = mongoDB;

