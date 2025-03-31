import { Funko } from "./funko.js";
import { Genero, Tipo } from "./type.js";
/**
 * Función que lee todos los Funkos de un usuario
 * @param usuario Usuario del que se quieren leer los Funkos
 * @returns Array de Funkos del usuario
 */
export declare function leerFunkos(usuario: string): Funko[];
/**
 * Método que añade un Funko nuevo a la colección de un usuario
 * @param id ID del Funko
 * @param usuario Usuario al que deseamos añadir el Funko
 * @param nombre Nombre del Funko
 * @param descripcion Descripción del Funko
 * @param tipo Tipo del Funko
 * @param genero Género del Funko
 * @param franquicia Franquicia del Funko
 * @param numero Número del Funko
 * @param exclusivo Indica si es exclusivo
 * @param caracteristicasEspeciales Características especiales del Funko
 * @param valorMercado Valor de mercado del Funko
 * @returns true si se ha añadido correctamente, false si no
 */
export declare function addFunko(id: number, usuario: string, nombre: string, descripcion: string, tipo: Tipo, genero: Genero, franquicia: string, numero: number, exclusivo: boolean, caracteristicasEspeciales: string, valorMercado: number): boolean;
/**
 * Función que elimina un Funko de la colección de un usuario
 * @param usuario Usuario del que se quiere eliminar el Funko
 * @param ID_ ID del Funko a eliminar
 * @returns true si se ha eliminado correctamente, false si no
 */
export declare function eliminarFunko(usuario: string, ID_: number): boolean;
/**
 * Función que modifica un Funko de la colección de un usuario
 * @param id ID del Funko
 * @param usuario Nombre del usuario
 * @param nombre Nombre del Funko
 * @param descripcion Descripción del Funko
 * @param tipo Tipo del Funko
 * @param genero Género del Funko
 * @param franquicia Franquicia del Funko
 * @param numero Número del Funko
 * @param exclusivo Indica si es exclusivo
 * @param caracteristicasEspeciales Características especiales del Funko
 * @param valorMercado Valor de mercado del Funko
 * @returns true si se ha modificado correctamente, false si no
 */
export declare function modificarFunko(id: number, usuario: string, nombre: string, descripcion: string, tipo: Tipo, genero: Genero, franquicia: string, numero: number, exclusivo: boolean, caracteristicasEspeciales: string, valorMercado: number): boolean;
/**
 * Función que lista los Funkos de un usuario
 * @param usuario Nombre del usuario
 * @returns true si se ha listado correctamente, false si no
 */
export declare function listaFunkos(usuario: string): boolean;
/**
 * Función que muestra un Funko
 * @param usuario Nombre del usuario
 * @param id Identificador del Funko
 * @returns true si se ha mostrado correctamente, false si no
 */
export declare function mostrarFunko(usuario: string, id: number): boolean;
