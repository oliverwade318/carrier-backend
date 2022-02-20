import { Record, State, InsuranceType } from 'app/models'

const all = async (req, res) => {
  const { state, type } = req.body;
  const stateObj  = await State.findOne({where: { abbreviation: state }});
  const insuranceType  = await InsuranceType.findOne({where: { name: type }});

  if(!stateObj || !insuranceType){
    return res.status(404).json({error: 'record not found'});
  }
  
  const records = await Record.findAll({where: { stateId: stateObj?.id, insuranceTypeId: insuranceType.id }});
  return res.status(200).json({ records });
};

module.exports = {
  all,
}
