const mongoose = require('mongoose');
// eslint-disable-next-line node/no-unpublished-require
const app = require('./controllers/app');
const url = ''; // Add read only mongoDb Atlas URL

const port = process.env.PORT || 8081;

mongoose.connect(url, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

app.listen(port, () => console.log(`Listening on port ${port}`));
