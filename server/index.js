//express paketini tanımladık
const express = require("express");
//cors paketini tanımladık.
const cors = require("cors");
//app middleware i vasıtasıyla express kütüphanesine erişim sağladık.
const app = express();

//db için hazırlamış olduğumuz js dosyasını çağıralım.
const db = require("./db");
const burgerModel = require("./models/BurgerModel");
const burgersRoute = require("./routes/burgersRoute");

//middlewareimiz ile cors kütüphanesini kullanmayı ve json req ve res'lerinde hata almanın önüne geçtik.
app.use(express.json());
app.use(cors());

//servisleri route ile çağırma
app.use("/api/burgers", burgersRoute);

//serverımızı inşa edeceğimiz portu belirledik.
var port = 4000;
app.listen(4000, () => {
  console.log(
    `Food Order Serverı ${port} portunda başarıyla ayağa kalktı. 🔥🔥`
  );
});
