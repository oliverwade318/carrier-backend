import express from 'express';
import insuranceType from 'controllers/insuranceType';

const router = express.Router();

router.get(
  '/all',
  insuranceType.all,
);

module.exports = router;
