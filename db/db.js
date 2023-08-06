const mongoose = require("mongoose");

const db = async () => {
  const MONGO_URI =
    process.env.MONGO_URL ||
    "mongodb+srv://usmanlatif762:myproject@cluster0.sqmj7dr.mongodb.net/?retryWrites=true&w=majority";

  //------------DB CONNECTION---------------//
  mongoose.set("strictQuery", false);
  mongoose
    .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("DB connected");
    })
    .catch((error) => {
      console.log("DB not connected", error);
    });

  // try {
  //     mongoose.set('strictQuery', false)
  //     await mongoose.connect(process.env.MONGO_URL)
  //     console.log('Db Connected')
  // } catch (error) {
  //     console.log('DB Connection Error');
  // }
};

module.exports = { db };
