//SERVIDOR
import net from 'net';
import { promises as fs } from 'fs';
import path from 'path';
// Creamos el servidor
net.createServer((socket) => {
    console.log('Cliente conectado');
    // Manejar la recepción de datos del cliente
    socket.on('data', async (data) => {
        const request = JSON.parse(data.toString());
        let response;
        const userDir = path.join('./database', request.funkoPop?.usuario || '');
        try {
            switch (request.type) {
                case 'add':
                    if (request.funkoPop) {
                        await fs.mkdir(userDir, { recursive: true });
                        const filePath = path.join(userDir, `${request.funkoPop.id}.json`);
                        if (await fs.access(filePath).then(() => true).catch(() => false)) {
                            response = {
                                type: 'add',
                                success: false,
                                message: 'Funko ya existe en la colección'
                            };
                        }
                        else {
                            await fs.writeFile(filePath, JSON.stringify(request.funkoPop));
                            response = {
                                type: 'add',
                                success: true,
                                message: 'Funko añadido correctamente'
                            };
                        }
                    }
                    else {
                        response = {
                            type: 'error',
                            success: false,
                            message: 'No se ha proporcionado un Funko válido'
                        };
                    }
                    break;
                case 'modify':
                    if (request.funkoPop) {
                        const filePath = path.join(userDir, `${request.funkoPop.id}.json`);
                        if (await fs.access(filePath).then(() => true).catch(() => false)) {
                            await fs.writeFile(filePath, JSON.stringify(request.funkoPop));
                            response = {
                                type: 'modify',
                                success: true,
                                message: 'Funko modificado correctamente'
                            };
                        }
                        else {
                            response = {
                                type: 'modify',
                                success: false,
                                message: 'Funko no encontrado en la colección'
                            };
                        }
                    }
                    else {
                        response = {
                            type: 'error',
                            success: false,
                            message: 'No se ha proporcionado un Funko válido'
                        };
                    }
                    break;
                case 'remove':
                    if (request.funkoPop) {
                        const filePath = path.join(userDir, `${request.funkoPop.id}.json`);
                        if (await fs.access(filePath).then(() => true).catch(() => false)) {
                            await fs.unlink(filePath);
                            response = {
                                type: 'remove',
                                success: true,
                                message: 'Funko eliminado correctamente'
                            };
                        }
                        else {
                            response = {
                                type: 'remove',
                                success: false,
                                message: 'Funko no encontrado en la colección'
                            };
                        }
                    }
                    else {
                        response = {
                            type: 'error',
                            success: false,
                            message: 'No se ha proporcionado un Funko válido'
                        };
                    }
                    break;
                case 'read':
                    if (request.funkoPop) {
                        const filePath = path.join(userDir, `${request.funkoPop.id}.json`);
                        if (await fs.access(filePath).then(() => true).catch(() => false)) {
                            const funkoData = await fs.readFile(filePath, 'utf8');
                            response = {
                                type: 'read',
                                success: true,
                                message: 'Funko encontrado',
                                funkoPops: [JSON.parse(funkoData)]
                            };
                        }
                        else {
                            response = {
                                type: 'read',
                                success: false,
                                message: 'Funko no encontrado en la colección'
                            };
                        }
                    }
                    else {
                        response = {
                            type: 'error',
                            success: false,
                            message: 'No se ha proporcionado un Funko válido'
                        };
                    }
                    break;
                case 'list':
                    if (await fs.access(userDir).then(() => true).catch(() => false)) {
                        const files = await fs.readdir(userDir);
                        const funkos = await Promise.all(files.map(async (file) => {
                            const content = await fs.readFile(path.join(userDir, file), 'utf8');
                            return JSON.parse(content);
                        }));
                        response = {
                            type: 'list',
                            success: true,
                            message: 'Lista de Funkos',
                            funkoPops: funkos
                        };
                    }
                    else {
                        response = {
                            type: 'list',
                            success: false,
                            message: 'Usuario no tiene colección'
                        };
                    }
                    break;
                default:
                    response = {
                        type: 'error',
                        success: false,
                        message: 'Tipo de operación no soportado'
                    };
            }
        }
        catch (err) {
            response = {
                type: 'error',
                success: false,
                message: `Error procesando la solicitud: ${err instanceof Error ? err.message : 'Error desconocido'}`
            };
        }
        socket.write(JSON.stringify(response), () => {
            socket.end(); // Cierra la conexión con el cliente después de enviar la respuesta
        });
    });
    socket.on('end', () => {
        console.log('Cliente desconectado');
    });
}).listen(60300, () => {
    console.log('Servidor escuchando en el puerto 60300');
});
