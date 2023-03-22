const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const phoneSchema = new Schema(
  {
    name: String,
    manufacture: String,
    description: String,
    color: String,
    price: String,
    imageFileName: String,
    screen: String,
    ram: Number
  },
);

const Phone = model("Phone", phoneSchema);

module.exports = Phone;
