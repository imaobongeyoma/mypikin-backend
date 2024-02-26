const knex = require("knex")(require("../knexfile"));
require("dotenv").config();
const { db } = require("../knexfile.js");

//Get only daycare info for daycare
const singleDaycare = async (req, res) => {
  try {
    const single = await knex("daycares").where({ id: req.params.id }).first();

    if (!single) {
      return res
        .status(404)
        .json({ message: `Daycare with id ${req.params.id} not found` });
    }

    res.status(200).json(single);
  } catch {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//Get all info for single daycare
const singleDaycareInfo = async (req, res) => {
  try {
    const daycares = await knex("daycares")
      .join("users", "daycares.provider_id", "users.id")
      .join("daycarephotos", "daycarephotos.daycare_id", "daycares.id")
      .select("daycares.*", "daycarephotos.*", "users.*")
      .where({
        "daycares.id": req.params.id,
      });

    res.status(200).json(daycares);
  } catch (error) {
    res.status(500).send(`Error retrieving daycare info: ${error}`);
  }
};

//daycare list all daycares
const daycaresList = async (req, res) => {
  try {
    const daycares = await knex("daycares")
      .join("users", "daycares.provider_id", "users.id")
      .join("daycarephotos", "daycarephotos.daycare_id", "daycares.id")
      .select("daycares.*", "daycarephotos.*", "users.*");

    res.status(200).json(daycares);
  } catch (error) {
    res.status(500).send(`Error retrieving daycare: ${error}`);
  }
};

//createdaycare
const createDaycare = async (req, res) => {
  try {

    const { provider_id, name, daycare_description, provider_about, tag_line, price, hours_start, hours_close, street_number, street_name, city, postal_code, province, country } = req.body;
    const [newDaycareId] = await knex("daycares").insert({ provider_id, name, daycare_description, provider_about, tag_line, price, hours_start, hours_close, street_number, street_name, city, postal_code, province, country });

    const photoLinks = req.files.map((daycare_photos) => ({ daycare_id: newDaycareId, daycarephoto: daycare_photos.path}));
    await knex('daycarephotos').insert(photoLinks);
    res.status(201).json({message: "Daycare added successfully", daycareId: newDaycareId});
  } catch (error) {
    res.status(500).send(`Unable to create new daycare: ${error}`);
  }
};

const deleteDaycare = async (req, res) => {
  try {
    const deletedDaycare = await knex("daycares")
      .where({ id: req.params.id })
      .delete();
    res.status(204).end();
  } catch {
    res.status(404).json({
      message: `Unable to retrieve daycare with ID ${req.params.id}`,
    });
  }
};

const editDaycare = async (req, res) => {
  try {
    
    const {id, provider_id, name, daycare_description, provider_about, tag_line, price, hours_start, hours_close, street_number, street_name, city, postal_code, province, country } = req.body
    console.log(req.body)
    const daycarecount = await knex("daycares")
      .where({ id: req.params.id })
      .update({id, provider_id, name, daycare_description, provider_about, tag_line, price, hours_start, hours_close, street_number, street_name, city, postal_code, province, country });
    

    if (daycarecount.length === 0) {
      return res.status(404).json({
        message: `Daycare with id ${req.params.id} not found`,
      });
    }
    const updatedDaycare = await knex("daycares").where({
      id: req.params.id,
    }).first();

    res.status(200).json(updatedDaycare);
  } catch (error) {
    res.status(500).send(`Unable to edit daycare information: ${error}`);
  }
};
module.exports = {
  daycaresList,
  singleDaycareInfo,
  singleDaycare,
  editDaycare,
  deleteDaycare,
  createDaycare,
};
