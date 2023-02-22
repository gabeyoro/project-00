const express = require("express");
const router = express.Router();

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const validateSignup = [
  check('email')
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage('Invalid email'),
  check('username')
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage('Please provide a username with at least 4 characters.'),
  check('username')
    .not()
    .isEmail()
    .withMessage('Username cannot be an email.'),
  check('password')
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage('Password must be 6 characters or more.'),
  check('firstName')
    .exists({ checkFalsy: true })
    .withMessage('First name is required'),
  check('lastName')
    .exists({ checkFalsy: true })
    .withMessage('Last name is required'),
  handleValidationErrors
];

router.post(
  '/',
  validateSignup,
  async (req, res) => {
    const { email, firstName, lastName, password, username } = req.body;
    const user = await User.signup({ email, firstName, lastName, username, password });

    const token = await setTokenCookie(res, user);

    return res.status(200).json({
        id: user.id, 
        firstName: user.firstName,
        lastName: user.lastName,
        email:  user.email, 
        token: token
    });
  }
);

module.exports = router;
