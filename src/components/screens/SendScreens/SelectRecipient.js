import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Clipboard,
} from 'react-native';
import React from 'react';
import { ButtonGreen, Header, Inputtext, Wrap } from '../../common';
import { Images, colors } from '../../../theme';
import styles from './styles';
import { useState } from 'react';
import {
  addressBookBtn,
  myAccountBtn,
  recentBtn,
} from '../../../helpers/Constants';
import { validateEthAddress } from '../../../helpers/utils';
import Singleton from '../../../helpers/Singleton';
import { Actions } from 'react-native-router-flux';
import { ScanScreen } from '../../common/ScanScreen';

function SelectRecipient(props) {
  const [tabTitle, setTabTitle] = useState('Recents');
  const [enteredAddress, setEnteredAdd] = useState('');
  const [isVisibleScan, setVisibleScan] = useState(null);
  return (
    <Wrap>
      <Header title={'Send'} />
      <View style={{ marginVertical: 10, marginHorizontal: 15 }}>
        <View style={styles.scanView}>
          <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
            <Text
              style={{ fontSize: 14, color: colors.black, fontWeight: '500' }}>
              Receving Account
            </Text>
            <TouchableOpacity
              onPress={() => {
                global.isCamera = true;
                setVisibleScan(true);
              }}>
              <Image source={Images.ic_scan_button} />
            </TouchableOpacity>
          </View>
          <View style={styles.inputView}>
            <TextInput
              placeholder="0x9e2.......FD6718d"
              style={{ width: '70%' }}
              maxLength={50}
              value={enteredAddress}
              onChangeText={setEnteredAdd}
            />
            <ButtonGreen
              onPress={() => {
                Clipboard.getString().then(res => {
                  console.log('dsk--', res);
                  setEnteredAdd(res);
                });
              }}
              customBtnStyle={{ borderRadius: 30 }}
              title={'Paste'}
            />
          </View>
        </View>
        <View
          style={{
            marginTop: 15,
            justifyContent: 'space-around',
            flexDirection: 'row',
          }}>
          <Text
            onPress={() => {
              setTabTitle(recentBtn);
            }}
            style={[
              styles.recentText,
              tabTitle == recentBtn ? styles.recentActiveText : null,
            ]}>
            {recentBtn}
          </Text>
          <Text
            onPress={() => {
              setTabTitle(addressBookBtn);
            }}
            style={[
              styles.recentText,
              tabTitle == addressBookBtn ? styles.recentActiveText : null,
            ]}>
            {addressBookBtn}
          </Text>
          <Text
            onPress={() => {
              setTabTitle(myAccountBtn);
            }}
            style={[
              styles.recentText,
              tabTitle == myAccountBtn ? styles.recentActiveText : null,
            ]}>
            {myAccountBtn}
          </Text>
        </View>
        <View
          style={{
            height: '65%',
            padding: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>No recent transaction </Text>
        </View>
        <ButtonGreen
          customBtnStyle={{ borderRadius: 30, height: 45 }}
          title={'Next'}
          onPress={() => {
            if (validateEthAddress(enteredAddress)) {
              Actions.currentScene != 'SendEvm' &&
                Actions.SendEvm({
                  coinData: props.coinData,
                  receiveAddress: enteredAddress,
                });
            } else {
              Singleton.getInstance().showError('Enter valid address.');
            }
          }}
        />
      </View>
      <ScanScreen
        onClosePress={() => setVisibleScan(false)}
        isShow={isVisibleScan}
        onSuccessRead={value => {
          setEnteredAdd(value);
          setVisibleScan(false);
        }}
      />
    </Wrap>
  );
}
export { SelectRecipient };
