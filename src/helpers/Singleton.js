import AsyncStorage from '@react-native-community/async-storage';
import * as constants from '../helpers/Constants';
import {Alert, Platform, Share} from 'react-native';
import {request, PERMISSIONS, openSettings} from 'react-native-permissions';
import {showMessage} from 'react-native-flash-message';
import {Fonts, Images, colors} from '../theme';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {hasDynamicIsland, hasNotch} from 'react-native-device-info';

export default class Singleton {
  static myInstance = null;
  deviceToken = '1234';
  accessToken = '';
  currentLat = 0;
  currentLong = 0;
  sessionRadius = 150;
  kycId = '';
  hideZeroBalance = false;
  checkAuthBack = false;
  theme = 'theme1';
  favArrayKey = 'favArr';
  buySellTicketSocket = null;
  isLogin = false;
  appBanner = '';
  showImageViewRef = null;
  currencySymbol = '$';
  // statusChange = null;

  static getInstance() {
    if (Singleton.myInstance == null) {
      Singleton.myInstance = new Singleton();
    }
    return this.myInstance;
  }

  async saveToken(token) {
    Singleton.getInstance().accessToken = token;
    await this.saveData(constants.ACCESS_TOKEN, token);
  }

  async saveEmptyDefault() {
    Singleton.getInstance().kycId = '';
    await this.saveData(constants.SAVED_RADIUS_VALUE, 150);
    Singleton.getInstance().accessToken = '';
    await this.saveData(constants.ACCESS_TOKEN, '');
    await this.saveData(constants.IS_LOGIN, 'diable');
  }

  deleteOfflineStepsData() {
    return new Promise((resolve, reject) => {
      resolve();
      AsyncStorage.clear();
    });
  }

  toFixed(num, fixed) {
    if (num) {
      num = num.toString(); //If it's not already a String
      if (num.includes('.')) {
        num = num.slice(0, num.indexOf('.') + (fixed + 1));
      }
      return Number(num);
    } else return Number(0);
  }

  saveData(key, value) {
    return new Promise((resolve, reject) => {
      AsyncStorage.setItem(key, value)
        .then(response => {
          resolve(value);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
  exponentialToDecimalConvert(exponential) {
    let decimal = exponential.toString().toLowerCase();
    if (decimal.includes('e+')) {
      const exponentialSplitted = decimal.split('e+');
      let postfix = '';
      for (
        let i = 0;
        i <
        +exponentialSplitted[1] -
          (exponentialSplitted[0].includes('.')
            ? exponentialSplitted[0].split('.')[1].length
            : 0);
        i++
      ) {
        postfix += '0';
      }
      const addCommas = text => {
        let j = 3;
        let textLength = text.length;
        while (j < textLength) {
          text = `${text.slice(0, textLength - j)}${text.slice(
            textLength - j,
            textLength,
          )}`;
          textLength++;
          j += 3 + 1;
        }
        return text;
      };
      decimal = addCommas(exponentialSplitted[0].replace('.', '') + postfix);
    }
    if (decimal.toLowerCase().includes('e-')) {
      const exponentialSplitted = decimal.split('e-');
      let prefix = '0.';
      for (let i = 0; i < +exponentialSplitted[1] - 1; i++) {
        prefix += '0';
      }
      decimal = prefix + exponentialSplitted[0].replace('.', '');
    }
    return decimal.toString();
  }
  numbersToBillion(labelValue) {
    // Nine Zeroes for Billions
    return Math.abs(Number(labelValue)) >= 1.0e9
      ? (Math.abs(Number(labelValue)) / 1.0e9).toFixed(2) + 'B'
      : // Six Zeroes for Millions
      Math.abs(Number(labelValue)) >= 1.0e6
      ? (Math.abs(Number(labelValue)) / 1.0e6).toFixed(2) + 'M'
      : // Three Zeroes for Thousands
      Math.abs(Number(labelValue)) >= 1.0e3
      ? (Math.abs(Number(labelValue)) / 1.0e3).toFixed(2) + 'K'
      : Math.abs(Number(labelValue));
  }
  getData(key) {
    console.log(key);
    return new Promise((resolve, reject) => {
      AsyncStorage.getItem(key)
        .then(response => {
          console.log(response);
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  funComma(num) {
    var str = num.split('.');
    if (str[0].length >= 4) {
      str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    }

    return str.join('.');
  }

  validateTexts(arrOfTexts, arrOfPlaceholders) {
    console.log('txts validation');
    return new Promise((resolve, reject) => {
      for (let i = 0; i < arrOfTexts.length; i++) {
        console.log(arrOfTexts[i]);
        if (arrOfTexts[i].length == 0) {
          return reject('Please enter ' + arrOfPlaceholders[i]);
        }
        if (i == arrOfTexts.length - 1) {
          return resolve('Validations passed');
        }
      }
    });
  }
  async cameraPermission() {
    var response = '';
    if (Platform.OS == 'android') {
      response = await request(PERMISSIONS.ANDROID.CAMERA);
    } else {
      response = await request(PERMISSIONS.IOS.CAMERA);
    }
    if (response != 'granted') {
      Alert.alert('Camera Permission', 'Please allow from setting manually.', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'Ok', onPress: () => openSettings()},
      ]);
    }
    return response;
  }
  async openCamera() {
    return new Promise((resolve, reject) => {
      launchCamera(constants.IMAGE_OPTION, response => {
        if (!response.didCancel) {
          resolve(response);
        } else {
          reject("does't pick");
        }
      });
    });
  }
  async storagePermission() {
    var response = '';
    try {
      if (Platform.OS == 'android') {
        response = await request(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE);
        console.log('EESS--', response);
        if (response != 'granted') {
          Alert.alert(
            'File and Media Permission',
            'Please allow from setting manually.',
            [
              {
                text: 'Cancel',
                onPress: () => null,
                style: 'cancel',
              },
              {text: 'Ok', onPress: () => openSettings()},
            ],
          );
        }
        return response;
      } else {
        response = await request(PERMISSIONS.IOS.PHOTO_LIBRARY);
        console.log('EESS--', response);
        if (response != 'granted') {
          Alert.alert(
            'File and Media Permission',
            'Please allow from setting manually.',
            [
              {
                text: 'Cancel',
                onPress: () => null,
                style: 'cancel',
              },
              {text: 'Ok', onPress: () => openSettings()},
            ],
          );
        }
        return response;
      }
    } catch (err) {
      console.log('PERMISSION_ERR----', err);
    }
  }
  async openPhotos() {
    return new Promise((resolve, reject) => {
      launchImageLibrary(constants.IMAGE_OPTION, response => {
        if (!response.didCancel) {
          resolve(response);
        } else {
          reject("does't pick");
        }
      });
    });
  }
  async openVideo() {
    return new Promise((resolve, reject) => {
      launchImageLibrary(constants.VIDEO_OPTION, response => {
        if (!response.didCancel) {
          resolve(response);
        } else {
          reject("does't pick");
        }
      });
    });
  }

  iosImgUri(imagePath) {
    if (Platform.OS == 'ios') {
      imagePath = imagePath.replace('file:///', '').replace('file://', '');
      imagePath = decodeURI(imagePath);
    }
    return imagePath;
  }

  showError(errMsg) {
    showMessage({
      message: errMsg,
      backgroundColor: colors.redColor,
      autoHide: true,
      duration: 3000,
      type: 'danger',
      onPress: () => {},
      style: {
        marginTop: hasNotch() || hasDynamicIsland() ? 50 : 20,
        marginHorizontal: 5,
        borderRadius: 10,
      },
      titleStyle: {
        fontFamily: Fonts.regular,
        fontSize: 16,
        color: colors.white,
      },
      textStyle: {
        fontFamily: Fonts.regular,
        fontSize: 15,
        color: colors.white,
      },
    });
  }
  showMsg(msg) {
    showMessage({
      message: msg,
      backgroundColor: colors.appPrimary,
      autoHide: true,
      duration: 3000,
      type: 'success',
      onPress: () => {},
      style: {
        marginTop: hasNotch() || hasDynamicIsland() ? 50 : 20,
        marginHorizontal: 5,
        borderRadius: 10,
      },
      titleStyle: {
        fontFamily: Fonts.regular,
        fontSize: 16,
        color: colors.white,
      },
      textStyle: {
        fontFamily: Fonts.regular,
        fontSize: 15,
        color: colors.white,
      },
    });
  }
  showMsgClr(msg, color) {
    showMessage({
      message: msg,
      backgroundColor: color,
      autoHide: true,
      duration: 3000,
      type: 'success',
      onPress: () => {},
      style: {
        marginTop: hasNotch() || hasDynamicIsland() ? 50 : 20,
        marginHorizontal: 5,
        borderRadius: 10,
      },
      titleStyle: {
        fontFamily: Fonts.regular,
        fontSize: 16,
        color: colors.white,
      },
      textStyle: {
        fontFamily: Fonts.regular,
        fontSize: 15,
        color: colors.white,
      },
    });
  }

  getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age || '';
  }
  calcCrow(lat1, lon1, lat2, lon2) {
    try {
      var R = 6371; // km
      var dLat = this.toRad(lat2 - lat1);
      var dLon = this.toRad(lon2 - lon1);
      var lat1 = this.toRad(lat1);
      var lat2 = this.toRad(lat2);
      var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.sin(dLon / 2) *
          Math.sin(dLon / 2) *
          Math.cos(lat1) *
          Math.cos(lat2);
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      var d = R * c;
      console.log('DISTANCE---', d);
      return d.toFixed(1);
    } catch (err) {
      console.log('RESPppppp====', err);
      return 0;
    }
  }
  // Converts numeric degrees to radians
  toRad(Value) {
    return (Value * Math.PI) / 180;
  }

  async importWallet(mnemonics, name) {
    try {
      // ********************************  FOR ETH  ************************************
      const ethWallet = await generateEthWallet(mnemonics);
      await this.saveData(ethWallet.address + '_pk', ethWallet.privateKey);
      await this.saveData(ethWallet.address, mnemonics);

      //   // ********************************  FOR SOLANA  ************************************
      //   const solanaWallet = await generateSolanaAddress(mnemonics);
      //   console.log("solanaWallet:::", solanaWallet.publicKey);
      //   await this.saveData(
      //     solanaWallet.publicKey.toString() + "_pk",
      //     solanaWallet.secretKey.toString()
      //   );
      //   await this.saveData(solanaWallet.publicKey.toString(), mnemonics);
      //   // ********************************  FOR CARDANO  ************************************

      //   const adaWallet = await generateCardanoAddress(mnemonics);
      //   await this.saveData(`${adaWallet.baseAddress}_pk`, mnemonics);

      //   // ********************************  FOR BTC  ************************************
      //   let BTCWallet = await generateBTCAddress(mnemonics);
      //   const btcAddress = BTCWallet.btcAddress;
      //   let btcPKey = (btcAddress + "_pk", BTCWallet.btc_pvtKey);
      //   await this.saveData(btcAddress + "_pk", BTCWallet.btc_pvtKey);
      //   await this.saveData(btcAddress, mnemonics);

      return {
        mnemonics,
        ethAddress: ethWallet.address,
        ethPrivateKey: ethWallet.privateKey,
        // solanaAddress: solanaWallet.publicKey,
        // adaAddress: adaWallet.baseAddress,
        // solanaPrivatekey: solanaWallet.secretKey.toString(),
        // btcAddress: btcAddress,
        // btcPrivateKey: btcPKey,
      };
    } catch (e) {
      console.log('import wallet error ', e);
      return e;
    }
  }
}
