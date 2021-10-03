const axios = require("axios");
const swapiApi = process.env.swapiApi;

class SwapiApi {

    constructor(path) {
      this.url = path
    }

    async getRequest() {
        const url = `${ swapiApi }${ this.path }`;
        return await axios.get(url);
    }
}


module.exports = SwapiApi;