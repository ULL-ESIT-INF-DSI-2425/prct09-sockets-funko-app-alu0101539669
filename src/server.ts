//SERVIDOR
import net from 'net';
import { RequestType, ResponseType } from './type.js';
import { addFunko, eliminarFunko, listaFunkos, mostrarFunko, modificarFunko } from './funciones.js';

net.createServer((connection) => {
    console.log('A client has connected.');

    connection.write(JSON.stringify({ message: 'Connection established.' }));

    connection.on('data', (data) => {
    const request: RequestType = JSON.parse(data.toString());
    let response: ResponseType;
        switch (request.type) {
            case 'add':
                const addSuccess = addFunko(
                    request.funkoPop!.id,
                    request.funkoPop!.usuario,
                    request.funkoPop!.nombre,
                    request.funkoPop!.descripcion,
                    request.funkoPop!.tipo,
                    request.funkoPop!.genero,
                    request.funkoPop!.franquicia,
                    request.funkoPop!.numero,
                    request.funkoPop!.exclusivo,
                    request.funkoPop!.caracteristicasEspeciales,
                    request.funkoPop!.valorMercado
                );
                response = {
                    type: 'add',
                    success: addSuccess,
                    message: addSuccess ? 'Funko added successfully' : 'Failed to add Funko',
                };
                break;
        
            case 'modify':
                const modifySuccess = modificarFunko(
                    request.funkoPop!.id,
                    request.funkoPop!.usuario,
                    request.funkoPop!.nombre,
                    request.funkoPop!.descripcion,
                    request.funkoPop!.tipo,
                    request.funkoPop!.genero,
                    request.funkoPop!.franquicia,
                    request.funkoPop!.numero,
                    request.funkoPop!.exclusivo,
                    request.funkoPop!.caracteristicasEspeciales,
                    request.funkoPop!.valorMercado
                );
                response = {
                    type: 'modify',
                    success: modifySuccess,
                    message: modifySuccess ? 'Funko modified successfully' : 'Failed to modify Funko',
                };
            break;

            case 'remove':
                const removeSuccess = eliminarFunko(
                    request.funkoPop!.usuario,
                    request.funkoPop!.id
                );
                response = {
                    type: 'remove',
                    success: removeSuccess,
                    message: removeSuccess ? 'Funko removed successfully' : 'Failed to remove Funko',
                };
            break;

            case 'read':
                const funko = mostrarFunko(
                    request.funkoPop!.usuario,
                    request.funkoPop!.id
                );
                response = {
                    type: 'read',
                    success: funko !== null,
                    message: funko !== null ? 'Funko found' : 'Funko not found',
                    funkoPops: funko && typeof funko === 'object' ? [funko] : undefined,
                };    
            break;

            case 'list':
                const funkos = listaFunkos(request.funkoPop!.usuario);
                response = {
                    type: 'list',
                    success: funkos !== null,
                    message: funkos && typeof funkos === 'object' ? 'Funkos listed successfully' : 'Failed to list Funkos',
                    funkoPops: funkos && typeof funkos === 'object' ? funkos : undefined,
                };
            break;
        
            default:
                response = {
                    type: 'error',
                    success: false,
                    message: 'Invalid request type',
                };
            break;
        }

        connection.write(JSON.stringify(response));
        connection.end(); // Close the connection after sending the response
    });

    connection.on('error', (err) => {
        if ((err as NodeJS.ErrnoException).code === 'ECONNRESET') {
            console.error('Client disconnected abruptly:', err.message);
        } else {
            console.error('Error:', err);
        }
    });

    connection.on('end', () => {
        console.log('Client disconnected.');
      });
    
    connection.on('close', () => {
        console.log('Client disconnected.');
    });
    
    connection.on('timeout', () => {
        console.log('Connection timed out.');
        connection.end();
    });

}).listen(60300, () => {
  console.log('Waiting for clients to connect.');
});