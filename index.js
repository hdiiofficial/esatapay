const rp = require('request-promise-native');
const crypto = require('crypto');

class Esatapay {
  /**
  * @param { string } ApiKey - Esata ApiKey
  */
  constructor(ApiKey) {
    this.Api_Key = ApiKey;
    this.endpoint = 'https://esatapayment.com/api';
  }

  InfoAkun() {
    const options = {
      method: 'POST',
      uri: `${this._endpoint}/account`,
      body: {
        api_key: this.Api_Key,
        action: 'akun'
      },
      json: true
    };

    return rp(options)
      .then(function (resp) {
        return resp.data;
      })
      .catch(function (err) {
        return err.data;
      });
      }
  
  Sosmed() {
    const options = {
      method: 'POST',
      uri: `${this._endpoint}/social-media`,
      body: {
        api_key: this.Api_Key,
        action: 'layanan'
      },
      json: true
    };

    return rp(options)
      .then(function (resp) {
        return resp.data;
      })
      .catch(function (err) {
        return err.data;
      });
      }


module.exports = Esatapay
