// Importamos los módulos necesarios
import net from 'net';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { Genero, Tipo } from './type.js';
const client = net.connect({ port: 60300 }, () => {
    console.log('Connected to server!');
});
client.on('data', (data) => {
    const response = JSON.parse(data.toString());
    if (response.type === 'error') {
        console.error(`Error: ${response.message}`);
    }
    else {
        console.log(`Response: ${response.message}`);
        if (response.funkoPops) {
            console.log('Funkos:', response.funkoPops);
        }
    }
});
// Definimos los comandos de yargs
yargs(hideBin(process.argv)).command('add', 'Adds a funko', {
    user: { type: 'string', demandOption: true },
    id: { type: 'number', demandOption: true },
    nombre: { type: 'string', demandOption: true },
    descripcion: { type: 'string', demandOption: true },
    tipo: { type: 'string', demandOption: true },
    genero: { type: 'string', demandOption: true },
    franquicia: { type: 'string', demandOption: true },
    numero: { type: 'number', demandOption: true },
    exclusivo: { type: 'boolean', demandOption: true },
    caracteristicasEspeciales: { type: 'string', demandOption: true },
    valorMercado: { type: 'number', demandOption: true }
}, (args) => {
    const request = {
        type: 'add',
        funkoPop: {
            id: args.id,
            usuario: args.user,
            nombre: args.nombre,
            descripcion: args.descripcion,
            tipo: args.tipo,
            genero: args.genero,
            franquicia: args.franquicia,
            numero: args.numero,
            exclusivo: args.exclusivo,
            caracteristicasEspeciales: args.caracteristicasEspeciales,
            valorMercado: args.valorMercado
        }
    };
    client.write(JSON.stringify(request));
    console.log(`Request sent: ${JSON.stringify(request)}`);
}).help().argv;
yargs(hideBin(process.argv)).command('remove', 'Removes a funko', {
    user: { type: 'string', demandOption: true },
    id: { type: 'number', demandOption: true }
}, (args) => {
    const request = {
        type: 'remove',
        funkoPop: {
            id: args.id,
            usuario: args.user,
            nombre: '',
            descripcion: '',
            tipo: Tipo.Pop,
            genero: Genero.Animacion,
            franquicia: '',
            numero: 0,
            exclusivo: false,
            caracteristicasEspeciales: '',
            valorMercado: 0
        }
    };
    client.write(JSON.stringify(request));
    console.log(`Request sent: ${JSON.stringify(request)}`);
}).help().argv;
yargs(hideBin(process.argv)).command('modify', 'Modifies a funko', {
    user: { type: 'string', demandOption: true },
    id: { type: 'number', demandOption: true },
    nombre: { type: 'string', demandOption: true },
    descripcion: { type: 'string', demandOption: true },
    tipo: { type: 'string', demandOption: true },
    genero: { type: 'string', demandOption: true },
    franquicia: { type: 'string', demandOption: true },
    numero: { type: 'number', demandOption: true },
    exclusivo: { type: 'boolean', demandOption: true },
    caracteristicasEspeciales: { type: 'string', demandOption: true },
    valorMercado: { type: 'number', demandOption: true }
}, (args) => {
    const request = {
        type: 'modify',
        funkoPop: {
            id: args.id,
            usuario: args.user,
            nombre: args.nombre,
            descripcion: args.descripcion,
            tipo: args.tipo,
            genero: args.genero,
            franquicia: args.franquicia,
            numero: args.numero,
            exclusivo: args.exclusivo,
            caracteristicasEspeciales: args.caracteristicasEspeciales,
            valorMercado: args.valorMercado
        }
    };
    client.write(JSON.stringify(request));
    console.log(`Request sent: ${JSON.stringify(request)}`);
}).help().argv;
yargs(hideBin(process.argv)).command('list', 'Lists a funko', {
    user: { type: 'string', demandOption: true }
}, (args) => {
    const request = {
        type: 'list',
        funkoPop: {
            id: 0,
            usuario: args.user,
            nombre: '',
            descripcion: '',
            tipo: Tipo.Pop,
            genero: Genero.Animacion,
            franquicia: '',
            numero: 0,
            exclusivo: false,
            caracteristicasEspeciales: '',
            valorMercado: 0
        }
    };
    client.write(JSON.stringify(request));
    console.log(`Request sent: ${JSON.stringify(request)}`);
}).help().argv;
yargs(hideBin(process.argv)).command('read', 'Reads a funko', {
    user: { type: 'string', demandOption: true },
    id: { type: 'number', demandOption: true }
}, (args) => {
    const request = {
        type: 'read',
        funkoPop: {
            id: args.id,
            usuario: args.user,
            nombre: '',
            descripcion: '',
            tipo: Tipo.Pop,
            genero: Genero.Animacion,
            franquicia: '',
            numero: 0,
            exclusivo: false,
            caracteristicasEspeciales: '',
            valorMercado: 0
        }
    };
    client.write(JSON.stringify(request));
    console.log(`Request sent: ${JSON.stringify(request)}`);
}).help().argv;
