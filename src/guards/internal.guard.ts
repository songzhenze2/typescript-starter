import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class InternalGuard implements CanActivate {
  apiKey: string;
  constructor() {
    this.apiKey = 'hireez';
  }

  canActivate(context: ExecutionContext): boolean {
    const req = InternalGuard.getRequest<Request>(context);
    const key = req.header('csrf-token');
    if (key !== this.apiKey) {
      throw new UnauthorizedException();
    }
    return true;
  }

  private static getRequest<T>(context: ExecutionContext) {
    return context.switchToHttp().getRequest<T>();
  }
}
