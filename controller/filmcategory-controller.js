// const Category = require("../models/Category");
// const Film = require("../models/Film");
const FilmCategory = require("../models/FilmCategory");

const getFilmByCategory = async (req, res) => {
  try {
    const idCategory = req.params.id;

    const findFilm = await FilmCategory.findAll({      
      where: {
        category_id: idCategory,
      },
    });

    res.json(findFilm);
  } catch (error) {
    console.log(error);
  }
};

module.exports = getFilmByCategory;
