import React, { Component, useState, useEffect } from 'react';
import { AppState, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { store } from './Redux/reducers';
import Router from './Router';
import Singleton from '././helpers/Singleton';
import * as constants from '././helpers/Constants';
import { showMessage, hideMessage } from 'react-native-flash-message';
import FlashMessage from 'react-native-flash-message';

import messaging, { firebase } from '@react-native-firebase/messaging';
import 'react-native-url-polyfill/auto';

import DeviceInfo, { hasDynamicIsland } from 'react-native-device-info';
import { View } from 'native-base';
import 'react-native-get-random-values';
import '@ethersproject/shims';
import CurrencyUnit from './components/screens/CurrencyUnit';
import LanguagePage from './components/screens/Language';
import MessageSetting from './components/screens/MessageSetting';
import SecurityAndPrivacy from './components/screens/SecurityAndPrivacy';
import { Discover, EarnFree, Market, SelectRecipient } from './components/screens';
import News from './components/screens/News/News';
import Calculator from './components/screens/Calculator/Calculator';
import Swap from './components/screens/Swap/Swap';
import Stake from './components/screens/Stake/Stake';
import SelectNetwork from './components/screens/SelectNetwork/SelectNetwork';
import Wallet from './components/screens/Wallet/Wallet';
import WalletManagement from './components/screens/WalletManagement/WalletManagement';
import TokenFilter from './components/screens/TokenFilter/TokenFilter';

let appState = '';
const App = props => {
  // useEffect(() => {
  //   firebaseMethods();
  //   checkConnection();
  //   notificationTasks();
  //   appState = AppState.currentState;

  //   AppState.addEventListener('change', handleAppStateChange);
  // }, []);

  // const handleAppStateChange = nextAppState => {
  //   console.log('LoginPin-----', appState, nextAppState);
  //   if (appState == 'background' && nextAppState == 'active') {
  //     if (!global.isCamera) {
  //       Actions.currentScene != 'LoginPin' &&
  //         Actions.LoginPin({
  //           callback: () => {},
  //         });
  //     } else {
  //       global.isCamera = false;
  //     }
  //   }
  //   appState = nextAppState;
  // };

  // function firebaseMethods() {
  //   firebase
  //     .messaging()
  //     .requestPermission()
  //     .then(res1 => {
  //       console.log('res1-------', res1);
  //       firebase
  //         .messaging()
  //         .getToken()
  //         .then(res => {
  //           console.log('Token=======1111>', res);
  //           global.fcmToken = res;
  //           Singleton.getInstance().deviceToken = res;
  //         })
  //         .catch(err => {
  //           console.log('ERROR-FCM-----', err);
  //         });
  //     })
  //     .catch(error => {
  //       console.log('ERROR-FCM111-----', error);

  //       // User has rejected permissions
  //     });
  // }

  // function notificationTasks() {
  //   messaging().onNotificationOpenedApp(remoteMessage => {
  //     console.log('App to open from background state:', remoteMessage);
  //   });

  //   messaging().onMessage(async remoteMessage => {
  //     console.log('A new FCM message arrived:- ', remoteMessage);

  //     let msg =
  //       remoteMessage?.notification != undefined
  //         ? remoteMessage?.notification?.title +
  //           ': ' +
  //           remoteMessage?.notification?.body
  //         : '';
  //     let notifyType = remoteMessage.data.fcm_id;
  //     Singleton.getInstance()
  //       .getData(constants.ACCESS_TOKEN)
  //       .then(value => {
  //         if (value != null || value != 'null') {
  //           showNotifyData(msg, remoteMessage.data);
  //         }
  //       });
  //   });
  //   messaging()
  //     .getInitialNotification()
  //     .then(remoteMessage => {
  //       if (remoteMessage) {
  //         console.log(
  //           'Notification caused app to open from quit state:',
  //           remoteMessage,
  //         );
  //       }
  //     })
  //     .catch(err => {
  //       console.log('err', err);
  //     });
  // }

  // function showNotifyData(msg, data) {
  //   showMessage({
  //     message: msg,
  //     backgroundColor: '#CBB45E',
  //     autoHide: true,
  //     duration: 3000,
  //     type: 'info',
  //   });
  // }

  // const checkConnection = state => {
  //   // global.isConnected = state.isConnected;
  //   // global.isInternetReachable =
  //   //   state.isInternetReachable == null ? true : state.isInternetReachable;
  //   // showNetworkErr();
  // };

  // const showNetworkErr = () => {
  //   if (!global.isConnected || !global.isInternetReachable) {
  //     showMessage({
  //       message: 'NO INTERNET',
  //       backgroundColor: '#BD9864',
  //       autoHide: false,
  //       type: 'success',
  //       onPress: () => {
  //         console.log('view pressed');
  //       },
  //     });
  //   } else {
  //     hideMessage();
  //   }
  // };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TokenFilter />
      {/* <Provider store={store}>
        <View style={{ flex: 1 }}>
          <Router />
          {hasDynamicIsland() && <SafeAreaView />}
        </View>

        <FlashMessage position="top" />
      </Provider > */}
    </SafeAreaView >
  );
};

export default App;
