import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(
        private userService: UserService
    ) {}

    @Get('phone/:phone')
    async getUserByPhone(@Param() params) {
        return this.userService.findOne(params.phone);
    }

}
