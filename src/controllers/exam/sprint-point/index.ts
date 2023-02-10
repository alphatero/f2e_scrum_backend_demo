import { Request, Response, NextFunction } from 'express';
import { db } from '../../../firebase';

export const sprintPoint = {
  get: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const ref = db.ref('exam/product-backlog');

      ref.once('value', (snapshot) => {
        const data = snapshot.val();

        const tasks = snapshot.child('tasks').val();

        const tasksArray: unknown[] = [];

        Object.entries(tasks).forEach(([, value]) => {
          tasksArray.push(value);
        });

        data.tasks = tasksArray;

        // send the json data to the client
        res.status(200).send(data);
      });
    } catch (error) {
      next(error);
    }
  },
};

export default sprintPoint;
