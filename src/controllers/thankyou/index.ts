import { Request, Response, NextFunction } from 'express';
import { db } from '../../firebase';

export const thankyouController = {
  get: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const ref = db.ref('thankyou');
      ref.once('value', (snapshot) => {
        const data = snapshot.val();

        const bubbles = snapshot.child('bubble').val();

        const bubbleArray: unknown[] = [];

        Object.entries(bubbles).forEach(([, value]) => {
          bubbleArray.push(value);
        });

        data.bubble = bubbleArray;

        // send the json data to the client
        res.status(200).send(data);
      });
    } catch (error) {
      next(error);
    }
  },
};

export default thankyouController;
