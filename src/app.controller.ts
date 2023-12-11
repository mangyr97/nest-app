import { Body, Controller, Post } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { UserLoginResponse } from 'contracts';

@Controller()
export class AppController {
  constructor() {}

  @Post('login')
  login(@Body() dto: LoginDto): UserLoginResponse {
    console.log(dto);
    
    return {
      accessToken: 'token'
    } 
  }
}
