import { Injectable } from '@nestjs/common';
import { hash } from 'bcrypt';

@Injectable()
export class AppService {
  getHello(): string {
    hash('123456', 10, (err, hash) => {
      console.log(err, hash);
    });
    return 'Hello NestJS + Farm!';
  }
}
