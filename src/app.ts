import express, { Express } from 'express';
import routes from './routes';

const port = Number(process.env.PORT) || 3000;

const app: Express = express();

app.use(express.json());
routes(app);

app.listen(port, () => {
  console.log(`now listening on port ${port}`);
});
