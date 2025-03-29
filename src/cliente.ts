// Importamos los módulos necesarios
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { addFunko, eliminarFunko, listaFunkos, mostrarFunko, modificarFunko } from './funciones.js';
import { Genero, Tipo } from './type.js';

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
  addFunko(args.id, args.user, args.nombre, args.descripcion, args.tipo as Tipo, args.genero as Genero, args.franquicia, args.numero, args.exclusivo, args.caracteristicasEspeciales, args.valorMercado);
}
).help().argv;

yargs(hideBin(process.argv)).command('remove', 'Removes a funko', {
  user: { type: 'string', demandOption: true },
  id: { type: 'number', demandOption: true }
}, (args) => {
  eliminarFunko(args.user, args.id);
}
).help().argv;

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
  modificarFunko(args.id, args.user, args.nombre, args.descripcion, args.tipo as Tipo, args.genero as Genero, args.franquicia, args.numero, args.exclusivo, args.caracteristicasEspeciales, args.valorMercado);
}
).help().argv;

yargs(hideBin(process.argv)).command('list', 'Lists a funko', {
  user: { type: 'string', demandOption: true }
}, (args) => {
  listaFunkos(args.user);
}
).help().argv;

yargs(hideBin(process.argv)).command('read', 'Reads a funko', {
  user: { type: 'string', demandOption: true },
  id: { type: 'number', demandOption: true }
}, (args) => {
  mostrarFunko(args.user, args.id);
}
).help().argv;
 