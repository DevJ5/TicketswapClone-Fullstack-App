import 'reflect-metadata';
import { createKoaServer, Action} from 'routing-controllers';
import setupDb from './db';
import { verify } from './jwt';
import UserController from './controllers/users';
import LoginController from './controllers/logins.';
import EventController from './controllers/events';
import TicketController from './controllers/tickets';
import CommentController from './controllers/comments'
import User from './entities/User';

const port = process.env.PORT || 4000;

const app = createKoaServer({
  cors: true,
  controllers: [
    UserController,
    LoginController,
    EventController,
    TicketController,
    CommentController
  ],
  authorizationChecker: async (action: Action, roles: string[]) => {
    const header: string = action.request.headers.authorization;

    if (header && header.startsWith('Bearer ')) {
      const [, token] = header.split(' ');
      if(token) {
        const userId = verify(token).data.id
        const user = await User.findOne(userId)
        console.log('roliones', roles)
        if(user && !roles.length) return true
        if(user && roles.find(role => user.roles === role)) return true
      }
    }
    return false;
  },
  currentUserChecker: async (action: Action) => {
    const header: string = action.request.headers.authorization;
    if (header && header.startsWith('Bearer ')) {
      const [, token] = header.split(' ');

      if (token) {
        const userId = verify(token).data.id;
        const user = await User.findOne(userId);
        return user
      }
    }
    return undefined;
  }
});

setupDb()
  .then(_ => app.listen(port, () => console.log(`Listening on port ${port}`)))
  .catch(err => console.error(err));
