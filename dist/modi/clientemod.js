import net from 'net';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
yargs(hideBin(process.argv)).command('command', '[comando --args <argumentos>] ', {
    comando: {
        describe: 'Comando a ejecutar',
        demandOption: true,
        type: 'string'
    },
    args: {
        describe: 'Argumentos del comando',
        demandOption: false,
        type: 'string'
    }
}, (argv) => {
    const client = net.connect({ port: 60300 }, () => {
        console.log('Connected to server!');
    });
    client.write(JSON.stringify({ comando: argv.comando, args: argv.args }));
    console.log('Comando enviado al servidor');
    console.log('Respuesta del servidor:');
    //Respuesta del servidor
    client.on('data', (data) => {
        console.log(data.toString());
    });
    client.on('end', () => {
        console.log('Desconectado del servidor');
    });
}).help().argv;
