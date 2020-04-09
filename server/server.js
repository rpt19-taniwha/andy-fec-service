const mongoose = require('mongoose');
// eslint-disable-next-line node/no-unpublished-require
const app = require('./controllers/app');
const url = 'mongodb+srv://root:root@recservicedata-3vond.mongodb.net/recProducts?retryWrites=true&w=majority';

const port = process.env.PORT || 8081;

mongoose.connect(url, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

app.listen(port, () => console.log(`Listening on port ${port}`));
