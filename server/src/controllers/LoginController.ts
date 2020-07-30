import { Request, Response, NextFunction, RequestHandler } from 'express';
import { get, controller, bodyValidator, post} from './decorators';

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined }
}

@controller('/auth')
class LoggingController {
  @get('/login')
  getLogin(req: Request, res: Response): void  {
    res.send(`
      <form method="Post">
        <div>
          <label>Email</label>
          <input name="email" />
        </div>
        <div>
          <label>Password</label>
          <input name="password" type="password"/>
        </div>
        <button>Submit</button>
      </form>
    `);
  };

  @post('/login')
  @bodyValidator('email', 'password')
  postLogin(req: RequestWithBody, res: Response) {
    const { email, password } = req.body;
  
    if (email && password && email === 'hi@hi.com' && password === 'password' ){
      req.session = { loggedIn: true};
      res.redirect('/');
    } else {
      res.send('Invalid email or password');
    }
  }

  @get('/logout')
  getLogout(req: Request, res: Response) {
    req.session = null;
    res.redirect('/');
  }
}