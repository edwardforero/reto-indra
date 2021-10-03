const People = require('../models/people')

module.exports = (source) => {
    const people = new People()
    people.anoNacimiento = source.birth_year;
    people.colorOjo = source.eye_color;
    people.peliculas = source.films;
    people.genero = source.gender;
    people.colorCabello = source.hair_color;
    people.altura = source.height;
    people.mundoNatal = source.homeworld;
    people.masa = source.mass;
    people.nombre = source.name;
    people.colorPiel = source.skin_color;
    people.creado = source.created;
    people.editado = source.edited;
    people.especies = source.species;
    people.naves = source.starships;
    people.url = source.url;
    people.vehiculos = source.vehicles;
    return people;
}