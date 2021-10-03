const PeopleSwapiService = require("../../services/peopleSwapi");
const defaultResponse = require("../../utils/response-lib");

const peopleSwapi = new PeopleSwapiService();

module.exports.main = async ({pathParameters}) => {

  if ( !pathParameters || !pathParameters.id ) {
    return defaultResponse.failure({ detail: "Faltan algunos parametros" });
  }
  const peopleId = pathParameters.id;

  try {
    const response = await peopleSwapi.get(peopleId)
    if ( Object.entries(response).length ) {
      return defaultResponse.success( response );
    } else {
      return defaultResponse.notFound({ detail: "Persona no encontrada." });
    }
  } catch (e) {
    console.log(e);
    return defaultResponse.failure({ status: e });
  }
};