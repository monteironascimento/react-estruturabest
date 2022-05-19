import { Router, Request, Response } from 'express';
import { getLojas } from './api/controller/LojaControllerApi';

const routes = Router();

routes.get('/', getLojas)

export default routes;