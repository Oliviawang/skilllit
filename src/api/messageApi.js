import fetch from 'isomorphic-fetch';
import * as endpoint from '../constants/endpoint';

class Api {
  static load() {
    return new Promise((resolve, reject) => {
      const url = `${endpoint.MESSAGE.LOAD}`;
      fetch(url, { credentials: 'include' }).then((response) => {
        if (response.status >= 400) return reject(response.status);
          return response.json();
      })
      .then(function (data) {
        resolve(data.data ? data.data : data);
      })
    });
  }
}

export default Api;
