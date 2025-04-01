// Clase que representa un Funko Pop con sus atributos y métodos
/**
 * Clase Funko
 */
export class Funko {
    // Atributos privados del Funko
    ID; // Identificador único del Funko
    nombre; // Nombre del Funko
    descripcion; // Descripción del Funko
    tipo; // Tipo del Funko (Pop!, Vynil, etc.)
    genero; // Género del Funko (Animación, Deportes, etc.)
    franquicia; // Franquicia a la que pertenece el Funko
    numero; // Número identificativo dentro de la franquicia
    exclusivo; // Indica si el Funko es exclusivo
    caracteristicasEspeciales; // Características especiales del Funko
    valorMercado; // Valor de mercado del Funko
    /**
     * Constructor de la clase Funko
     * @param nombre_ nombre del funko
     * @param descripcion_ descripcion del funko
     * @param tipo_ tipo del funko
     * @param genero_ genero del funko
     * @param franquicia_ franquicia del funko
     * @param numero_ numero del funko
     * @param exclusivo_ es exclusivo o no
     * @param caracteristicasEspeciales_ características especiales del funko
     * @param valorMercado_ valor de mercado del funko
     * @param ID_ identificador del funko
     */
    constructor(nombre_, descripcion_, tipo_, genero_, franquicia_, numero_, exclusivo_, caracteristicasEspeciales_, valorMercado_, ID_) {
        this.nombre = nombre_;
        this.descripcion = descripcion_;
        this.tipo = tipo_;
        this.genero = genero_;
        this.franquicia = franquicia_;
        this.numero = numero_;
        this.exclusivo = exclusivo_;
        this.caracteristicasEspeciales = caracteristicasEspeciales_;
        this.valorMercado = valorMercado_;
        this.ID = ID_;
    }
    // Métodos getter y setter para acceder y modificar los atributos del Funko
    /**
     * getter id
     */
    get getID() {
        return this.ID;
    }
    /**
     * setter id
     */
    set setID(ID_) {
        this.ID = ID_;
    }
    /**
     * getter nombre
     */
    get getNombre() {
        return this.nombre;
    }
    /**
     * setter nombre
     */
    set setNombre(nombre_) {
        this.nombre = nombre_;
    }
    /**
     * getter descripcion
     */
    get getDescripcion() {
        return this.descripcion;
    }
    /**
     * setter descripcion
     */
    set setDescripcion(descripcion_) {
        this.descripcion = descripcion_;
    }
    /**
     * getter tipo
     */
    get getTipo() {
        return this.tipo;
    }
    /**
     * setter tipo
     */
    set setTipo(tipo_) {
        this.tipo = tipo_;
    }
    /**
     * getter genero
     */
    get getGenero() {
        return this.genero;
    }
    /**
     * setter genero
     */
    set setGenero(genero_) {
        this.genero = genero_;
    }
    /**
     * getter franquicia
     */
    get getFranquicia() {
        return this.franquicia;
    }
    /**
     * setter franquicia
     */
    set setFranquicia(franquicia_) {
        this.franquicia = franquicia_;
    }
    /**
     * getter numero
     */
    get getNumero() {
        return this.numero;
    }
    /**
     * setter numero
     */
    set setNumero(numero_) {
        this.numero = numero_;
    }
    /**
     * getter exclusivo
     */
    get getExclusivo() {
        return this.exclusivo;
    }
    /**
     * setter exclusivo
     */
    set setExclusivo(exclusivo_) {
        this.exclusivo = exclusivo_;
    }
    /**
     * getter caracteristicas especiales
     */
    get getCaracteristicasEspeciales() {
        return this.caracteristicasEspeciales;
    }
    /**
     * setter caracteristicas especiales
     */
    set setCaracteristicasEspeciales(caracteristicasEspeciales_) {
        this.caracteristicasEspeciales = caracteristicasEspeciales_;
    }
    /**
     * getter valor mercado
     */
    get getValorMercado() {
        return this.valorMercado;
    }
    /**
     * setter valor mercado
     */
    set setValorMercado(valorMercado_) {
        this.valorMercado = valorMercado_;
    }
}
