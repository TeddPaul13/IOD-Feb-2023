const { default: axios } = require("axios");

exports.fetchTeamDetails = async (req, res) => {
  try {
    const response = await axios.get('https://api.squiggle.com.au/?q=teams');
    if (response.status === 200) {
      res.status(200);
      res.json({result: response.data});
    }
    res.status(404);
    res.json({
      isSuccess: false,
      messaage: 'Unable to fetch team details'
    })
  } catch (error) {
    res.status(404);
    res.json({
      isSuccess: false,
      messaage: error.messaage
    })
  }
};