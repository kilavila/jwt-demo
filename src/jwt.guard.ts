import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { AppService } from './app.service';

@Injectable()
export class JwtGuard implements CanActivate {

  constructor(
    private appService: AppService
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest();

    if (req.route.path === '/auth/login') {
      return true;
    }

    const token = req.headers.authorization.split(' ')[1];

    this.appService.authenticate(token);

    return true;
  }

}
