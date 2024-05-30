const router = require("express").Router();
// const loggerOne = require('./middlewares/loggerOne');
const loggerTwo = require("../middlewares/loggerTwo");

// функции, которые обрабатывают роутеры, называются контроллерами
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/users");

router.use(loggerTwo);

router.get("/users", getUsers);
router.get("/users/:user_id", getUser);
router.post("/users", createUser);
router.put("/users/:user_id", updateUser);
router.delete("/users/:user_id", deleteUser);

module.exports = router;
