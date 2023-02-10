import { Express } from 'express';
import { homeController } from '../controllers/home';
import { introductionController } from '../controllers/introduction';
import { examController } from '../controllers/exam';
import { thankyouController } from '../controllers/thankyou';

export default (app: Express) => {
  app.get('/api/home', homeController.get);
  app.get('/api/introduction/product-backlog', introductionController.productBacklog.get);
  app.get('/api/introduction/role', introductionController.role.get);
  app.get('/api/introduction/scrum', introductionController.scrum.get);
  app.get('/api/introduction/sprint-guide', introductionController.sprintGuide.get);
  app.get('/api/introduction/sprint-point', introductionController.sprintPoint.get);
  app.get('/api/exam/product-backlog', examController.productBacklog.get);
  app.get('/api/exam/sprint-point', examController.sprintPoint.get);
  app.get('/api/thankyou', thankyouController.get);
};
