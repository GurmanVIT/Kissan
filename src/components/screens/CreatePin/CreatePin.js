import React, {Component} from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  BackHandler,
  Dimensions,
} from 'react-native';
import {Actions, ActionConst} from 'react-native-router-flux';
import styles from './CreatePinStyle';
import {Wrap, ButtonPrimary} from '../../common';
import {Fonts, Images, colors} from '../../../theme';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import Singleton from '../../../helpers/Singleton';

class CreatePin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      code: '',
      showBtn: false,
      tempText: '-1',
    };
    this.pin = '';
  }
  componentDidMount() {
    this.props.navigation.addListener('didFocus', this.onScreenFocus);
    this.props.navigation.addListener('didBlur', this.onScreenBlur);
  }

  onScreenFocus = () => {
    this.setState({pin: ''});
    BackHandler.addEventListener('hardwareBackPress', this.backAction);
  };
  onScreenBlur = () => {
    BackHandler.removeEventListener('hardwareBackPress', this.backAction);
  };
  backAction() {
    if (this.props?.from == 'Setting') {
      Actions.pop();
    }
    Actions.pop();
  }

  async updatePin(text) {
    clearTimeout(this.timeout);
    if (this.state.pin.length == 6) {
      return;
    }
    let pin = this.state.pin + text;
    await this.setState({pin, tempText: text});
    if (pin.length == 6) {
      this.setState({showBtn: true, tempText: ''});
    }

    this.timeout = setTimeout(() => {
      this.setState({tempText: ''});
    }, 200);
  }

  deletePin() {
    let pin = this.state.pin;
    if (pin.length > 0) {
      pin = pin.slice(0, -1);
      this.setState({pin});
    }
  }

  render() {
    return (
      <Wrap>
        <View
          style={{
            marginTop: 40,
            paddingHorizontal: 20,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text
            style={[styles.header, {marginTop: 10}]}>{`Create Wallet`}</Text>
          <Image source={Images.wallet} />
        </View>
        <View style={styles.enterPinWrap}>
          <Text style={[styles.enterPinTextStyle, {color: colors.black}]}>
            {'Enter Pin'}
          </Text>
          <Text style={styles.subHeadingTextStyle}>
            {'Enter your 6 digit pin'}
          </Text>
          <View style={{alignItems: 'center', marginTop: 40}}>
            <SmoothPinCodeInput
              password
              mask="﹡"
              cellStyle={{
                borderBottomWidth: 1,
                borderColor: 'gray',
                // marginRight: 20,
              }}
              cellStyleFocused={{
                borderColor: colors.blue,
              }}
              cellSize={35}
              cellSpacing={25}
              codeLength={6}
              value={this.state.code}
              onTextChange={text => {
                this.setState({code: text});
              }}
            />
          </View>
        </View>
        <View
          style={{
            marginHorizontal: 30,
            marginBottom: 40,
            justifyContent: 'flex-end',
            flex: 1,
          }}>
          <ButtonPrimary
            title={'Continue'}
            onPress={() => {
              if (this.state.code.length === 6) {
                Actions.replace('ConfirmPin', {
                  pin: this.state.code,
                  walletname: this.props.walletname,
                  isFrom: this.props.isFrom,
                });
              } else {
                Singleton.getInstance().showError('Please enter valid pin.');
              }
            }}
          />
        </View>
      </Wrap>
    );
  }
}
export default CreatePin;
