
const SwapiApi = require("./swapiApi");
const peopleAdapter = require("../adapters/peopleAdapter");


class PeopleSwapiService extends SwapiApi {

    async get(id) {
        this.path = `/people/${ id }`;
        const response = await this.getRequest();
        if ( response.status === 200 ) {
          return peopleAdapter(response.data);
        } else {
          return {};
        }
    }
}


module.exports = PeopleSwapiService;