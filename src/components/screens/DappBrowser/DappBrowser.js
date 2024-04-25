import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {Component} from 'react';
import Singleton from '../../../helpers/Singleton';
import {DAPP_COIN_LIST, USER_DATA} from '../../../helpers/Constants';
import RNFS from 'react-native-fs';
import WebView from 'react-native-webview';
import {Wrap} from '../../common';
import {
  generateAddressFromMnemonics,
  getDappSignedTxn,
  getGasPrice,
  getNonceValueDapp,
  getWeb3Object,
  hex2dec,
} from '../../../helpers/utils';
import ConfirmationTransaction from './ConfirmationTransaction';
import {Images} from '../../../theme';
import styles from './styles';
import {Actions} from 'react-native-router-flux';

class DappBrowser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      jsContent: '',
      address: '',
      pvtKey: '',
      selectedCoin: DAPP_COIN_LIST[0],
      startUrl: this.props.enteredUrl.includes('https://')
        ? this.props.enteredUrl
        : 'https://www.google.com/search?q=' + this.props.enteredUrl,
      isConfirmationVisible: false,
      transactionData: null,
      enteredURL: '',
    };
  }
  componentDidMount() {
    Singleton.getInstance()
      .getData(USER_DATA)
      .then(async res => {
        const data = JSON.parse(res);
        const walletData = data.multiWallet[0];

        console.log('walletData----walletData-', walletData);

        let pvtKey = await generateAddressFromMnemonics(walletData?.mnemonics);
        pvtKey = pvtKey?.privateKey;

        console.log('walletData-----', walletData);

        this.setState(
          {
            address: walletData?.walletData,
            pvtKey: pvtKey,
            enteredURL: this.state.startUrl,
          },
          () => {
            RNFS.readFileAssets(`trust-min.js`, 'utf8').then(content => {
              // console.log('content====', content);
              this.setState(
                {
                  jsContent: this.getJavascript(
                    this.state.selectedCoin.chainId,
                    this.state.selectedCoin.rpcUrl,
                    walletData?.walletData,
                    content,
                  ),
                  content: content,
                },
                () => {
                  setTimeout(() => {
                    this.webview?.reload();
                  }, 500);
                  // this.setUrl(2);
                },
              );
            });
          },
        );
      });
  }

  getJavascript = function (chainId, rpcUrl, address, jsContent) {
    console.log(
      'chainId, rpcUrl, address, jsContent=======',
      chainId,
      rpcUrl,
      address,
    );
    let source = '';
    source = `
      ${jsContent}
      (function() {
        var config = {
          ethereum: {
            address: '${address}',
            chainId: ${chainId},
            rpcUrl: '${rpcUrl}'
        }
        };
        trustwallet.ethereum = new trustwallet.Provider(config);
        trustwallet.postMessage = (jsonString) => {
          window.ReactNativeWebView?.postMessage(JSON.stringify(jsonString))
        };
        window.ethereum = trustwallet.ethereum;
    })();
      `;
    return source;
  };

  onShouldStartLoadWithRequest = data => {
    return true;
  };
  onMessage = async ({nativeEvent}) => {
    let message = JSON.parse(nativeEvent.data);
    console.log('---------message------', message);

    if (message.name == 'requestAccounts') {
      let js = `window.ethereum.setAddress('${this.state.address}');`;
      this.webview?.injectJavaScript(js);
      let mmid = message.id;
      let js1 = `window.ethereum.sendResponse(${mmid}, ['${this.state.address}'])`;
      this.webview?.injectJavaScript(js1);
    } else if (message.name == 'signTransaction') {
      if (!message.object.value) {
        message.object.value = '0x0';
      }
      if (!message.object.gas) {
        message.object.gas = '0x238ec';
      }

      this.getNonceAndGas(message);
    }
  };

  async getNonceAndGas(transactionData) {
    const gasFeeMultiplier = 0.000000000000000001;

    try {
      let gasPrice = await getGasPrice(this.state.selectedCoin.rpcUrl);
      let nonce = await getNonceValueDapp(
        this.state.selectedCoin.rpcUrl,
        this.state.address,
      );

      var initialValue = gasPrice * hex2dec(transactionData.object.gas);
      var fee = initialValue * gasFeeMultiplier;

      let data = {
        signingData: transactionData,
        fee,
        gasPrice,
        nonce,
      };
      console.log('ds===', data);
      this.setState({
        isConfirmationVisible: true,
        transactionData: data,
      });
      console.log('fee ---', fee);
    } catch (err) {
      console.log('ERROR ---', err);
    }
  }

  async makeRaxTxn() {
    try {
      var pKey = this.state.pvtKey;
      const {signingData, gasPrice, nonce} = this.state.transactionData;
      let amount = (
        hex2dec(signingData.object.value ? signingData.object.value : '0x0') /
        10 ** 18
      ).toString();

      let gasLimit = signingData.object.gas; // in hex

      getDappSignedTxn(
        pKey,
        amount,
        gasPrice,
        gasLimit,
        nonce,
        signingData.object.to,
        signingData.object.from,
        signingData.object.data,
        this.state.selectedCoin.chainId,
        this.state.selectedCoin.rpcUrl,
      )
        .then(res => {
          let js = `trustwallet.ethereum.sendResponse(${this.state.transactionData?.signingData?.id}, '${res}')`;
          this.webview.injectJavaScript(js);
          Singleton.getInstance().showMsg(
            'Transaction has been successfully pushed on blockchain with txn id: ' +
              res,
          );
        })
        .catch(err => {
          let js = `window.ethereum.sendError(${this.state.transactionData?.signingData?.id}, 'Unable to process transaction.')`;
          this.webview?.injectJavaScript(js);
          Singleton.getInstance().showError('Unable to process transaction.');
        });
    } catch (error) {
      console.log('ERORR=====', error);
    }
  }

  render() {
    // console.log('this.state.startUrl====', this.state.startUrl);
    return (
      <Wrap>
        <View style={styles.headerView}>
          <TouchableOpacity onPress={() => Actions.pop()}>
            <Image source={Images.backButton} />
          </TouchableOpacity>
          <Text numberOfLines={1} style={styles.searchedText}>
            {this.state.enteredURL}
          </Text>
        </View>
        <WebView
          ref={ref => (this.webview = ref)}
          source={{uri: this.state.startUrl}}
          injectedJavaScriptBeforeContentLoaded={this.state.jsContent}
          style={{flex: 1}}
          onMessage={this.onMessage}
          setSupportMultipleWindows={false}
          onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest}
          nestedScrollEnabled
          onNavigationStateChange={navState => {
            // console.log(' navState ==>>>', navState);

            this.setState({
              enteredURL: navState.url,
            });
          }}
          startInLoadingState={true}
          sendCookies
          javascriptEnabled
          allowsInlineMediaPlayback
          useWebkit
          testID={'browser-webview'}
          originWhitelist={['http://*', 'https://*', 'intent://*']}
          onError={err => {
            console.log('chk err', err);
          }}
        />
        <ConfirmationTransaction
          transactionData={this.state.transactionData}
          selectedCoin={this.state.selectedCoin}
          isVisible={this.state.isConfirmationVisible}
          onClose={() => {
            let js = `window.ethereum.sendError(${this.state.transactionData?.signingData?.id}, 'Cancelled')`;
            this.webview?.injectJavaScript(js);
            this.setState({isConfirmationVisible: false});
          }}
          onConfirm={() => {
            this.setState({isConfirmationVisible: false}, () => {
              this.makeRaxTxn();
            });
          }}
        />
      </Wrap>
    );
  }
}
export {DappBrowser};
