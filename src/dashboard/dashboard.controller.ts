import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('dashboard')
export class DashboardController {
  @Get()
  dashboardPage(@Res() res: Response) {
    res.render('dashboard');  // Render dashboard.hbs
  }
}
