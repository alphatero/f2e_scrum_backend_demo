import { Request, Response, NextFunction } from 'express';
import { db } from '../../../firebase';

export const productBacklog = {
  get: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const ref = db.ref('introduction/product-backlog');

      ref.once('value', (snapshot) => {
        const data = snapshot.val();

        const articles = snapshot.child('article').val();

        const articlesArray: unknown[] = [];

        Object.entries(articles).forEach(([, value]) => {
          articlesArray.push(value);
        });

        data.article = articlesArray;

        // send the json data to the client
        res.status(200).send(data);
      });
    } catch (error) {
      next(error);
    }
  },
};

export default productBacklog;
