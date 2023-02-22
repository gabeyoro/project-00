const express = require("express");
const router = express.Router();

const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");

const { requireAuth, setTokenCookie, restoreUser } = require("../../utils/auth");
const { User } = require("../../db/models");

const validateLogin = [
  check("credential")
    .exists({ checkFalsy: true })
    .notEmpty()
    .withMessage("Email or username is required."),
  check("password")
    .exists({ checkFalsy: true })
    .withMessage("Password is required."),
  handleValidationErrors,
];

router.get("/", requireAuth, restoreUser, (req, res) => {
  const { user } = req;
  if (user) {
    return res.json({
      user: user.toSafeObject(),
    });
  } else return res.json({ user: null });
});

router.post("/", validateLogin, async (req, res, next) => {
  const { credential, password } = req.body;

  const user = await User.login({ credential, password });

  if (!user) {
    const err = new Error("Login failed");
    err.status = 401;
    err.title = "Login failed";
    err.errors = { credential: "The provided credentials were invalid." };
    return next(err);
  }

  const token = await setTokenCookie(res, user);

  return res.status(200).json({
    user:{
      id: user.id, 
      firstName: user.firstName,
      lastName: user.lastName,
      email:  user.email, 
      token: token
    }
  });
});

router.delete("/", (_req, res) => {
  res.clearCookie("token");
  return res.json({ message: "success" });
});

module.exports = router;
