import net from 'net';
import { spawn } from 'child_process';
net.createServer((connection) => {
    console.log('A client has connected.');
    connection.on('data', (message) => {
        console.log('A client has sent a message.');
        const mensaje = JSON.parse(message.toString());
        console.log('Comando recibido:', mensaje.comando);
        console.log('Argumentos recibidos:', mensaje.args);
        let mensajes = mensaje.join();
        const process = spawn(mensajes);
        let comanderror = '';
        process.on('error', (err) => {
            console.error('Failed to start subprocess.');
            comanderror = err.message.toString();
            connection.write(`Comando no existente:\nk${comanderror}\n`);
        });
        let output = '';
        let errorOutput = '';
        process.stdout.on('data', (data) => {
            output += data.toString();
            let messageLimit = output.indexOf('\n');
            while (messageLimit !== -1) {
                const message = output.substring(0, messageLimit);
                output = output.substring(messageLimit + 1);
                connection.write(JSON.stringify({ 'mensaje': message }) + '\n');
                messageLimit = output.indexOf('\n');
            }
        });
        process.stderr.on('data', (data) => {
            errorOutput += data;
        });
        process.on('close', (code) => {
            if (code === 0) {
                connection.write(`Comando ejecutado correctamente:\nk${output}\n`);
            }
            else {
                connection.write(`Error al ejecutar el comando:\n${errorOutput}\n`);
            }
            connection.end();
        });
    });
    connection.on('close', () => {
        console.log('A client has disconnected.');
    });
}).listen(60300, () => {
    console.log('Waiting for clients to connect.');
});
