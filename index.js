const rp = require('request-promise-native');

class Esata {
  /**
  * @param { string } ApiKey - Esata ApiKey
  */
  constructor(ApiKey) {
    this.Api_Key = ApiKey;
    this.endpoint = 'https://esatapayment.com/api';
  }
