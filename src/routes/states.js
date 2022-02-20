import express from 'express';
import states from 'controllers/states';

const router = express.Router();

router.get(
  '/all',
  states.all,
);

module.exports = router;
