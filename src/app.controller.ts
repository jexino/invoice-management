import { Controller, Get, Redirect } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Redirect('/auth/login', 302)
  root() {
    // Redirect to /auth/login page
  }
}
