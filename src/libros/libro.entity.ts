import { Autor } from '../autores/autor.entity';
import { Editorial } from '../editoriales/editorial.entity';
import { Entity, Column, ManyToMany, JoinTable } from 'typeorm';

@Entity()
export class Libro {
  @Column({ primary: true, generated: 'increment' })
  id: number;

  @Column()
  titulo: string;

  @Column()
  categoria: string;

  @Column()
  precio: number;

  @Column({ type: 'date' })
  fechaLanzamiento: Date;

  @Column()
  descripcion: string;

  @ManyToMany(() => Autor, autor => autor.libros)
  @JoinTable()
  autores: Autor[];

  @ManyToMany(() => Editorial, editorial => editorial.libros)
  @JoinTable()
  editoriales: Editorial[];
}