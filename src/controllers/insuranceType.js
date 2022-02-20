import { InsuranceType } from 'app/models'

const all = async (req, res) => {
  const types = await InsuranceType.findAll();
  return res.status(200).json({ types });
};

module.exports = {
  all,
}
