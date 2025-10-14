import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly users: UsersService) {}

  @Post('signup')
  signup(@Body() dto: CreateUserDto) {
    return this.users.signupLocal(dto);
  }

  @Get('confirm')
  confirm(@Query('token') token: string) {
    return this.users.confirmEmail(token);
  }
}