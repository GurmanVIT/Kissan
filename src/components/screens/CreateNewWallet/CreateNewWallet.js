import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import {ButtonPrimary, Wrap, Inputtext} from '../../common';
import {Images, colors} from '../../../theme';
import styles from './CreateNewWalletStyle';
import {Actions} from 'react-native-router-flux';
import Singleton from '../../../helpers/Singleton';

const CreateNewWallet = () => {
  const [WalletName, setWalletName] = useState('');
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
        <Text style={[styles.header, {marginTop: 10}]}>{`Create Wallet`}</Text>
        <Image source={Images.wallet} />
      </View>
      <View style={{marginTop: 40, marginHorizontal: 20}}>
        <Inputtext
          placeholder="Enter Name"
          value={WalletName}
          label={'Wallet Name'}
          // maxLength={20}
          onChangeNumber={text => {
            setWalletName(text);
          }}
        />
      </View>

      <View
        style={{
          marginHorizontal: 30,
          marginBottom: 80,
          justifyContent: 'flex-end',
          flex: 1,
        }}>
        <ButtonPrimary
          title="Continue"
          onPress={() => {
            if (WalletName.trim().length > 2) {
              Actions.CreatePin({walletname: WalletName, isFrom: 'create'});
            } else {
              Singleton.getInstance().showError('Please enter valid name.');
            }
          }}
        />
      </View>
    </Wrap>
  );
};

export default CreateNewWallet;
