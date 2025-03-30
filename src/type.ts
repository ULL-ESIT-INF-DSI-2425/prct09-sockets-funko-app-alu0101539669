/**
 * Enum para los tipos de funkos.
 */
export enum Tipo {
  Pop = "Pop!",
  PopRides = "Pop! Rides",
  VynilSoda = "Vynil Soda",
  VynilGold = "Vynil Gold",
  VynilPlatinum = "Vynil Platinum",
}

/**
 * Enum para los géneros de funkos.
 */
export enum Genero {
  Animacion = "Animacion",
  PeliculasYTV = "Peliculas y TV",
  Videojuegos = "Games",
  Deportes = "Deportes",
  Musica = "Música",
  Anime = "Anime",
  }
    
//Definicion de types

//Respuesta 
export type RequestType = {
  type: 'add' | 'modify' | 'remove' | 'read' | 'list';
  funkoPop?: {
    id: number;
    usuario: string;
    nombre: string;
    descripcion: string;
    tipo: Tipo;
    genero: Genero;
    franquicia: string;
    numero: number;
    exclusivo: boolean;
    caracteristicasEspeciales: string;
    valorMercado: number;
  }
}

export type ResponseType = {
  type: 'add' | 'modify' | 'remove' | 'read' | 'list' | 'error';
  success: boolean;
  message: string;
  funkoPops?: {
    id: number;
    usuario: string;
    nombre: string;
    descripcion: string;
    tipo: Tipo;
    genero: Genero;
    franquicia: string;
    numero: number;
    exclusivo: boolean;
    caracteristicasEspeciales: string;
    valorMercado: number;
  }[];
}
