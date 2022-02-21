import cron from 'node-cron';

import { scrapGoogleSheet } from './sheetReader';

// scrapGoogleSheet();

// cron.schedule('* */1 * * *', () => {
//   scrapGoogleSheet();
// });