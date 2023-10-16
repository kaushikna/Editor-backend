const { DataTypes } = require("sequelize");
const sequelize = require("../models/index");

const User = sequelize.define("User", {
  uniqueID: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
sequelize
  .sync()
  .then(() => {
    console.log("Schema created successfully");
  })
  .catch((error) => {
    console.error("Error creating schema:", error);
  });

module.exports = User;
