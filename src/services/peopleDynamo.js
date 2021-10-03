const AWS = require("aws-sdk");

const tableName = process.env.DynamoTableName;

class PeopleDynamoService {

    async get(peopleId) {
        const dynamoDb = new AWS.DynamoDB.DocumentClient();
        const { Items } = await dynamoDb.query({
            TableName: tableName,
            KeyConditionExpression: '#typeData = :typeData and #id = :id',
            ExpressionAttributeValues: {
              ':typeData': 'People',
              ':id': `People.${peopleId}`
            },
            ExpressionAttributeNames: {
              '#typeData': 'typeData',
              '#id': `id`
            }
        }).promise();
      if ( Items && Items.length > 0 ) {
        return Items[0];
      }
      return {};
    };

    async put(peopleId, people) {
      const dynamoDb = new AWS.DynamoDB.DocumentClient();
      return await dynamoDb.put({
        TableName: tableName,
        Item: {
          ...people,
          'typeData': 'People',
          'id': `People.${peopleId}`
        },
        ReturnValues: 'NONE',
      }).promise();
    }
}


module.exports = PeopleDynamoService;