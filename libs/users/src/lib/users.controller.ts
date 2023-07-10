import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('/')
  public getProducts() {
    console.log('GET');
    return this.usersService.getProducts();
  }
}
