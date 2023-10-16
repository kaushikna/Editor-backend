const { DataTypes } = require("sequelize");
const sequelize = require("./index");
const Products = sequelize.define("Products", {
  uniqueID: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  htmlContent: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
  },
});

// Sync the model with the database (creates the table)s
sequelize
  .sync()
  .then(() => {
    console.log("Schema created successfully");
  })
  .catch((error) => {
    console.error("Error creating schema:", error);
  });

module.exports = Products;
