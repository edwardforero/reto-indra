const defaultResponse = require("../../utils/response-lib");
const PeopleDynamoService = require("../../services/peopleDynamo");


const people = new PeopleDynamoService();

module.exports.main = async ({pathParameters}) => {

  if ( !pathParameters || !pathParameters.id ) {
    return defaultResponse.failure({ status: "Faltan algunos parametros" });
  }
  const idPeople = pathParameters.id;
  try {
    const response = await people.get(idPeople);
    console.log(response)
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
