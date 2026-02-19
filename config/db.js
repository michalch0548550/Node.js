
require('dotenv').config();
const { connect } = require('mongoose');

const ToConnect = () => {
  connect(process.env.CONNECTION_STRING)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));
};

module.exports = { ToConnect };