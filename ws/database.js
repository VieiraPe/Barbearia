import mongoose from "mongoose";
const URI = "";

mongoose.set("useNewUrlparser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);

mongoose.connect(URI).then(() => {
  console.log("DB is UP").catch(() => {
    console.log(err);
  });
});
