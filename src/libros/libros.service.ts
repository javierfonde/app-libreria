import { Injectable } from '@nestjs/common';
import {Libro} from "./libro.entity";

@Injectable()
export class LibrosService {

    private libros: Libro[]= [
        {
            id: 1212,
            titulo: "Lo que el agua se llevo",
            categoria: "Romance",
            precio: 53.00,
            descripcion: "Una aventura de amor",
            autores: [1], 
            editorial: 536,
        }

    ]
    
    getAllLibros() {
        return this.libros;
    }

    createLibro(id: number, titulo: string, categoria: string, precio: number, descripcion: string, autores:number[], editorial:Number) { 
        const libro ={
            id: 1212,
            titulo,
            categoria,
            precio,
            descripcion,
            autores, 
            editorial,
        };

        this.libros.push(libro),
    }

    updateLibro() { }
    deleteLibro() { }




}
