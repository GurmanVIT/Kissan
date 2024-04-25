/* eslint-disable handle-callback-err */
import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './VerifyMneumonicsStyle';
import {ButtonPrimary, LoaderView, Wrap} from '../../common';
import {
  generateAddressFromMnemonics,
  generateMnemonics,
  generateAddressFromMnemonics1,
  validateMnemonics,
} from '../../../helpers/utils';
import {Images, colors} from '../../../theme';
import {Actions} from 'react-native-router-flux';
import {useDispatch, useSelector} from 'react-redux';
import Singleton from '../../../helpers/Singleton';
import {USER_DATA} from '../../../helpers/Constants';
import {createWalletAction} from '../../../Redux/actions';
import * as Constants from '../../../helpers/Constants';

const VerifyMneumonics = props => {
  const dispatch = useDispatch();
  const [shuffledArray, setShuffledArray] = useState([]);
  const [tappedMnemonics, setTappedMnemonics] = useState([]);
  const {walletName, appPin} = useSelector(state => state.walletReducer);
  const [verificationSuccess, setVerificationSuccess] = useState(false);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    let mnemonics = [...props.phaseArr];
    let arr = shuffle(mnemonics);
    setShuffledArray(arr);
    console.log('tappedMnemonics', tappedMnemonics.join(' '));
    console.log('props.phaseArr', props.phaseArr.join(' '));
  }, []);
  console.log('=========', props?.nameOfWallet);

  const shuffle = array => {
    let currentIndex = array.length,
      randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  };

  const verifyMnemonics = () => {
    console.log('tappedMnemonics====', tappedMnemonics);

    const sortedTappedMnemonics = tappedMnemonics; //.sort((a, b) => a - b);
    const selectedMnemonics = sortedTappedMnemonics.map(
      index => shuffledArray[index],
    );

    console.log('tappedMnemonics====', tappedMnemonics);
    console.log('selectedMnemonics====', selectedMnemonics);
    console.log('phaseArr====', props.phaseArr);
    // return;
    const isMatching =
      JSON.stringify(selectedMnemonics) === JSON.stringify(props.phaseArr);
    console.log('tappedMnemonicsArr' + selectedMnemonics);
    console.log('originalMnemonicsArr' + props.phaseArr);
    console.log(isMatching);
    if (isMatching == true) {
      setVerificationSuccess(isMatching);
      Singleton.getInstance().showMsg(`Mnemonics Verified successfully..`);
      createWallet();
    } else {
      setVerificationSuccess(isMatching);
      Singleton.getInstance().showError(
        `Mnemonics doesn't match with original. Please Verify again..`,
      );
    }
  };

  const createWallet = () => {
    try {
      console.log('props?.nameOfWallet====', props?.nameOfWallet);
      setLoading(true);
      let nameOfWallet = props?.nameOfWallet || walletName;
      console.log('nameOfWallet====', nameOfWallet);

      generateAddressFromMnemonics(props.phaseArr.join(' ')).then(res => {
        dispatch(
          createWalletAction({
            name: nameOfWallet,
            coin: 'BNB',
            network: 'BNB',
            address: res.address,
          }),
        )
          .then(async response => {
            // let data = {
            //   appPin: appPin,
            //   multiWallet: [
            //     {
            //       mnemonics: props.phaseArr.join(' '),
            //       walletName: walletName,
            //       walletData: res.address,
            //       addressId: response?.addressId,
            //     },
            //   ],
            // };

            // Singleton.getInstance().saveData(
            //   Constants.USER_DATA,
            //   JSON.stringify(data),
            // );
            // setLoading(false);

            // Actions.reset('Main');

            let data = null;
            let existingWallet = await Singleton.getInstance().getData(
              Constants.USER_DATA,
            );
            if (existingWallet == null) {
              data = {
                appPin: appPin,
                multiWallet: [
                  {
                    mnemonics: props.phaseArr.join(' '),
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
                mnemonics: props.phaseArr.join(' '),
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
              .then(ress => {
                setTimeout(() => {
                  setLoading(false);
                  Actions.reset('Main');
                }, 1000);
              });
          })
          .catch(err => {
            setLoading(false);
          });
      });
    } catch (error) {
      setLoading(false);

      console.log('error -----', error);
    }
  };

  const toggleMnemonicSelection = index => {
    if (tappedMnemonics.includes(index)) {
      setTappedMnemonics(prevState => prevState.filter(item => item !== index));
    } else {
      setTappedMnemonics(prevState => [...prevState, index]);
    }
  };

  return (
    <Wrap>
      <View style={{marginTop: 70, alignItems: 'center'}}>
        <Text style={[styles.header, {marginBottom: 30}]}>
          {'Your Recovery Phase'}
        </Text>

        <Text
          style={[styles.subheader, {marginBottom: 60, marginHorizontal: 36}]}>
          {'Tap the words to put them next to each other in the correct order.'}
        </Text>
      </View>
      <View
        style={{
          marginHorizontal: 15,
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}>
        {shuffledArray.map((res, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={{
                borderRadius: 25,
                marginHorizontal: 10,
                marginVertical: 4,
                borderColor: tappedMnemonics.includes(index)
                  ? colors.green
                  : colors.grey,
                borderWidth: 1,
                paddingHorizontal: 15,
                paddingVertical: 8,
                backgroundColor: 'transparent',
              }}
              onPress={() => toggleMnemonicSelection(index)}>
              <Text>
                {tappedMnemonics.includes(index)
                  ? `${tappedMnemonics.indexOf(index) + 1}. ${res}`
                  : res}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      {/* {!verificationSuccess && (
        <TouchableOpacity
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 20,
          }}
          onPress={() => verifyMnemonics()}>
          <Text style={[styles.green_text]}>{'Click to Verify'}</Text>
        </TouchableOpacity>
      )} */}
      {verificationSuccess && (
        <Text style={[styles.green_text, {marginTop: 20, textAlign: 'center'}]}>
          {'Verification Successful'}
        </Text>
      )}
      <View style={{marginTop: 138, marginHorizontal: 40}}>
        <ButtonPrimary
          title={verificationSuccess == true ? 'Done' : 'Verify'}
          // enable={verificationSuccess == true ? false : true}
          onPress={() => {
            verifyMnemonics();
          }}
        />
      </View>
      <LoaderView isLoading={isLoading} />
    </Wrap>
  );
};

export default VerifyMneumonics;
