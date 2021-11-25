import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from './user/user.service';

@Injectable()
export class AppService {
  
    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ) {}

    async login(phone: string) {
        const user = this.userService.findOne(phone);
        if (user) {
            const payload = {
                phone: (await user).phone,
                userId: (await user).id
            };
            const accessToken = this.jwtService.sign(payload);

            return accessToken;
        }
    }
  
}
