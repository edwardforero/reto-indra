const PeopleSwapiService = require("../../src/services/peopleSwapi");


const peopleSwapi = new PeopleSwapiService();

describe('validateSwapiResponse', () => {

    it("define peopleSwapi services Class", () => {
      expect(peopleSwapi).toBeDefined();
    });

    it('mock PeopleSwapiService get people undecoded', async () => {
      const swapiGet = await peopleSwapi.get(1);
      expect(Object.keys(swapiGet)).toEqual(
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
});