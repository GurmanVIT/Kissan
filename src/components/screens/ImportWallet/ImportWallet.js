import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Image, TextInput} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {Wrap, Inputtext, ButtonPrimary, LoaderView, Header} from '../../common';
import styles from './ImportWalletStyle';
import * as Constants from '../../../helpers/Constants';
import {colors} from '../../../theme';
import {useSelector} from 'react-redux';
import {walletFormUpdate, checkWalletName} from '../../../Redux/actions';
import Singleton from '../../../helpers/Singleton';

const ImportWallet = props => {
  // const {walletName} = useSelector((state) => state.walletReducer);
  const [textLength, settextLength] = useState(0);
  const [loading, setLoading] = useState(false);
  const [walletName, setwalletName] = useState('');

  useEffect(() => {
    walletFormUpdate({prop: 'walletName', value: ''});
    setLoading(false);
  }, []);

  const nextAction = () => {
    if (walletName.trim().length == 0) {
      Singleton.getInstance().showError('Please enter valid wallet name.');
      return;
    }
    if (walletName.trim().length < 3 && walletName.length != 0) {
      Singleton.getInstance().showError('Please enter valid wallet name.');
      return;
    } else {
      setLoading(true);

      if (props?.isMultiWallet) {
        if (props?.isImport) {
          Actions.ImportWalletUseMnemonics({
            isMultiWallet: true,
            nameOfWallet: walletName,
          });
        } else {
          Actions.WalletBackup({
            isMultiWallet: true,
            nameOfWallet: walletName,
          });
        }
      } else {
        Actions.CreatePin({walletname: walletName, isFrom: 'import'});
      }
    }
  };

  return (
    <Wrap>
      {props?.isMultiWallet ? <Header title={'Wallet Name'} /> : null}
      <View style={{marginTop: 70, alignItems: 'center'}}>
        <Text style={[styles.header, {marginBottom: 30}]}>{'Wallet Name'}</Text>

        <Text
          style={[styles.subheader, {marginBottom: 60, marginHorizontal: 36}]}>
          {
            'PYou can simply identify multiple wallets and label your own wallet.'
          }
        </Text>
      </View>
      <View style={{paddingHorizontal: 20}}>
        <Inputtext
          label={'Enter wallet name'}
          placeholder={'Enter Name'}
          bottomInstruction={'Max Limit:' + ' ' + textLength + '/25'}
          value={walletName}
          maxLength={25}
          onChangeNumber={text => {
            setwalletName(text);
          }}
        />
        <ButtonPrimary
          title="Continue"
          customBtnStyle={{marginTop: 100}}
          onPress={() => nextAction()}
        />
      </View>

      {loading && <LoaderView />}
    </Wrap>
  );
};

export default ImportWallet;
