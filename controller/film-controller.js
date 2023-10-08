const Film = require('../models/Film.js');

const getFilmById = async (req, res) => {
  try {
    const id = await req.params.id;

    const findById = await Film.findAll({
      where: {
        film_id: id
      }
    })

    res.json(findById);
  } catch (error) {
    console.log(error);
  }
}

module.exports = getFilmById;