import express from "express"
import routeNotif from "./routes/index.js"
import mongoose from "mongoose"

const app = express()
const port = 3030

//koneksi mongodb
mongoose.connect("mongodb://localhost:27017/apiJS",{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;

//jika terjadi error
db.on('error',(error)=>console.log(error));
//jika sudah berhasil masuk
db.once('open', () => console.log("Database Terkoneksi"));

//untuk melakukan convert data expressJS menjadi JSON
app.use(express.json());

//route yang digunakan
app.use('/notification', routeNotif);

//listening port
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})