const mongoose = require("mongoose");
const messageSchema = new mongoose.Schema(
  {
    message: { type: String, require: true },
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
    receiverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
  },
  { timestamps: true }
);
const message = mongoose.model("Message", messageSchema);
module.exports = message;
