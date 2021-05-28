import mongoose from 'mongoose';
import app from './app';
import config from './config/default';

const mongo_uri = config.mongodb.mongo_uri;
const mongo_dbname = config.mongodb.mongo_dbname;
mongoose
  .connect(mongo_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    console.log(`Successfully connected to mongodb : ${mongo_dbname}`)
  )
  .catch((e) => console.log(e));

const handleListening = () => {
  const port = config.web_service.port;
  console.log(`app listening in port : ${port}`);
};
app.listen(config.web_service.port, handleListening);
