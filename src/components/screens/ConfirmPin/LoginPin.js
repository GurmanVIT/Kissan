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
import styles from './ConfirmPinStyle';
import {Wrap, ButtonPrimary} from '../../common';
import {Fonts, Images, colors} from '../../../theme';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import {saveInitDetails} from '../../../Redux/actions';
import {connect} from 'react-redux';
import Singleton from '../../../helpers/Singleton';
import {USER_DATA} from '../../../helpers/Constants';

class LoginPin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      code: '',
      showBtn: false,
      appPin: '',
    };
  }
  componentDidMount() {
    Singleton.getInstance()
      .getData(USER_DATA)
      .then(async res => {
        let walletData = JSON.parse(res);
        this.setState({
          appPin: walletData?.appPin,
        });
      });
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
          <Text style={[styles.header, {marginTop: 10}]}>{`Login Wallet`}</Text>
          <Image source={Images.wallet} />
        </View>
        <View style={styles.enterPinWrap}>
          <Text style={[styles.enterPinTextStyle, {color: colors.black}]}>
            {'Enter Pin'}
          </Text>
          <Text style={styles.subHeadingTextStyle}>
            {'Enter your 6 digit pin'}
          </Text>
          <View
            style={{
              marginTop: 70,
              alignItems: 'center',
            }}>
            <SmoothPinCodeInput
              password
              mask="﹡"
              cellStyle={{
                borderBottomWidth: 1,
                borderColor: 'gray',
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
              if (this.state.code === this.state.appPin) {
                this.props.callback();
                Actions.pop();
              } else {
                Singleton.getInstance().showError("Pin did't match.");
              }
            }}
          />
        </View>
      </Wrap>
    );
  }
}

// export default ConfirmPin;
export default connect(null, {saveInitDetails})(LoginPin);
