import { Module } from '@nestjs/common';
import { LibrosController } from './libros.controller';
import { LibrosService } from './libros.service';
import { Libro } from './libro.entity';

@Module({
  controllers: [LibrosController],
  providers: [LibrosService]
})
export class LibrosModule {}
