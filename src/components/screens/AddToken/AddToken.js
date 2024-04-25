import {
  View,
  Text,
  ScrollView,
  Clipboard,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ButtonGreen, Header, Inputtext, LoaderView, Wrap} from '../../common';
import styles from './styles';
import {Images} from '../../../theme';
import {ScanScreen} from '../../common/ScanScreen';
import {BNB_RPC_URL} from '../../../Network/Endpoints';
import {useSelector, useDispatch} from 'react-redux';
import {getTokenData} from '../../../helpers/utils';
import Singleton from '../../../helpers/Singleton';
import {addCustomToken} from '../../../Redux/actions';
import {Actions} from 'react-native-router-flux';

const AddToken = props => {
  const dispatch = useDispatch();
  const {evmAddress, walletData, walletId} = useSelector(
    state => state.currentWallet,
  );

  const [contractAddress, setContractAddress] = useState('');
  const [name, setName] = useState('');
  const [symbol, setSymbol] = useState('');
  const [decimals, setDecimals] = useState('');
  const [isVisibleScan, setVisibleScan] = useState(null);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    return () => {};
  }, []);

  const getData = async value => {
    setLoader(true);
    console.log('value=====', value);
    let data = await getTokenData(BNB_RPC_URL, value);
    console.log('jd=====', data);
    if (data != 'invalid') {
      setContractAddress(value);
      setName(data.name);
      setSymbol(data.symbol);
      setDecimals(data.decimals);
      setLoader(false);
    } else {
      setContractAddress('');
      setName('');
      setSymbol('');
      setDecimals('');
      setLoader(false);
      Singleton.getInstance().showError('Please enter valid contract address.');
    }
  };

  const nextAction = () => {
    if (contractAddress != '' && decimals != '') {
      setLoader(true);
      dispatch(
        addCustomToken({
          contractAddress: contractAddress,
          addressId: walletId,
          coinSymbol: symbol,
          decimals: decimals,
          network: 'BNB',
        }),
      )
        .then(res => {
          Actions.reset('Main');
          Singleton.getInstance().showMsg('Unable to add custom token.');
        })
        .catch(err => {
          Singleton.getInstance().showError('Unable to add custom token.');
        });
    } else {
      Singleton.getInstance().showError('Please enter contract address.');
    }
  };

  return (
    <Wrap>
      <Header title={'Add Custom Token'} />
      <ScrollView keyboardShouldPersistTaps={'always'}>
        <View style={styles.mainQRView}>
          <View style={styles.qrBox}>
            <Text style={styles.headingH1}>Add Custom Token</Text>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
              }}>
              <Text style={styles.headingH2}>Select Network</Text>
              <Text style={styles.headingH2}>BNB Smart Chain</Text>
            </View>
            <Inputtext
              style={{width: '100%', marginTop: 14}}
              label={'Contract Address'}
              value={contractAddress}
              rightStyle={{
                position: 'absolute',
                flexDirection: 'row',
                alignItems: 'center',
                bottom: 35,
                top: 35,
                right: 10,
              }}
              onChangeNumber={value => {
                setContractAddress(value);
              }}
              onBlur={e => getData(e.nativeEvent.text)}
              inputStyle={{paddingRight: 100}}>
              <ButtonGreen
                onPress={() => {
                  Clipboard.getString().then(res => {
                    console.log('dsk--', res);
                    setContractAddress(res);
                    setTimeout(() => {
                      getData(res);
                    }, 500);
                  });
                }}
                textstyle={{fontSize: 10}}
                customBtnStyle={{borderRadius: 30, height: 29}}
                title={'Paste'}
              />
              <TouchableOpacity
                style={{alignItems: 'center', marginLeft: 10}}
                onPress={() => {
                  global.isCamera = true;
                  setVisibleScan(true);
                }}>
                <Image source={Images.ic_scan_button} />
              </TouchableOpacity>
            </Inputtext>

            <Inputtext
              editable={false}
              style={{width: '100%'}}
              label={'Name'}
              placeholder={'Name'}
              value={name}
              maxLength={25}
              onChangeNumber={text => {
                setName(text);
              }}
            />

            <Inputtext
              editable={false}
              label={'Symbol'}
              style={{width: '100%'}}
              placeholder={'Symbol'}
              value={symbol}
              maxLength={25}
              onChangeNumber={text => {
                setSymbol(text);
              }}
            />

            <Inputtext
              editable={false}
              style={{width: '100%'}}
              label={'Decimals'}
              placeholder={'Decimals'}
              value={decimals}
              maxLength={25}
              onChangeNumber={text => {
                setDecimals(text);
              }}
            />

            <ButtonGreen
              title="Done"
              customBtnStyle={{marginTop: 22}}
              onPress={() => nextAction()}
            />

            <Text
              style={[
                styles.headingH2,
                {marginTop: 78, color: '#C98708', marginBottom: 30},
              ]}>
              Anyone can create a token including fake versions of existing
              tokens. Learn about scams and security risk.
            </Text>
          </View>
        </View>
      </ScrollView>
      <ScanScreen
        onClosePress={() => setVisibleScan(false)}
        isShow={isVisibleScan}
        onSuccessRead={value => {
          setContractAddress(value);
          getData(value);
          setVisibleScan(false);
        }}
      />
      <LoaderView isLoading={loader} />
    </Wrap>
  );
};

export {AddToken};
