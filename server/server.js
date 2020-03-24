const mongoose = require('mongoose');
// eslint-disable-next-line node/no-unpublished-require
const dbUrl = require('./database-mongo/config/database.config');
const app = require('./controllers/app');

const port = process.env.PORT || 8080;

mongoose.connect(dbUrl, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

app.listen(port, () => console.log(`Listening on port ${port}`));
