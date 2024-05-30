const User = require("../models/user");

const getUsers = (request, response) => {
  return User.find({})
    .then((user) => {
      response.status(200).send(user);
    })
    .catch((e) => {
      response.status(500).send(e.message);
    });
};

const getUser = (request, response) => {
  const { user_id } = request.params;
  return User.findById(user_id)
    .then((user) => {
      if (!user) {
        response.status(404).send("User is not found");
      } else {
        response.status(200).send(user);
      }
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
};

const createUser = (request, response) => {
  const data = request.body;
  return User.create(data)
    .then((user) => {
      response.status(201).send(user);
    })
    .catch((e) => {
      response.status(500).send(e.message);
    });
};

const updateUser = (request, response) => {
  const { user_id } = request.params;
  const data = req.body;
  return User.findByIdAndUpdate(user_id, data, {
    new: true,
    runValidators: true,
  })
    .then((user) => {
      if (!user) {
        response.status(404).send("User is not found");
      } else {
        response.status(200).send(user);
      }
    })
    .catch((e) => {
      response.status(500).send(e.message);
    });
};

const deleteUser = (request, response) => {
  const { user_id } = request.params;
  return User.findByIdAndDelete(user_id)
    .then((user) => {
      if (!user) {
        response.status(404).send("User is not found");
      } else {
        response.status(200).send("Done");
      }
    })
    .catch((e) => {
      response.status(500).send(e.message);
    });
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
