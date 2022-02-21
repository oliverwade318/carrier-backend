import { GoogleSpreadsheet } from 'google-spreadsheet';

import { Record, State, InsuranceType, Carrier } from 'app/models'

const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID);

const scrapGoogleSheet = async () => {
  await doc.useApiKey(process.env.GOOGLE_API_KEY);
  await doc.loadInfo();

  let isSheetExist = true;
  let sheetIndex = 0;
  while(isSheetExist){
    const sheet = await doc.sheetsByIndex[sheetIndex];
    sheetIndex += 1;
    if(!sheet){
      isSheetExist = false;
      return;
    }
    const types = sheet?.title?.split('/');

    await saveTypes(types);

    const rows = await sheet.getRows();
    const headerValues = rows[0]._sheet?.headerValues;
    for(let i = 0; i < rows.length; i++){
      const carrierName = rows?.[i]?.[headerValues?.[0]];
      await findOrCreateCarrier(carrierName)
      for(let j = 1; j < headerValues.length; j++){
        const state = headerValues[j];
        const value = rows?.[i]?.[headerValues?.[j]];
        if (types.includes(value)){
          await saveRecord({state, type: value, carrier: carrierName})
        } else if (value?.toLowerCase() === 'both'){
          for(let k = 0; k < types.length; k++){
            await saveRecord({state, type: types?.[k], carrier: carrierName})
          }
        } else if(value?.toLowerCase() === 'yes'){
          await saveRecord({state, type: types?.[0], carrier: carrierName})
        }
      }
    }
  }
}

const saveTypes = async (types) => {  
  for(let i = 0; i < types.length; i++){
    const lowerType = types?.[i]?.toLowerCase();
    const type = await InsuranceType.findOne({where: {name: lowerType}});
    if(!type){
      await InsuranceType.create({name: lowerType});
    }
  }
}

const findOrCreateCarrier = async (name) => {
  const lowerName = name.toLowerCase();
  const carrier = await Carrier.findOne({where: {name: lowerName}});
  if(!carrier){
    await Carrier.create({name: lowerName})
  };
  return carrier;
}

const saveRecord = async ({state, type, carrier}) => {  
  if(!state || !type || !carrier){
    return;
  }
  const stateObj = await State.findOne({where: {abbreviation: state}, attributes: ['id']});
  const insuranceObj = await InsuranceType.findOne({where: {name: type.toLowerCase()}});
  const carrierObj = await Carrier.findOne({where: {name: carrier.toLowerCase()}, attributes: ['id']});

  const record = await Record.findOne({where: {stateId: stateObj?.id, carrierId: carrierObj?.id, insuranceTypeId: insuranceObj?.id}});

  if(!record){
    await Record.create({stateId: stateObj?.id, carrierId: carrierObj?.id, insuranceTypeId: insuranceObj?.id});
  }
}


module.exports = {
  scrapGoogleSheet,
}
