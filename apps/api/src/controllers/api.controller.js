const getKeys = (req, res) => {
  const openApApiKEY = process.env.OPENAI_API_KEY;
  const googleClientID = process.env.GOOGLE_ClientID;
  const apiFootballKey = process.env.API_FB_KEY;

  const keys = {
    OPENAI_API_KEY: openApApiKEY,
    GOOGLE_ClientID: googleClientID,
    API_FB_KEY: apiFootballKey,
  };

  // console.log(keys);

  if (keys.OPENAI_API_KEY && keys.GOOGLE_ClientID && keys.API_FB_KEY) {
    res.json(keys);
  } else {
    console.error('Error fetching API keys in Controller');
    res.status(500).json({ message: 'An unknown error occurred in Controller' });
  }
};

export default {
  getKeys,
};
