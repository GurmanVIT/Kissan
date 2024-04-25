import Singleton from '../helpers/Singleton';
import * as Constant from '../helpers/Constants';
import {Platform, NetInfo} from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';
import END_POINT, {BASE_URL} from './Endpoints';
import axios from 'axios';

const APIClient = class APIClient {
  static myInstance = null;
  static getInstance() {
    if (APIClient.myInstance == null) {
      APIClient.myInstance = new APIClient();
    }
    return this.myInstance;
  }
  fetchGet(endpoint) {
    return new Promise((resolve, reject) => {
      console.log('url', `${endpoint}`);
      fetch(`${endpoint}`, {
        method: 'GET',
      })
        .then(async res => {
          console.log('res', res);
          let response = await res.json();
          if (!res.ok) {
            return reject(response);
          }
          return resolve(response);
        })
        .catch(reject);
    });
  }
  getWithoutAuth(endpoint) {
    return new Promise((resolve, reject) => {
      console.log('url', `${BASE_URL}${endpoint}`);
      fetch(`${BASE_URL}${endpoint}`, {
        method: 'GET',
      })
        .then(async res => {
          console.log('res', res);
          let response = await res.json();
          if (!res.ok) {
            return reject(response);
          }
          return resolve(response);
        })
        .catch(reject);
    });
  }
  //sun abandon quantum mistake noodle life smile future carry entire volcano cruise
  get(endpoint) {
    return new Promise(async (resolve, reject) => {
      if (Singleton.getInstance().accessToken == '') {
        Singleton.getInstance().accessToken =
          await Singleton.getInstance().getData(Constant.ACCESS_TOKEN);
      }
      console.log(
        'url',
        `${BASE_URL}${endpoint} TOKEN==== ${
          Singleton.getInstance().accessToken
        }`,
      );
      try {
        axios
          .get(`${BASE_URL}${endpoint}`)
          .then(async res => {
            let response = res?.data;
            if (res.status != 200) {
              return reject(response);
            }
            return resolve(response);
          })
          .catch(err => {
            console.log('d======', err);
            return reject(err);
          });
      } catch (error) {
        console.log('error======', error);
      }
    });
  }

  post(endpoint, data) {
    return new Promise(async (resolve, reject) => {
      if (Singleton.getInstance().accessToken == '') {
        Singleton.getInstance().accessToken =
          await Singleton.getInstance().getData(Constant.ACCESS_TOKEN);
      }

      console.log(
        'url===',
        `${BASE_URL}${endpoint} TOKEN== ${Singleton.getInstance().accessToken}`,
      );
      console.log('data', JSON.stringify(data));
      try {
        axios
          .post(`${BASE_URL}${endpoint}`, data)
          .then(function (response) {
            if (response.status == 200) {
              return resolve(response.data);
            } else {
              return reject(response.data);
            }
          })
          .catch(function (error) {
            return reject(error);
          })
          .finally(function () {
            return reject(Constant.SOME_WENT_WRONG);
          });
      } catch (error) {
        reject(error);
        console.log('error----------', error);
      }
    });
  }

  postNew(endpoint, data) {
    return new Promise(async (resolve, reject) => {
      if (Singleton.getInstance().accessToken == '') {
        Singleton.getInstance().accessToken =
          await Singleton.getInstance().getData(Constant.ACCESS_TOKEN);
      }

      console.log(
        'url',
        `${BASE_URL}${endpoint} TOKEN== ${Singleton.getInstance().accessToken}`,
      );

      console.log('data', JSON.stringify(data));
      fetch(`${BASE_URL}${endpoint}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded"',
          Authorization: Singleton.getInstance().accessToken,
        },
        body: data,
      })
        .then(async res => {
          let response = await res.json();
          if (!res.ok) {
            return reject(response);
          }
          return resolve(response);
        })
        .catch(reject);
    });
  }

  postNoHeader(endpoint, data) {
    return new Promise((resolve, reject) => {
      console.log('url', `${BASE_URL}${endpoint}`);
      console.log('data', JSON.stringify(data));
      fetch(`${BASE_URL}${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          Accept: 'application/json',
        },
        // body: data,
        body: JSON.stringify(data),
      })
        .then(async res => {
          let response = await res.json();
          console.log('response++++', response);
          if (!res.ok) {
            return reject(response);
          } else {
            return resolve(response);
          }
        })
        .catch(reject);
    });
  }
  postFile(endpoint, data) {
    return new Promise(async (resolve, reject) => {
      if (Singleton.getInstance().accessToken == '') {
        Singleton.getInstance().accessToken =
          await Singleton.getInstance().getData(Constant.ACCESS_TOKEN);
      }

      console.log(
        'url',
        `${BASE_URL}${endpoint} TOKEN== ${Singleton.getInstance().accessToken}`,
      );

      RNFetchBlob.fetch(
        'POST',
        `${BASE_URL}${endpoint}`,
        {
          Authorization: Singleton.getInstance().accessToken,
          'Content-Type': 'multipart/form-data',
        },
        data,
      )
        .then(async res => {
          // console.log('res', res);
          let response = await res.json();
          // console.log('response', response);
          return resolve(response);
        })
        .catch(reject);
    });
  }
};
export {APIClient};
