import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { Header, Wrap } from '../../common';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Images, colors } from '../../../theme';
import SwitchSelector from 'react-native-switch-selector';

const SecurityAndPrivacy = () => {
  const [pin, setPin] = useState(false);
  const options = [{ value: false }, { value: true }];

  const onSwitchPress = async value => {
    await Singleton.getInstance().saveData(
      IS_MESSAGE_PIN,
      value ? 'enable' : 'disable',
    );
    console.log('value---', value);
  };
  return (
    <Wrap>
      <Header title={'Security & Privacy'} />
      <ScrollView style={{ paddingHorizontal: 16 }}>
        <Text style={{ color: colors.black }}>Password</Text>
        <Text style={{ textAlign: 'justify' }}>
          Choose a strong password to unlock Kissan Wallet App on your device.
          If you lose this password , you will need your Secret Recovery Phrase
          / Mnemonics to re-import your wallet .
        </Text>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            marginTop: 8,
            alignItems: 'center',
            paddingHorizontal: 13,
            paddingVertical: 12,
            borderColor: '#F4F4F4',
            backgroundColor: colors.white,
            borderWidth: 1,
            borderRadius: 10,
          }}>
          <Text style={{ flex: 1, color: colors.black }}>Change Pin</Text>
          <Image source={Images.back} />
        </TouchableOpacity>
        <Text style={styles.headerStyle}>
          Show & Backup Private Key and Mnemonics for Account 1
        </Text>
        <Text style={styles.textStyle}>
          This is the  & Mnemonics for the current {'\n'}
          Selected Account : Account 1 . {'\n'} Never Disclose this key and
          Mnemonics. {'\n'}
          Anyone with your Private Key & Mnemonics can fully control your
          account , including transferring away any of your funds available in
          your account .
        </Text>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            marginTop: 8,
            alignItems: 'center',
            paddingHorizontal: 13,
            paddingVertical: 12,
            borderColor: '#F4F4F4',
            backgroundColor: colors.white,
            borderWidth: 1,
            borderRadius: 10,
          }}>
          <Text style={{ flex: 1, color: colors.black }}>Show Privacy Key</Text>
          <Image source={Images.back} />
        </TouchableOpacity>
        <Text style={styles.blurText}>Privacy</Text>
        <Text style={styles.headerStyle}>Clear Privacy data</Text>
        <Text style={styles.textStyle}>
          Clear privacy data so all websites must request access to view account
          information again .
        </Text>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            marginTop: 8,
            alignItems: 'center',
            paddingHorizontal: 13,
            paddingVertical: 12,
            borderColor: '#F4F4F4',
            backgroundColor: colors.white,
            borderWidth: 1,
            borderRadius: 10,
          }}>
          <Text style={{ flex: 1, color: colors.black }}>Clear Privacy Data</Text>
          <Image source={Images.back} />
        </TouchableOpacity>
        <Text style={styles.headerStyle}> Clear browser history</Text>
        <Text style={styles.textStyle}>
          Choose this option to clear your entire browsing history.
        </Text>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            marginTop: 8,
            alignItems: 'center',
            paddingHorizontal: 13,
            paddingVertical: 12,
            borderColor: '#F4F4F4',
            backgroundColor: colors.white,
            borderWidth: 1,
            borderRadius: 10,
          }}>
          <Text style={{ flex: 1, color: colors.black }}>
            Clear browser history
          </Text>
          <Image source={Images.back} />
        </TouchableOpacity>
        <Text style={styles.headerStyle}> Clear browser cookies</Text>
        <Text style={styles.textStyle}>
          Choose this option to clear your browser’s cookies .
        </Text>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            marginTop: 8,
            alignItems: 'center',
            paddingHorizontal: 13,
            paddingVertical: 12,
            borderColor: '#F4F4F4',
            backgroundColor: colors.white,
            borderWidth: 1,
            borderRadius: 10,
          }}>
          <Text style={{ flex: 1, color: colors.black }}>
            Clear browser cookies{' '}
          </Text>
          <Image source={Images.back} />
        </TouchableOpacity>

        <View
          style={{
            flexDirection: 'row',
            marginTop: 8,
            alignItems: 'center',
          }}>
          <Text
            style={{
              flex: 1,
              marginTop: 8,
              fontWeight: '600',
              color: colors.black,
            }}>
            Privacy Mode
          </Text>
          <View
            style={{
              height: 30,
              width: 30,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <SwitchSelector
              backgroundColor={pin ? colors.green : colors.red}
              width={60}
              height={20}
              buttonColor={pin ? colors.white : colors.white}
              options={options}
              initial={0}
              value={pin}
              onPress={value => onSwitchPress(value)}
              hasPadding
            />
          </View>
        </View>
        <Text
          style={{ marginRight: 25, marginLeft: 4, fontSize: 13, marginTop: 6 }}>
          Websites must request access to view your account information .
        </Text>

        <View
          style={{
            flexDirection: 'row',
            marginTop: 8,
            alignItems: 'center',
          }}>
          <Text
            style={{
              flex: 1,
              marginTop: 8,
              fontWeight: '600',
              color: colors.black,
            }}>
            Enable OpenSea API
          </Text>
          <View
            style={{
              height: 30,
              width: 30,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <SwitchSelector
              backgroundColor={pin ? colors.green : colors.red}
              width={60}
              height={20}
              buttonColor={pin ? colors.white : colors.white}
              options={options}
              initial={0}
              value={pin}
              onPress={value => onSwitchPress(value)}
              hasPadding
            />
          </View>
        </View>
        <Text
          style={{
            marginBottom: 15,
            marginLeft: 4,
            fontSize: 13,
            textAlign: 'justify',
          }}>
          Displaying NFT media & data may expose your IP address to centralized
          servers .Use Opensea’s API to Fetch NFT data .NFT auto-detection
          relies on Opensea’s API ,and will not be available when this is turned
          off .We Recommend you to keep it on .{' '}
        </Text>

        <View
          style={{
            flexDirection: 'row',
            marginTop: 8,
            alignItems: 'center',
          }}>
          <Text
            style={{
              flex: 1,
              marginTop: 8,
              fontWeight: '600',
              color: colors.black,
            }}>
            Auto detect NFTs
          </Text>
          <View
            style={{
              height: 30,
              width: 30,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <SwitchSelector
              backgroundColor={pin ? colors.green : colors.red}
              width={60}
              height={20}
              buttonColor={pin ? colors.white : colors.white}
              options={options}
              initial={0}
              value={pin}
              onPress={value => onSwitchPress(value)}
              hasPadding
            />
          </View>
        </View>
        <Text
          style={{
            marginBottom: 15,
            marginLeft: 4,
            fontSize: 13,
            textAlign: 'justify',
          }}>
          Displaying NFT media & data may expose your IP address to centralized
          servers . Third Party APIs ( like OpenSea ) are used to detect NFTs in
          your Wallet .This Exposes your Account Address with those services
          .Leave this disabled if you don’t want the app to pull data from those
          services .
        </Text>
      </ScrollView>
    </Wrap>
  );
};

export default SecurityAndPrivacy;

const styles = StyleSheet.create({
  headerStyle: {
    marginTop: 8,
    fontWeight: '600',
    color: colors.black,
  },
  blurText: {
    marginTop: 8,
    fontWeight: '600',
    color: colors.blue,
    fontSize: 16,
  },
  textStyle: {
    textAlign: 'justify',
    marginTop: 8,
    marginLeft: 4,
    fontSize: 13,
  },
});
