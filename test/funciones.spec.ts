import { expect } from "chai";
import { addFunko, eliminarFunko, listaFunkos, mostrarFunko, modificarFunko, leerFunkos } from '../src/funciones.js';
import { Genero, Tipo } from '../src/type.js';
import { mkdirSync, rmdirSync } from 'fs';
import { describe, it , test } from "vitest";


describe("Tests funciones", () => {
  it("addFunko", () => {
    expect(addFunko(4, "usuario-tests", "stitch", "muñeco de stitch", Tipo.PopRides, Genero.PeliculasYTV, "Disney", 10, true, "se ilumina", 159)).to.equal(true);
    expect(addFunko(4, "usuario-tests", "stitch", "muñeco de stitch", Tipo.PopRides, Genero.PeliculasYTV, "Disney", 10, true, "se ilumina", 159)).to.equal(false); // ya existe
    expect(addFunko(1, "usuario-tests", "Lilo", "amigo de stitch", "Pop Rides" as Tipo, Genero.PeliculasYTV, "Disney", 10, true, "se ilumina", 120)).to.equal(false);
    expect(addFunko(1, "usuario-tests", "Lilo", "amigo de stitch", Tipo.PopRides, "cine" as Genero, "Disney", 10, true, "se ilumina", 120)).to.equal(false);
  });
  it("leerFunkos", () => {
    expect(leerFunkos("usuario-tests")).to.eql([{ID: 4, nombre: "stitch", descripcion: "muñeco de stitch", tipo: Tipo.PopRides, genero: Genero.PeliculasYTV, franquicia: "Disney", numero: 10, exclusivo: true, caracteristicasEspeciales: "se ilumina", valorMercado: 159}]);
  });
  it ("updateFunko", () => {
    expect(modificarFunko(4, "usuario-tests", "stitch 2", "muñeco de stitch", Tipo.PopRides, Genero.PeliculasYTV, "Disney", 10, true, "se ilumina", 159)).to.equal(true);
    expect(modificarFunko(1, "usuario-tests", "Lilo", "amigo de stitch", Tipo.VynilGold, Genero.PeliculasYTV, "Disney", 10, true, "se ilumina", 120)).to.equal(false);
    expect(modificarFunko(1, "usuario 1", "Lilo", "amigo de stitch", Tipo.PopRides, "cine" as Genero, "Disney", 10, true, "se ilumina", 120)).to.equal(false);
    expect(modificarFunko(4, "usuario-tests", "stitch 2", "muñeco de stitch", "Pop Rides" as Tipo , Genero.PeliculasYTV, "Disney", 10, true, "se ilumina", 159)).to.equal(false);
    expect(modificarFunko(4, "usuario-tests", "stitch 2", "muñeco de stitch", Tipo.PopRides, "cine" as Genero , "Disney", 10, true, "se ilumina", 159)).to.equal(false);

  });

  it ("listaFunkos", () => {
    // añadir 4 funkos a usuario-tests
    addFunko(1, "usuario-tests", "Lilo 1", "amigo de stitch", Tipo.PopRides, Genero.PeliculasYTV, "Disney", 10, true, "se ilumina", 35);
    addFunko(2, "usuario-tests", "Stitch", "amigo de stitch", Tipo.PopRides, Genero.PeliculasYTV, "Disney", 10, true, "se ilumina", 80);
    addFunko(3, "usuario-tests", "Lilo 2", "amigo de stitch", Tipo.PopRides, Genero.PeliculasYTV, "Disney", 10, true, "se ilumina", 150);
    addFunko(5, "usuario-tests", "Lilo 3", "amigo de stitch", Tipo.PopRides, Genero.PeliculasYTV, "Disney", 10, true, "se ilumina", 300);
    expect(listaFunkos("usuario-tests")).to.eql(true);
    expect(listaFunkos("usuario 1")).to.eql(false);
    const path = "./database/usuario-prueba";
    mkdirSync(path);
    expect(listaFunkos("usuario-prueba")).to.eql(false);
    rmdirSync("./database/usuario-prueba", {recursive: true});
  });

  it ("mostrarFunko", () => {
    expect(mostrarFunko("usuario-tests", 4)).to.eql(true);
    expect(mostrarFunko("usuario-tests", 1)).to.eql(true);
    expect(mostrarFunko("usuario-tests", 2)).to.eql(true);
    expect(mostrarFunko("usuario-tests", 3)).to.eql(true);
    expect(mostrarFunko("usuario-tests", 5)).to.eql(true);
    expect(mostrarFunko("usuario-prueba", 4)).to.eql(false);
    expect(mostrarFunko("usuario-tests", 10)).to.eql(false);
  });

  it("eliminarFunko", () => {
    expect(eliminarFunko("usuario 1", 4)).to.equal(false);
    expect(eliminarFunko("usuario-tests", 4)).to.equal(true);
    expect(eliminarFunko("usuario-tests", 4)).to.equal(false);
    rmdirSync("./database/usuario-tests", {recursive: true});
  });
});