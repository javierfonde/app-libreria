import { Controller, Get} from '@nestjs/common';
import {LibrosService} from "./libros.service"
@Controller('libros')
export class LibrosController {

    constructor(private libroService: LibrosService) {}

    @Get()
    getAllLibros(){
        return this.libroService.getAllLibros()
    }

}
