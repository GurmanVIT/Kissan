import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Image, TextInput} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {Wrap, Inputtext, ButtonPrimary, LoaderView, Header} from '../../common';
import styles from './ImportWalletUseMnemonicsStyle';
import * as Constants from '../../../helpers/Constants';
import {colors} from '../../../theme';
import {useDispatch, useSelector} from 'react-redux';
import {createWalletAction, walletFormUpdate} from '../../../Redux/actions';
import {
  generateAddressFromMnemonics,
  validateMnemonics,
} from '../../../helpers/utils';
import Singleton from '../../../helpers/Singleton';
//foster yellow rapid alarm slender endless submit diet weasel upgrade bulk march
const ImportWalletUseMnemonics = props => {
  const dispatch = useDispatch();
  const [mnemonicsValue, setmnemonicsValue] = useState('');
  const [sortedWordList, setsortedWordList] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [impWallData, setimpWallData] = useState([]);
  const {walletName, appPin} = useSelector(state => state.walletReducer);

  //expect supreme hotel filter cycle tiny orange inherit remove occur mimic rabbit

  const createWallet = () => {
    setisLoading(true);
    let nameOfWallet = props?.nameOfWallet || walletName;
    setTimeout(() => {
      validateMnemonics(mnemonicsValue.trim())
        .then(res => {
          generateAddressFromMnemonics(mnemonicsValue.trim())
            .then(res => {
              console.log('WALLET++++++', res);
              dispatch(
                createWalletAction({
                  name: nameOfWallet,
                  coin: 'BNB',
                  network: 'BNB',
                  address: res.address,
                }),
              )
                .then(async response => {
                  console.log('REPONSE000000---', response);
                  let data = null;
                  let existingWallet = await Singleton.getInstance().getData(
                    Constants.USER_DATA,
                  );
                  if (existingWallet == null) {
                    data = {
                      appPin: appPin,
                      multiWallet: [
                        {
                          mnemonics: mnemonicsValue.trim(),
                          walletName: nameOfWallet,
                          walletData: res.address,
                          addressId: response?.addressId,
                          isDefault: true,
                        },
                      ],
                    };
                  } else {
                    let wallets = JSON.parse(existingWallet);
                    let newWalletObj = {
                      mnemonics: mnemonicsValue.trim(),
                      walletName: nameOfWallet,
                      walletData: res.address,
                      addressId: response?.addressId,
                    };
                    data = {
                      appPin: wallets?.appPin,
                      multiWallet: [...wallets?.multiWallet, newWalletObj],
                    };
                  }

                  Singleton.getInstance()
                    .saveData(Constants.USER_DATA, JSON.stringify(data))
                    .then(res => {
                      console.log('MAIN-----', response?.addressId);
                      setTimeout(() => {
                        setisLoading(false);
                        Actions.reset('Main', {addressId: response?.addressId});
                      }, 1000);
                    });
                })
                .catch(err => {
                  setisLoading(false);
                  Singleton.getInstance().showError(
                    'Unable to generate walllet.',
                  );
                });
            })
            .catch(err => {
              setisLoading(false);
              Singleton.getInstance().showError('Unable to generate walllet.');
            });
        })
        .catch(err => {
          setisLoading(false);

          Singleton.getInstance().showError('Please enter valid mnemonics.');
        });
    }, 300);
  };

  console.log('kskd=====', props?.nameOfWallet);

  return (
    <Wrap>
      {props?.isMultiWallet ? <Header title={'Import Wallet'} /> : <View />}
      <View style={{marginTop: 70, alignItems: 'center'}}>
        <Text style={[styles.header, {marginBottom: 30}]}>
          {'Import Wallet'}
        </Text>

        <Text
          style={[styles.subheader, {marginBottom: 60, marginHorizontal: 36}]}>
          {
            'Paste the words to put them next to each other in the correct order.'
          }
        </Text>
      </View>
      <View style={{marginHorizontal: 20}}>
        <TextInput
          style={[
            styles.inputStyle,
            {
              backgroundColor: colors.transparent,
              color: colors.black,
              maxHeight: 200,
            },
          ]}
          placeholder={'Enter Recovery Phrase here'}
          value={mnemonicsValue}
          onChangeText={text => {
            setmnemonicsValue(text);
          }}
          placeholderTextColor={colors.black}
          multiline
          autoCapitalize="none"
          maxLength={100}
        />

        <ButtonPrimary
          title="Continue"
          customBtnStyle={{marginTop: 100}}
          onPress={() => {
            createWallet();
          }}
        />
      </View>
      <LoaderView isLoading={isLoading} />
    </Wrap>
  );
};

export default ImportWalletUseMnemonics;
