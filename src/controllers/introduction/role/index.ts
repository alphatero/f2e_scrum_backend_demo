import { Request, Response, NextFunction } from 'express';
import { db } from '../../../firebase';

export const role = {
  get: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const ref = db.ref('introduction/role-info');

      ref.once('value', (snapshot) => {
        const data = snapshot.val();

        const cards = snapshot.child('cards').val();

        const cardsArray: unknown[] = [];

        Object.entries(cards).forEach(([, value]) => {
          cardsArray.push(value);
        });

        data.cards = cardsArray;

        // send the json data to the client
        res.status(200).send(data);
      });
    } catch (error) {
      next(error);
    }
  },
};

export default role;
