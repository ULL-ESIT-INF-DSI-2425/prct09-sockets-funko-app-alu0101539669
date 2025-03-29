//Ejemplo de uso de fs
import fs from 'fs';
//Metodos Asincronos con callback
//Un callback es una funcion que se pasa como argumento a otra funcion
//El callback se ejecuta cuando la funcion termina su tarea
//El callback recibe un error como primer argumento y el resultado como segundo argumento
//El callback se ejecuta cuando la funcion termina su tarea
//Ejemplo de uso de fs a travez de funciones
//fs.access(path, callback) //Accede a un archivo o directorio
export function fsAccess(path) {
    fs.access(path, (err) => {
        if (err) {
            console.error('Error al acceder al archivo:', err);
        }
        else {
            console.log('Acceso al archivo permitido');
        }
    });
}
//fs appendFile(path, data, callback) //Añade datos a un archivo
export function fsAppendFile(path, data) {
    fs.appendFile(path, data, (err) => {
        if (err) {
            console.error('Error al añadir datos al archivo:', err);
        }
        else {
            console.log('Datos añadidos al archivo');
        }
    });
}
//fs chmod(path, mode, callback) //Cambia los permisos de un archivo
export function fsChmod(path, mode) {
    fs.chmod(path, mode, (err) => {
        if (err) {
            console.error('Error al cambiar los permisos del archivo:', err);
        }
        else {
            console.log('Permisos del archivo cambiados');
        }
    });
}
//fs.close(fd, callback) //Cierra un archivo
export function fsClose(fd) {
    fs.close(fd, (err) => {
        if (err) {
            console.error('Error al cerrar el archivo:', err);
        }
        else {
            console.log('Archivo cerrado');
        }
    });
}
//fs.copyFile(src, dest, callback) //Copia un archivo
export function fsCopyFile(src, dest) {
    fs.copyFile(src, dest, (err) => {
        if (err) {
            console.error('Error al copiar el archivo:', err);
        }
        else {
            console.log('Archivo copiado');
        }
    });
}
//fs.cp(path, dest, callback) //Copia un directorio
export function fsCp(path, dest) {
    fs.cp(path, dest, (err) => {
        if (err) {
            console.error('Error al copiar el directorio:', err);
        }
        else {
            console.log('Directorio copiado');
        }
    });
}
//fs.createReadStream(path) //Crea un flujo de lectura
//fs.createWriteStream(path) //Crea un flujo de escritura
//fs.fstat(fd, callback) //Obtiene información sobre un archivo
export function fsFstat(fd) {
    fs.fstat(fd, (err, stats) => {
        if (err) {
            console.error('Error al obtener información del archivo:', err);
        }
        else {
            console.log('Información del archivo:', stats);
        }
    });
}
//fs.fsync(fd, callback) //Sincroniza un archivo
export function fsFsync(fd) {
    fs.fsync(fd, (err) => {
        if (err) {
            console.error('Error al sincronizar el archivo:', err);
        }
        else {
            console.log('Archivo sincronizado');
        }
    });
}
//fs.ftruncate(fd, len, callback) //Trunca un archivo
export function fsFtruncate(fd, len) {
    fs.ftruncate(fd, len, (err) => {
        if (err) {
            console.error('Error al truncar el archivo:', err);
        }
        else {
            console.log('Archivo truncado');
        }
    });
}
//fs.futimes(fd, atime, mtime, callback) //Cambia los tiempos de acceso y modificación de un archivo
export function fsFutimes(fd, atime, mtime) {
    fs.futimes(fd, atime, mtime, (err) => {
        if (err) {
            console.error('Error al cambiar los tiempos de acceso y modificación del archivo:', err);
        }
        else {
            console.log('Tiempos de acceso y modificación del archivo cambiados');
        }
    });
}
//fs.link(src, dest, callback) //Crea un enlace duro a un archivo
export function fsLink(src, dest) {
    fs.link(src, dest, (err) => {
        if (err) {
            console.error('Error al crear el enlace duro:', err);
        }
        else {
            console.log('Enlace duro creado');
        }
    });
}
//fs.lstat(path, callback) //Obtiene información sobre un enlace simbólico
export function fsLstat(path) {
    fs.lstat(path, (err, stats) => {
        if (err) {
            console.error('Error al obtener información del enlace simbólico:', err);
        }
        else {
            console.log('Información del enlace simbólico:', stats);
        }
    });
}
//fs.mkdir(path, callback) //Crea un directorio
export function fsMkdir(path) {
    fs.mkdir(path, (err) => {
        if (err) {
            console.error('Error al crear el directorio:', err);
        }
        else {
            console.log('Directorio creado');
        }
    });
}
//fs.stat(path, callback) //Obtiene información sobre un archivo o directorio
export function fsStat(path) {
    fs.stat(path, (err, stats) => {
        if (err) {
            console.error('Error al obtener información del archivo o directorio:', err);
        }
        else {
            console.log('Información del archivo o directorio:', stats);
        }
    });
}
//fs.open(path, flags, mode, callback) //Abre un archivo
export function fsOpen(path, flags, mode) {
    fs.open(path, flags, mode, (err, fd) => {
        if (err) {
            console.error('Error al abrir el archivo:', err);
        }
        else {
            console.log('Archivo abierto con descriptor de archivo:', fd);
        }
    });
}
//fs.opendir(path, callback) //Abre un directorio
export function fsOpendir(path) {
    fs.opendir(path, (err, dir) => {
        if (err) {
            console.error('Error al abrir el directorio:', err);
        }
        else {
            console.log('Directorio abierto:', dir);
        }
    });
}
//fs.read(fd, buffer, offset, length, position, callback) //Lee datos de un archivo
export function fsRead(fd, buffer, offset, length, position) {
    fs.read(fd, buffer, offset, length, position, (err, bytesRead, buffer) => {
        if (err) {
            console.error('Error al leer el archivo:', err);
        }
        else {
            console.log('Bytes leídos:', bytesRead);
            console.log('Buffer:', buffer);
        }
    });
}
//fs.readdir(path, callback) //Lee el contenido de un directorio
export function fsReaddir(path) {
    fs.readdir(path, (err, files) => {
        if (err) {
            console.error('Error al leer el directorio:', err);
        }
        else {
            console.log('Contenido del directorio:', files);
        }
    });
}
//fs.readFile(path, callback) //Lee un archivo
export function fsReadFile(path) {
    fs.readFile(path, (err, data) => {
        if (err) {
            console.error('Error al leer el archivo:', err);
        }
        else {
            console.log('Contenido del archivo:', data.toString());
        }
    });
}
//fs.realpath(path, callback) //Obtiene la ruta real de un archivo o directorio
export function fsRealpath(path) {
    fs.realpath(path, (err, resolvedPath) => {
        if (err) {
            console.error('Error al obtener la ruta real del archivo o directorio:', err);
        }
        else {
            console.log('Ruta real del archivo o directorio:', resolvedPath);
        }
    });
}
//fs.rename(oldPath, newPath, callback) //Renombra un archivo o directorio
export function fsRename(oldPath, newPath) {
    fs.rename(oldPath, newPath, (err) => {
        if (err) {
            console.error('Error al renombrar el archivo o directorio:', err);
        }
        else {
            console.log('Archivo o directorio renombrado');
        }
    });
}
//fs.rmdir(path, callback) //Elimina un directorio
export function fsRmdir(path) {
    fs.rmdir(path, (err) => {
        if (err) {
            console.error('Error al eliminar el directorio:', err);
        }
        else {
            console.log('Directorio eliminado');
        }
    });
}
//fs.rm(path, callback) //Elimina un archivo o directorio
export function fsRm(path) {
    fs.rm(path, (err) => {
        if (err) {
            console.error('Error al eliminar el archivo o directorio:', err);
        }
        else {
            console.log('Archivo o directorio eliminado');
        }
    });
}
//fs.watchFile(path, options, listener) //Observa un archivo
export function fsWatchFile(path, options, listener) {
    fs.watchFile(path, options, listener);
}
//fs.write(fd, buffer, offset, length, position, callback) //Escribe datos en un archivo
export function fsWrite(fd, buffer, offset, length, position) {
    fs.write(fd, buffer, offset, length, position, (err, bytesWritten, buffer) => {
        if (err) {
            console.error('Error al escribir en el archivo:', err);
        }
        else {
            console.log('Bytes escritos:', bytesWritten);
            console.log('Buffer:', buffer);
        }
    });
}
//fs.writeFile(path, data, callback) //Escribe un archivo
export function fsWriteFile(path, data) {
    fs.writeFile(path, data, (err) => {
        if (err) {
            console.error('Error al escribir el archivo:', err);
        }
        else {
            console.log('Archivo escrito');
        }
    });
}
//Sincronizadas
//fs.accessSync(path) //Accede a un archivo o directorio
export function fsAccessSync(path) {
    try {
        fs.accessSync(path);
        console.log('Acceso al archivo permitido');
    }
    catch (err) {
        console.error('Error al acceder al archivo:', err);
    }
}
//fs.appendFileSync(path, data) //Añade datos a un archivo
export function fsAppendFileSync(path, data) {
    try {
        fs.appendFileSync(path, data);
        console.log('Datos añadidos al archivo');
    }
    catch (err) {
        console.error('Error al añadir datos al archivo:', err);
    }
}
//fs.closeSync(fd) //Cierra un archivo
export function fsCloseSync(fd) {
    try {
        fs.closeSync(fd);
        console.log('Archivo cerrado');
    }
    catch (err) {
        console.error('Error al cerrar el archivo:', err);
    }
}
//fs.copyFileSync(src, dest) //Copia un archivo
export function fsCopyFileSync(src, dest) {
    try {
        fs.copyFileSync(src, dest);
        console.log('Archivo copiado');
    }
    catch (err) {
        console.error('Error al copiar el archivo:', err);
    }
}
//fs.cpSync(path, dest) //Copia un directorio
export function fsCpSync(path, dest) {
    try {
        fs.cpSync(path, dest);
        console.log('Directorio copiado');
    }
    catch (err) {
        console.error('Error al copiar el directorio:', err);
    }
}
//fs.fstatSync(fd) //Obtiene información sobre un archivo
export function fsFstatSync(fd) {
    try {
        const stats = fs.fstatSync(fd);
        console.log('Información del archivo:', stats);
    }
    catch (err) {
        console.error('Error al obtener información del archivo:', err);
    }
}
//fs.fsyncSync(fd) //Sincroniza un archivo
export function fsFsyncSync(fd) {
    try {
        fs.fsyncSync(fd);
        console.log('Archivo sincronizado');
    }
    catch (err) {
        console.error('Error al sincronizar el archivo:', err);
    }
}
//fs.ftruncateSync(fd, len) //Trunca un archivo
export function fsFtruncateSync(fd, len) {
    try {
        fs.ftruncateSync(fd, len);
        console.log('Archivo truncado');
    }
    catch (err) {
        console.error('Error al truncar el archivo:', err);
    }
}
//fs.futimesSync(fd, atime, mtime) //Cambia los tiempos de acceso y modificación de un archivo
export function fsFutimesSync(fd, atime, mtime) {
    try {
        fs.futimesSync(fd, atime, mtime);
        console.log('Tiempos de acceso y modificación del archivo cambiados');
    }
    catch (err) {
        console.error('Error al cambiar los tiempos de acceso y modificación del archivo:', err);
    }
}
//fs.mkdirSync(path) //Crea un directorio
export function fsMkdirSync(path) {
    try {
        fs.mkdirSync(path);
        console.log('Directorio creado');
    }
    catch (err) {
        console.error('Error al crear el directorio:', err);
    }
}
//fs.openSync(path, flags, mode) //Abre un archivo
export function fsOpenSync(path, flags, mode) {
    try {
        const fd = fs.openSync(path, flags, mode);
        console.log('Archivo abierto con descriptor de archivo:', fd);
        return fd;
    }
    catch (err) {
        console.error('Error al abrir el archivo:', err);
    }
}
//fs.opendirSync(path) //Abre un directorio
export function fsOpendirSync(path) {
    try {
        const dir = fs.opendirSync(path);
        console.log('Directorio abierto:', dir);
        return dir;
    }
    catch (err) {
        console.error('Error al abrir el directorio:', err);
    }
}
//fs.readSync(fd, buffer, offset, length, position) //Lee datos de un archivo
export function fsReadSync(fd, buffer, offset, length, position) {
    try {
        const bytesRead = fs.readSync(fd, buffer, offset, length, position);
        console.log('Bytes leídos:', bytesRead);
        console.log('Buffer:', buffer);
        return bytesRead;
    }
    catch (err) {
        console.error('Error al leer el archivo:', err);
    }
}
//fs.readdirSync(path) //Lee el contenido de un directorio
export function fsReaddirSync(path) {
    try {
        const files = fs.readdirSync(path);
        console.log('Contenido del directorio:', files);
        return files;
    }
    catch (err) {
        console.error('Error al leer el directorio:', err);
    }
}
//fs.readFileSync(path) //Lee un archivo
export function fsReadFileSync(path) {
    try {
        const data = fs.readFileSync(path);
        console.log('Contenido del archivo:', data.toString());
        return data;
    }
    catch (err) {
        console.error('Error al leer el archivo:', err);
    }
}
//fs.realpathSync(path) //Obtiene la ruta real de un archivo o directorio
export function fsRealpathSync(path) {
    try {
        const resolvedPath = fs.realpathSync(path);
        console.log('Ruta real del archivo o directorio:', resolvedPath);
        return resolvedPath;
    }
    catch (err) {
        console.error('Error al obtener la ruta real del archivo o directorio:', err);
    }
}
//fs.renameSync(oldPath, newPath) //Renombra un archivo o directorio
export function fsRenameSync(oldPath, newPath) {
    try {
        fs.renameSync(oldPath, newPath);
        console.log('Archivo o directorio renombrado');
    }
    catch (err) {
        console.error('Error al renombrar el archivo o directorio:', err);
    }
}
//fs.rmdirSync(path) //Elimina un directorio
export function fsRmdirSync(path) {
    try {
        fs.rmdirSync(path);
        console.log('Directorio eliminado');
    }
    catch (err) {
        console.error('Error al eliminar el directorio:', err);
    }
}
//fs.rmSync(path) //Elimina un archivo o directorio
export function fsRmSync(path) {
    try {
        fs.rmSync(path);
        console.log('Archivo o directorio eliminado');
    }
    catch (err) {
        console.error('Error al eliminar el archivo o directorio:', err);
    }
}
//fs.statSync(path) //Obtiene información sobre un archivo o directorio
export function fsStatSync(path) {
    try {
        const stats = fs.statSync(path);
        console.log('Información del archivo o directorio:', stats);
        return stats;
    }
    catch (err) {
        console.error('Error al obtener información del archivo o directorio:', err);
    }
}
//fs.writeSync(fd, buffer, offset, length, position) //Escribe datos en un archivo
export function fsWriteSync(fd, buffer, offset, length, position) {
    try {
        const bytesWritten = fs.writeSync(fd, buffer, offset, length, position);
        console.log('Bytes escritos:', bytesWritten);
        return bytesWritten;
    }
    catch (err) {
        console.error('Error al escribir en el archivo:', err);
    }
}
//fs.writeFileSync(path, data) //Escribe un archivo
export function fsWriteFileSync(path, data) {
    try {
        fs.writeFileSync(path, data);
        console.log('Archivo escrito');
    }
    catch (err) {
        console.error('Error al escribir el archivo:', err);
    }
}
//fs.watchFileSync(path, options, listener) //Observa un archivo
export function fsWatchFileSync(path, options, listener) {
    try {
        fs.watchFile(path, options, listener);
        console.log('Observando archivo:', path);
    }
    catch (err) {
        console.error('Error al observar el archivo:', err);
    }
}
