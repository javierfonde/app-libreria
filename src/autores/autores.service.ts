import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Autor } from './autor.entity';

@Injectable()
export class AutoresService {
  constructor(
    @InjectRepository(Autor)
    private autoresRepository: Repository<Autor>,
  ) {}
}
