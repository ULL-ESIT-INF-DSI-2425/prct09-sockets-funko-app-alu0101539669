//Ejemplo de uso de fs

import fs from 'fs';
import path from 'path';

//Metodos Asincronos con callback
//Un callback es una funcion que se pasa como argumento a otra funcion
//El callback se ejecuta cuando la funcion termina su tarea
//El callback recibe un error como primer argumento y el resultado como segundo argumento
//El callback se ejecuta cuando la funcion termina su tarea


//Ejemplo de uso de fs a travez de funciones
//fs.access(path, callback) //Accede a un archivo o directorio

export function fsAccess(path: string) {
    fs.access(path, (err) => {
        if (err) {
            console.error('Error al acceder al archivo:', err);
        } else {
            console.log('Acceso al archivo permitido');
        }
    });
}



