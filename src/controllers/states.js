import { State } from 'app/models'

const all = async (req, res) => {
  const states = await State.findAll();
  return res.status(200).json({ states });
};

module.exports = {
  all,
}
