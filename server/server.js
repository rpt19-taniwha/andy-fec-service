const mongoose = require('mongoose');
// eslint-disable-next-line node/no-unpublished-require
const dbUrl = require('./database-mongo/config/database.config');
const app = require('./controllers/app');
const localDbUrl = 'mongodb://localhost/recProducts';

const url = dbUrl || localDbUrl;

const port = process.env.PORT || 8080;

mongoose.connect(url, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

app.listen(port, () => console.log(`Listening on port ${port}`));
