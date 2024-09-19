import { Controller, Get, Post, Body, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('invoice')
export class InvoiceController {
  @Get('create')
  createInvoicePage(@Res() res: Response) {
    res.render('invoice/create');  // Render the form
  }

  @Post('create')
  createInvoice(@Body() body, @Res() res: Response) {
    console.log(body);  // Log the form data
    // Handle invoice creation logic here
    res.redirect('/dashboard');  // Redirect after submission
  }
}
