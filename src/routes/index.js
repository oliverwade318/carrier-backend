import express from 'express';
const router = express.Router();

import states from './states';
import records from './records';
import insuranceTypes from './insuranceType';

router.use('/states', states);
router.use('/records', records);
router.use('/insurance-types', insuranceTypes);

module.exports = router;
