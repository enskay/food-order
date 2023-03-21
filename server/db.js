const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://admin:1221345@cluster0.ki3olq7.mongodb.net/food-order?retryWrites=true&w=majority"
);

//connection'ın açık kapalı olmasına göre iki farklı opsiyon verdiğimiz veritabanını dinleyen metotları yazalım.

var db = mongoose.connection;

db.on("connected", () => {
  console.log("Mongo DB bağlantısı başarıyla sağlandı");
});

db.on("error", () => {
  console.log("Mongo DB bağlantısı arızalı");
});

module.exports = mongoose;
