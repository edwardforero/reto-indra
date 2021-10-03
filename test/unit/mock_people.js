
const SWAPI = {
    "name": "Luke Skywalker",
    "height": "172",
    "mass": "77",
    "hair_color": "blond",
    "skin_color": "fair",
    "eye_color": "blue",
    "birth_year": "19BBY",
    "gender": "male",
    "homeworld": "https://swapi.py4e.com/api/planets/1/",
    "films": [
        "https://swapi.py4e.com/api/films/1/",
        "https://swapi.py4e.com/api/films/2/",
        "https://swapi.py4e.com/api/films/3/",
        "https://swapi.py4e.com/api/films/6/",
        "https://swapi.py4e.com/api/films/7/"
    ],
    "species": [
        "https://swapi.py4e.com/api/species/1/"
    ],
    "vehicles": [
        "https://swapi.py4e.com/api/vehicles/14/",
        "https://swapi.py4e.com/api/vehicles/30/"
    ],
    "starships": [
        "https://swapi.py4e.com/api/starships/12/",
        "https://swapi.py4e.com/api/starships/22/"
    ],
    "created": "2014-12-09T13:50:51.644000Z",
    "edited": "2014-12-20T21:17:56.891000Z",
    "url": "https://swapi.py4e.com/api/people/1/"
};

const DYNAMO = {
    "naves": [
        "https://swapi.py4e.com/api/starships/12/",
        "https://swapi.py4e.com/api/starships/22/"
    ],
    "nombre": "Luke Skywalker",
    "masa": "77",
    "colorCabello": "blond",
    "vehiculos": [
        "https://swapi.py4e.com/api/vehicles/14/",
        "https://swapi.py4e.com/api/vehicles/30/"
    ],
    "typeData": "People",
    "altura": "172",
    "url": "https://swapi.py4e.com/api/people/1/",
    "anoNacimiento": "19BBY",
    "peliculas": [
        "https://swapi.py4e.com/api/films/1/",
        "https://swapi.py4e.com/api/films/2/",
        "https://swapi.py4e.com/api/films/3/",
        "https://swapi.py4e.com/api/films/6/",
        "https://swapi.py4e.com/api/films/7/"
    ],
    "colorPiel": "fair",
    "editado": "2014-12-20T21:17:56.891000Z",
    "colorOjo": "blue",
    "especies": [
        "https://swapi.py4e.com/api/species/1/"
    ],
    "creado": "2014-12-09T13:50:51.644000Z",
    "id": "People.1",
    "mundoNatal": "https://swapi.py4e.com/api/planets/1/",
    "genero": "male"
};

DYNAMO_PUT = "Persona agregada";


module.exports = {
    SWAPI,
    DYNAMO,
}

