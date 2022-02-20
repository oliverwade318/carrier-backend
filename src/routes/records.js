import express from 'express';
import records from 'controllers/records';

const router = express.Router();

router.post(
  '/all',
  records.all,
);

module.exports = router;
