import app from './app';
import config from './config/default';

const handleListening = () => {
  const port = config.web_service.port;
  console.log(`app listening in port : ${port}`);
};
app.listen(config.web_service.port, handleListening);
