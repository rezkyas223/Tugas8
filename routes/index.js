const express = require("express");
const { getAllActor, addActor } = require("../controller/actor-controller");
const getFilmById = require("../controller/film-controller");
const getAllCatgories = require("../controller/category-controller");
const getFilmByCategory = require("../controller/filmcategory-controller");

const router = express.Router();

router.post("/actors", addActor)
router.get("/actors", getAllActor);

router.get("/films/:id", getFilmById);

router.get("/categories", getAllCatgories);

router.get("/film-categories/:id", getFilmByCategory);

module.exports = router