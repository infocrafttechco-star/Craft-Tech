const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
    },
    subject: {
      type: String,
      required: true,
    },
    projectType: {
      type: String,
      required: true,
    },
    projectInfo: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String, // optional
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Contact", ContactSchema);
