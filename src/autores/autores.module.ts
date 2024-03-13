import { Module } from '@nestjs/common';
import { AutoresController } from './autores.controller';
import { AutoresService } from './autores.service';
import { Autor } from './autor.entity';

@Module({
  imports: [],
  controllers: [AutoresController],
  providers: [AutoresService],
})
export class AutoresModule {}