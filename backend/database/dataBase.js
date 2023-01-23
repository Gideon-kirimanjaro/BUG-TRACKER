const mongoose = require("mongoose");

const connectToDb = (url) => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(url)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));
};
module.exports = { connectToDb };
// mongoose.connect(
//   process.env.MONGO_URL,
//   { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
//   () => {
//     console.log('Connected to MongoDB');
//   }
// );
