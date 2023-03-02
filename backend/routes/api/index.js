const router = require("express").Router();

const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");
const groupsRouter = require("./groups.js");

const { restoreUser } = require("../../utils/auth.js");
const { requireAuth } = require("../../utils/auth.js");
const { setTokenCookie } = require("../../utils/auth.js");

const { User } = require("../../db/models");

router.use(restoreUser);

router.use("/session", sessionRouter);

router.use("/users", usersRouter);

router.use("/groups", groupsRouter);


module.exports = router;
