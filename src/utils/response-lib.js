module.exports = {  
  success: function(body) {
    return buildResponse(200, body);
  },
  failure: function(body) {
    return buildResponse(500, body);
  },
  notFound: function(body) {
    return buildResponse(404, body);
  },
  badRequest: function(body) {
    return buildResponse(400, body);
  },
}

function buildResponse(statusCode, body) {
  return {
    statusCode: statusCode,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true
    },
    body: JSON.stringify(body)
  };
}