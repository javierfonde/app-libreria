import { Entity, Column, ManyToMany, JoinTable } from 'typeorm';
import { Libro } from '../libros/libro.entity';

@Entity()
export class Autor {
  @Column({ primary: true, generated: 'increment' })
  id: number;

  @Column()
  nombre: string;

  @Column()
  apellido: string;

  @Column()
  dni: string;

  @Column()
  nacionalidad: string;

  @ManyToMany(() => Libro, libro => libro.autores)
  libros: Libro[];
}