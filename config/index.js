
//const dotenv = require('dotenv');
import dotenv from 'dotenv';

dotenv.config();

export default {
  PORT: 5000,
  MONGO_URI: "mongodb://localhost:27017",
  MONGO_DB_NAME: "100Films",
  JWT_SECRET: process.env.JWT_SECRET
};
