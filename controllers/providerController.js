const knex = require("knex")(require("../knexfile"));
require("dotenv").config();

//single user
  const selectUser = async (req, res) => {
    try {
      const user = await knex("users")
        .where({ id: req.params.id })
        .first();
  
      if (!user) {
        return res
          .status(404)
          .json({ message: `User with id ${req.params.id} not found` });
      }
  
      res.status(200).json(user);
    } catch {
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

  //edit user
  const editUser = async (req, res) => {
    try {
      const {id, first_name, last_name, email, username, password, phone_number, background_check_done, role  } = req.body
      
      const userdata = {id, first_name, last_name, email, username, password, phone_number, background_check_done, role  }
      

      if (req.file) {
        userdata.profile_image = req.file.path;
      }
      const user = await knex("users")
        .where({ id: req.params.id })
        .update(userdata);
  
      const updatedUser = await knex("users")
      .where({id: req.params.id})
      .first();

      if (updatedUser.length === 0) {
        res.status(404).json({
          message: `User with id ${req.params.id} not found`,
        });
      }


  
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).send(`Unable to edit user information: ${error}`);
    }
  };


  //get all users
const userList = async (_req, res) => {
    try {
      const allUsers= await knex.select("*").from("users");
      res.status(200).json(allUsers);
    } catch {
      res.status(500).send("Error getting databases");
    }
  };


  //Delete a user
const deleteUser = async (req, res) => {
    try {
      const userDeleted = await knex("users")
        .where({ id: req.params.id })
        .delete();
  
      if (userDeleted === 0) {
        return res
          .status(404)
          .json({ message: `User with ID ${req.params.id} not found` });
      }
  
      // No Content response
      res.sendStatus(204).end();
    } catch (error) {
      res.status(500).json({
        message: `Unable to delete User: ${error}`,
      });
    }
  };


  //GET Daycare info for a given user
const userDaycares = async (req, res) => {
    try {
      const userDaycare = await knex("users")
        .join("daycares", "daycares.provider_id", "users.id")
        .join("daycarephotos", "daycarephotos.daycare_id", "daycares.id")
        // .select("daycares*", "users*", "daycarephotos*")
        .select("daycares.*", "users.*", "daycarephotos.*" )
        .where({
          provider_id: req.params.id,
        });
  
      res.status(200).json(userDaycare);
    } catch (error) {
      res
        .status(404)
        .json({ message: `Unable to retrieve daycare for user with ID ${req.params.id}: ${error}`});
    }
  };

  module.exports = {
    // createUser, //for daycare provider
    // loginUser, //for user log in
    selectUser, //for mypikin admin
    editUser, //for mypikin admin
    userList, //for mypikin admin
    deleteUser, //for mypikin admin
    userDaycares, //for daycare provider
  }