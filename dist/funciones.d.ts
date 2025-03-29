import { Funko } from "./funko.js";
import { Genero, Tipo } from "./type.js";
/**
 * función que lee todos los funkos de un usuario
 * @param usuario usuario del que se quieren leer los funkos
 * @returns array de funkos del usuario
 */
export declare function leerFunkos(usuario: string): Funko[];
/**
 * Método que añade un funko nuevo a la colección de un usuario
 * @param id id del funko
 * @param usuario usuario al que deseamos añadir el funko
 * @param nombre nombre del funko
 * @param descripcion descripción del funko
 * @param tipo tipo del funko
 * @param genero género del funko
 * @param franquicia franquicia del funko
 * @param numero número del funko
 * @param exclusivo es exclusivo o no
 * @param caracteristicasEspeciales características especiales del funko
 * @param valorMercado valor de mercado del funko
 * @returns true si se ha añadido correctamente, false si no.
 */
export declare function addFunko(id: number, usuario: string, nombre: string, descripcion: string, tipo: Tipo, genero: Genero, franquicia: string, numero: number, exclusivo: boolean, caracteristicasEspeciales: string, valorMercado: number): boolean;
/**
 * función que elimina un funko de la colección de un usuario
 * @param usuario usuario del que se quiere eliminar el funko
 * @param ID_ id del funko a eliminar
 * @returns true si se ha eliminado correctamente, false si no.
 */
export declare function eliminarFunko(usuario: string, ID_: number): boolean;
/**
 * Función que modifica un funko de la colección de un usuario
 * @param id id del funko
 * @param usuario nombre del usuario
 * @param nombre nombre del funko
 * @param descripcion descripción del funko
 * @param tipo tipo del funko
 * @param genero género del funko
 * @param franquicia franquicia del funko
 * @param numero numero del funko
 * @param exclusivo exclusivo o no
 * @param caracteristicasEspeciales características especiales del funko
 * @param valorMercado valor de mercado del funko
 * @returns true si se ha modificado correctamente, false si no.
 */
export declare function modificarFunko(id: number, usuario: string, nombre: string, descripcion: string, tipo: Tipo, genero: Genero, franquicia: string, numero: number, exclusivo: boolean, caracteristicasEspeciales: string, valorMercado: number): boolean;
/**
 * Función que lista los funkos de un usuario
 * @param usuario nombre del usuario
 * @returns true si se ha listado correctamente, false si no.
 */
export declare function listaFunkos(usuario: string): boolean;
/**
 * Función que muestra un funko
 * @param usuario nombre del usuario
 * @param id identificador del funko
 * @returns true si se ha mostrado correctamente, false si no.
 */
export declare function mostrarFunko(usuario: string, id: number): boolean;
