const Products = require("../models/Product.js");
const { v4: uuidv4 } = require("uuid");

exports.listProduct = async (req, res) => {
  try {
    const allproudct = await Products.findAll();
    res.json({ data: allproudct, message: "product fetch sucessfully  " });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.getProductByID = async (req, res) => {
  const { uniqueID } = req.query;
  try {
    const getbyid = await Products.findOne({ where: { uniqueID: uniqueID } });
    if (!getbyid) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json({ data: getbyid, message: "product fetch sucessfully " });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.addProduct = async (req, res) => {
  const { name, htmlContent } = req.body;
  try {
    const uniqueID = uuidv4();
    const createproduct = await Products.create({
      name,
      htmlContent,
      uniqueID,
    });
    res.json({ data: createproduct, message: "product create sucessfully " });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
exports.updateProductById = async (req, res) => {
  const { uniqueID } = req.query;
  const { htmlContent } = req.body;
  try {
    // Assuming `createproducts` is your Sequelize model
    const updateproduct = await Products.findOne({ where: { uniqueID } });

    if (!updateproduct) {
      return res.status(404).json({ error: "Product not found" });
    }

    // Assuming `htmlContent` is the field you want to update
    if (htmlContent !== undefined) {
      updateproduct.htmlContent = htmlContent;
    }

    await updateproduct.save();

    res.json({ data: updateproduct, message: "Product updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message});
  }
};

exports.deleteProduct = async() =>{
    const { uniqueID } = req.query;
        try {
          const deteleproduct =  await createproducts.findOne({ where: { uniqueID } });
          if (!deteleproduct) {
            return res.status(404).json({ error: "User not found" });
          }
          await deteleproduct.destroy();
          res.json({ message: "User deleted successfully" });
        } catch (error) {
          console.error(error);
          res.status(500).json({error: error.message});
        }
}
