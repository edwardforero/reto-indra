const sinon = require('sinon');
const PeopleSwapiService = require("../../src/services/peopleSwapi");
const PeopleDynamoService = require("../../src/services/peopleDynamo");

const peopleAdapter = require("../../src/adapters/peopleAdapter");
const { SWAPI, DYNAMO, DYNAMO_PUT } = require('./mock_people');

const peopleSwapi = new PeopleSwapiService();
const peopleDynamo = new PeopleDynamoService();

describe('validatePeople', () => {

    it("define peopleSwapi services Class", () => {
      expect(peopleSwapi).toBeDefined();
    });

    sinon.stub(PeopleSwapiService.prototype, 'get').callsFake(args => {
      return SWAPI
    })

    it('mock PeopleSwapiService get people undecoded', async () => {
      const swapiGet = await peopleSwapi.get(1);
      expect(Object.keys(swapiGet)).toEqual(
        expect.arrayContaining(
          [
            "name", 
            "height", 
            "mass", 
            "hair_color", 
            "skin_color", 
            "eye_color", 
            "birth_year", 
            "gender", 
            "homeworld", 
            "films", 
            "species", 
            "vehicles", 
            "starships", 
            "created", 
            "edited", 
            "url"
          ]
        )
      )
    });

    it('mock PeopleSwapiService get people decoded', async () => {
      const swapiGet = await peopleSwapi.get(1);
      expect(Object.keys(peopleAdapter(swapiGet))).toEqual(
        expect.arrayContaining(
          [
            "anoNacimiento", 
            "colorOjo", 
            "peliculas", 
            "genero", 
            "colorCabello", 
            "altura", 
            "mundoNatal", 
            "masa", 
            "nombre", 
            "colorPiel", 
            "creado", 
            "editado", 
            "especies", 
            "naves", 
            "url", 
            "vehiculos"
          ]
        )
      )
    });

    it("define peopleDynamo services Class", () => {
      expect(peopleDynamo).toBeDefined();
    });

    sinon.stub(PeopleDynamoService.prototype, 'get').callsFake(args => {
      return DYNAMO;
    });

    sinon.stub(PeopleDynamoService.prototype, 'put').callsFake(args => {
      return DYNAMO_PUT;
    });

    it('mock PeopleSwapiService get people decoded', async () => {
      const response = await peopleDynamo.get(1)
      expect(Object.keys(response)).toEqual(
        expect.arrayContaining(
          [
            "naves", 
            "nombre", 
            "masa", 
            "colorCabello", 
            "vehiculos", 
            "typeData", 
            "altura", 
            "url", 
            "anoNacimiento", 
            "peliculas", 
            "colorPiel", 
            "editado", 
            "colorOjo", 
            "especies", 
            "creado", 
            "id", 
            "mundoNatal", 
            "genero"
          ]
        )
      )
    });

    it('mock PeopleSwapiService get people decoded', async () => {
      const response = await peopleDynamo.put(1, DYNAMO);
      expect(response).toEqual(undefined);
    });
});