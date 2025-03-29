import { Tipo, Genero } from './type.js';
/**
 * Clase Funko
 */
export declare class Funko {
    private ID;
    private nombre;
    private descripcion;
    private tipo;
    private genero;
    private franquicia;
    private numero;
    private exclusivo;
    private caracteristicasEspeciales;
    private valorMercado;
    /**
     * Constructor de la clase Funko
     * @param nombre_ nombre del funko
     * @param descripcion_ descripcion del funko
     * @param tipo_ tipo del funko
     * @param genero_ genero del funko
     * @param franquicia_ franquicia del funko
     * @param numero_ numero del funko
     * @param exclusivo_ es exlusivo o no
     * @param caracteristicasEspeciales_ caracteristicas especiales del funko
     * @param valorMercado_ valor de mercado del funko
     * @param ID_ identificador del funko
     */
    constructor(nombre_: string, descripcion_: string, tipo_: Tipo, genero_: Genero, franquicia_: string, numero_: number, exclusivo_: boolean, caracteristicasEspeciales_: string, valorMercado_: number, ID_: number);
    /**
     * getter id
     */
    get getID(): number;
    /**
     * setter id
     */
    set setID(ID_: number);
    /**
     * getter nombre
     */
    get getNombre(): string;
    /**
     * setter nombre
     */
    set setNombre(nombre_: string);
    /**
     * getter descripcion
     */
    get getDescripcion(): string;
    /**
     * setter descripcion
     */
    set setDescripcion(descripcion_: string);
    /**
     * getter tipo
     */
    get getTipo(): Tipo;
    /**
     * setter tipo
     */
    set setTipo(tipo_: Tipo);
    /**
     * getter genero
     */
    get getGenero(): Genero;
    /**
     * setter genero
     */
    set setGenero(genero_: Genero);
    /**
     * getter franquicia
     */
    get getFranquicia(): string;
    /**
     * setter franquicia
     */
    set setFranquicia(franquicia_: string);
    /**
     * getter numero
     */
    get getNumero(): number;
    /**
     * setter numero
     */
    set setNumero(numero_: number);
    /**
     * getter exclusivo
     */
    get getExclusivo(): boolean;
    /**
     * setter exclusivo
     */
    set setExclusivo(exclusivo_: boolean);
    /**
     * getter caracteristicas especiales
     */
    get getCaracteristicasEspeciales(): string;
    /**
     * setter caracteristicas especiales
     */
    set setCaracteristicasEspeciales(caracteristicasEspeciales_: string);
    /**
     * getter valor mercado
     */
    get getValorMercado(): number;
    /**
     * setter valor mercado
     */
    set setValorMercado(valorMercado_: number);
}
