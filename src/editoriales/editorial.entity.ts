import { Entity, Column, ManyToMany, JoinTable } from 'typeorm';
import { Libro } from '../libros/libro.entity';

@Entity()
export class Editorial {
  @Column({ primary: true, generated: 'increment' })
  id: number;

  @Column()
  nombre: string;

  @Column()
  direccion: string;

  @Column()
  CUIT: string;

  @ManyToMany(() => Libro, libro => libro.editoriales)
  libros: Libro[];
}
