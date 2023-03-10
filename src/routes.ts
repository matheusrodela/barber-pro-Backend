import { Router, Request, Response } from 'express';

import { CreateUserController } from './controllers/user/CreateUserController'
import { AuthUserController } from './controllers/user/AuthUserController'
import { DetailUserController } from './controllers/user/DetailUserController';
import { UpdateUserController } from './controllers/user/UpdateUserController';

import { CreateHaircutController } from './controllers/haircut/CreateHaircutController';
import { ListHaircutController } from './controllers/haircut/ListHaircutController';
import { UpdateHaircutController } from './controllers/haircut/UpdateHaircutController';
import { CheckSubscriptionController } from './controllers/haircut/CheckSubscriptionController';
import { CountHaircutsController } from './controllers/haircut/CountHaircutsController';
import { DetailhaircutController } from './controllers/haircut/DetailHaircutController';

import { NewScheduleController } from './controllers/schedule/NewScheduleController';
import { ListScheduledController } from './controllers/schedule/ListScheduledController';
import { FinishScheduledController } from './controllers/schedule/FinishScheduledController';

import { isAuthenticated } from './middlewares/isAuthenticated';

const router = Router();

// --- ROTAS USER ---
router.post('/users', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)
router.get('/me', isAuthenticated, new DetailUserController().handle)
router.put('/users', isAuthenticated, new UpdateUserController().handle)


// --- ROTA HAIRCUTS ---
router.post('/haircut', isAuthenticated, new CreateHaircutController().handle)
router.get('/haircuts', isAuthenticated, new ListHaircutController().handle)
router.put('/haircut', isAuthenticated, new UpdateHaircutController().handle)
router.get('/haircut/check', isAuthenticated, new CheckSubscriptionController().handle)
router.get('/haircut/count', isAuthenticated, new CountHaircutsController().handle)
router.get('/haircut/detail', isAuthenticated, new DetailhaircutController().handle)


// --- ROTA AGENDAMENTO DE SERVI??OS ---
router.post('/schedule', isAuthenticated, new NewScheduleController().handle)
router.get('/scheduled', isAuthenticated, new ListScheduledController().handle)
router.delete('/scheduled', isAuthenticated, new FinishScheduledController().handle)

export { router };
