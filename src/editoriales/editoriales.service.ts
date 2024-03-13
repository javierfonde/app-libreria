import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Editorial } from './editorial.entity';

@Injectable()
export class EditorialesService {
  constructor(
    @InjectRepository(Editorial)
    private editorialesRepository: Repository<Editorial>,
  ) {}
}
