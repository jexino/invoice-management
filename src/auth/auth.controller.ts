import { Controller, Get, Post, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('auth')
export class AuthController {

  @Get('login')
  loginPage(@Res() res: Response) {
    res.render('auth/login');
  }

  @Get('register')
  registerPage(@Res() res: Response) {
    res.render('auth/register');
  }

  @Post('login')
  login(@Res() res: Response) {
    // Handle login logic
  }

  @Post('register')
  register(@Res() res: Response) {
    // Handle register logic
  }
}
