const Category = require("../models/Category");

const getAllCategory = async (req, res) => {
  try {
    const getCategories = await Category.findAll();

    res.json(getCategories);
  } catch (error) {
    consolelog(error);
  }
}

module.exports = getAllCategory;