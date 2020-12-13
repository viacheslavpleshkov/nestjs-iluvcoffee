import { 
    Query, 
    Controller, 
    Get, 
    Post, 
    Body, 
    Param, 
    HttpCode, 
    HttpStatus, 
    Res, 
    Patch, 
    Delete 
} from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
    @Get()
    findAll(@Res() response, @Query() paginationQuery) {
        const { limit, offset } = paginationQuery;
        response.status(200).send(`This action returns all coffees. Limit ${limit}, offset: ${offset}`);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return `This action returns #${id} coffee`;
    }

    @Post()
    @HttpCode(HttpStatus.GONE)
    create(@Body() body) {
        return body;
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() body) {
        return `This action updates #${id} coffee`;
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return `This action removes #${id} coffee`;
    }
}
