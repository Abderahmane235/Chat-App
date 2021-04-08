const mongoose = require("mongoose");

const MessageSchema = mongoose.Schema(
  {
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    message: String,
    channel: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Message", MessageSchema);
