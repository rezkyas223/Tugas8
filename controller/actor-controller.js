const Actor = require("../models/Actor.js");
const fs = require("fs");

const addActor = async (req, res) => {
  try {
    const actorSeedPayload = JSON.parse(fs.readFileSync("./actor-seeds.json"));
    actorSeedPayload.map((actor) => {
      const { actor_id, first_name, last_name } = actor;
      Actor.create({
        actor_id: actor_id,
        first_name: first_name,
        last_name: last_name,
        last_update: new Date(),
      });
    });

    res.json({message: "Seeder Add Successfully"})
  } catch (error) {
    throw error;
  }
};

const getAllActor = async (req, res) => {
  try {
    const getActors = await Actor.findAll();

    res.json(getActors);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  addActor,
  getAllActor,
};
