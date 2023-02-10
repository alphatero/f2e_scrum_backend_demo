import express, { Express } from 'express';
// import { db } from './firebase';
import routes from './routes';

// console.log(db);

const port = 3020;

const app: Express = express();

app.use(express.json());
routes(app);

app.listen(port, () => {
  console.log(`now listening on port ${port}`);
});
