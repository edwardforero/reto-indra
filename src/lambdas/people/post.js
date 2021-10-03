const PeopleSwapiService = require("../../services/peopleSwapi");
const PeopleDynamoService = require("../../services/peopleDynamo");
const defaultResponse = require("../../utils/response-lib");

const people = new PeopleDynamoService();
const peopleSwapi = new PeopleSwapiService();


module.exports.main = async ({body}) => {

  if ( !body ) {
    return defaultResponse.failure({ status: "Body vacío" });
  }
  const { peopleId } = JSON.parse(body);
  if ( !peopleId ) {
    return defaultResponse.badRequest({ status: "Faltan algunos parametros" });
  }

  try {
    const responseDynamo = await people.get(peopleId);
    if ( Object.entries(responseDynamo).length ) {
      return defaultResponse.badRequest({ status: "La persona ya se encuentra registrada" });
    }
    const responseSwapi = await peopleSwapi.get(peopleId);
    if ( Object.entries(responseSwapi).length ) {
      await people.put(peopleId, responseSwapi);
      return defaultResponse.success( 'Persona agregada' );
    } else {
      return defaultResponse.notFound({ detail: "Persona no encontrada." });
    }
  } catch (e) {
    console.log(e);
    return defaultResponse.failure({ status: e });
  }
};
