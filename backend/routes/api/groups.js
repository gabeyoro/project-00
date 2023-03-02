const express = require("express");
const router = express.Router();

const { Group, User } = require('../../db/models');

router.get('/', async (req, res) => {
  const count = await Group.aggregate('organizerId', 'max')
    const groups = await Group.findAll({ })
    return res.status(200).json({groups, count});
  }
);

module.exports = router;
