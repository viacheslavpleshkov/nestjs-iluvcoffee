import { Module } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.controller.spec';


@Module({
    controllers: [CoffeesController],
    providers: [CoffeesService],
  })
export class CoffeesModule {}
