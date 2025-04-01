import { Funko } from "./funko1.js";
import { Genero, Tipo } from "./type1.js";
/**
 * Función que lee todos los Funkos de un usuario
 * @param usuario Usuario del que se quieren leer los Funkos
 * @param callback Función de callback que recibe un array de Funkos del usuario
 */
export declare function leerFunkos(usuario: string, callback: (funkos: Funko[]) => void): void;
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
 * @param callback Función de callback que recibe un booleano indicando si se ha añadido correctamente
 */
export declare function addFunko(id: number, usuario: string, nombre: string, descripcion: string, tipo: Tipo, genero: Genero, franquicia: string, numero: number, exclusivo: boolean, caracteristicasEspeciales: string, valorMercado: number, callback: (success: boolean) => void): void;
/**
 * Función que elimina un Funko de la colección de un usuario
 * @param usuario Usuario del que se quiere eliminar el Funko
 * @param ID_ ID del Funko a eliminar
 * @param callback Función de callback que recibe un booleano indicando si se ha eliminado correctamente
 */
export declare function eliminarFunko(usuario: string, ID_: number, callback: (success: boolean) => void): void;
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
 * @param callback Función de callback que recibe un booleano indicando si se ha modificado correctamente
 */
export declare function modificarFunko(id: number, usuario: string, nombre: string, descripcion: string, tipo: Tipo, genero: Genero, franquicia: string, numero: number, exclusivo: boolean, caracteristicasEspeciales: string, valorMercado: number, callback: (success: boolean) => void): void;
/**
 * Función que lista los Funkos de un usuario
 * @param usuario Nombre del usuario
 * @param callback Función de callback que recibe un booleano indicando si se ha listado correctamente
 */
export declare function listaFunkos(usuario: string, callback: (success: boolean) => void): void;
/**
 * Función que muestra un Funko
 * @param usuario Nombre del usuario
 * @param id Identificador del Funko
 * @param callback Función de callback que recibe un booleano indicando si se ha mostrado correctamente
 */
export declare function mostrarFunko(usuario: string, id: number, callback: (success: boolean) => void): void;
