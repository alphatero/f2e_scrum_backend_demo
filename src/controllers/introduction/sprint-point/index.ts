import { Request, Response, NextFunction } from 'express';
import { db } from '../../../firebase';

export const sprintPoint = {
  get: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const ref = db.ref('introduction/sprint-guide');

      ref.once('value', (snapshot) => {
        const data = snapshot.val();

        const titles = snapshot.child('titles').val();

        const article = snapshot.child('article').val();

        const titlesArray: unknown[] = [];
        const articleArray: unknown[] = [];

        Object.entries(titles).forEach(([, value]) => {
          titlesArray.push(value);
        });

        Object.entries(article).forEach(([, value]) => {
          articleArray.push(value);
        });

        data.titles = titlesArray;
        data.article = articleArray;

        // send the json data to the client
        res.status(200).send(data);
      });
    } catch (error) {
      next(error);
    }
  },
};

export default sprintPoint;
