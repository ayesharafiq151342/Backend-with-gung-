import express from 'express';
import { getUser,createUSer, Deleteuser, UpdateUser } from '../controler/usercontroler.js';

const routes = express.Router()
routes.post('/', createUSer);
routes.get('/', getUser);
routes.delete('/:id',Deleteuser);
routes.patch('//:id',UpdateUser);

export default  routes;