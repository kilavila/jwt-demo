import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {

    constructor() {}

    private readonly users = [
        {
          id: 1,
          username: 'christer',
          phone: '91192227',
        },
        {
          id: 2,
          username: 'preben',
          phone: '45458565',
        },
      ];
    
      async findOne(phone: string) {
        return this.users.find(user => user.phone === phone);
      }

}
