import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  ScrollView,
  Alert,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {Wrap} from '../../common';
import {useDispatch} from 'react-redux';
import styles from './MeStyle';
import {Images, colors} from '../../../theme';
import SwitchSelector from 'react-native-switch-selector';
import Singleton from '../../../helpers/Singleton';
import {
  IS_BIOMETRIC_ENABLED,
  IS_LOGIN_PIN,
  USER_DATA,
} from '../../../helpers/Constants';

const Me = props => {
  const dispatch = useDispatch();
  const [pin, setPin] = useState(false);
  const [biometry, setbiometry] = useState(false);

  const Button = props => {
    const {
      header,
      title,
      icon,
      onSwitchPress,
      btnPress,
      switchBackground,
      switchBtn,
      value,
    } = props;
    const options = [{value: false}, {value: true}];
    const renderSwitch = () => {
      return (
        <SwitchSelector
          backgroundColor={switchBackground}
          height={25}
          width={30}
          hasPadding
          buttonColor={switchBtn}
          options={options}
          initial={value}
          value={value}
          onPress={res => onSwitchPress(res)}
        />
      );
    };

    return (
      <View style={props.mailViewStyle}>
        <TouchableOpacity style={styles.itemContainer} onPress={btnPress}>
          <Image
            style={{
              height: 18,
              width: 18,
              marginRight: 6,
              resizeMode: 'contain',
            }}
            source={icon}
          />

          <View style={[styles.itemContainer1, props.customItemContainer]}>
            {title ? <Text style={[styles.titleText]}>{title}</Text> : null}
            <Text style={[styles.headerText]}>{header}</Text>
            {props.isAppearance && (
              <Text style={[styles.appearanceMode]}>
                {theme == 'default'
                  ? strings.profile.defaultMode
                  : theme == 'light'
                  ? strings.profile.lightMode
                  : strings.profile.darkMode}
              </Text>
            )}
          </View>
          <View style={{alignItems: 'center', flex: 1}}>
            {props?.isSwitch ? renderSwitch() : <Image source={Images.back} />}
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  useEffect(() => {
    getPinDetails();
  }, []);
  const getPinDetails = async () => {
    let isPinEnable = await Singleton.getInstance().getData(IS_LOGIN_PIN);
    let isBioEnable = await Singleton.getInstance().getData(
      IS_BIOMETRIC_ENABLED,
    );
    console.log('isPinEnable==', isPinEnable, isBioEnable);
    if (isPinEnable == 'enable') {
      setPin(true);
    }
    if (isBioEnable == 'enable') {
      setbiometry(true);
    }
  };

  const logoutCall = async () => {
    try {
      console.log('fd------');
      await Singleton.getInstance().deleteOfflineStepsData();
      Singleton.getInstance().showMsg('Account delete successfully.');
      Actions.reset('Onboarding1');
    } catch (error) {
      console.log('error------', error);
    }
  };

  return (
    <>
      <Wrap>
        <Text style={[styles.walletStyle]}>{'My Wallet Settings'}</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{paddingBottom: 30}}>
            <Button
              mailViewStyle={styles.mailViewStyle}
              icon={Images.wallet_manage}
              header={'Wallet Management'}
              customItemContainer={{width: '79%'}}
              btnPress={async () => {
                Actions.currentScene != 'MultiWalletList' &&
                  Actions.MultiWalletList();
              }}
            />

            <Button
              mailViewStyle={styles.mailViewStyle}
              icon={Images.language}
              header={'Change Language'}
              customItemContainer={{width: '79%'}}
              btnPress={async () => {
                Actions.CurrencyUnit();
              }}
            />

            <Button
              mailViewStyle={styles.mailViewStyle}
              icon={Images.Currency_list}
              header={'Currency Unit'}
              customItemContainer={{width: '79%'}}
              btnPress={async () => {}}
            />

            <Button
              mailViewStyle={styles.mailViewStyle}
              icon={Images.message}
              header={'Message Notification'}
              customItemContainer={{width: '79%'}}
              btnPress={async () => {}}
            />

            <Button
              mailViewStyle={styles.mailViewStyle}
              icon={Images.security}
              header={'Security & Privacy'}
              customItemContainer={{width: '79%'}}
              btnPress={async () => {}}
            />

            <Button
              mailViewStyle={styles.mailViewStyle}
              icon={Images.wallet_manage}
              header={'Backup Wallet'}
              customItemContainer={{width: '79%'}}
              btnPress={async () => {}}
            />

            <Button
              mailViewStyle={styles.mailViewStyle}
              icon={Images.wallet_manage}
              header={'Reset Wallet'}
              customItemContainer={{width: '79%'}}
              btnPress={async () => {}}
            />

            <Button
              mailViewStyle={styles.mailViewStyle}
              icon={Images.logout}
              header={'Always ask login pin'}
              isSwitch={true}
              value={pin}
              customItemContainer={{width: '79%'}}
              switchBackground={pin ? colors.red : colors.grey}
              switchBtn={pin ? colors.white : colors.white}
              onSwitchPress={async value => {
                console.log('value---', value);
                await Singleton.getInstance().saveData(
                  IS_LOGIN_PIN,
                  value ? 'enable' : 'disable',
                );

                setPin(value);
              }}
            />

            <Button
              mailViewStyle={styles.mailViewStyle}
              icon={Images.logout}
              header={'Login with Biometry'}
              isSwitch={true}
              value={biometry}
              customItemContainer={{width: '79%'}}
              switchBackground={biometry ? colors.green : colors.grey}
              switchBtn={biometry ? colors.white : colors.white}
              onSwitchPress={async value => {
                console.log('value---', value);
                if (value) {
                  setbiometry(true);
                  await Singleton.getInstance().saveData(
                    IS_BIOMETRIC_ENABLED,
                    'enable',
                  );
                } else {
                  await Singleton.getInstance().saveData(
                    IS_BIOMETRIC_ENABLED,
                    'disable',
                  );

                  setbiometry(false);
                }
              }}
            />

            <Button
              mailViewStyle={styles.mailViewStyle}
              icon={Images.wallet_manage}
              header={'Transaction History'}
              customItemContainer={{width: '79%'}}
              btnPress={async () => {}}
            />

            <Button
              mailViewStyle={styles.mailViewStyle}
              icon={Images.wallet_manage}
              header={'Referral Program'}
              customItemContainer={{width: '79%'}}
              btnPress={async () => {}}
            />

            <Button
              mailViewStyle={styles.mailViewStyle}
              icon={Images.wallet_manage}
              header={'Announcement'}
              customItemContainer={{width: '79%'}}
              btnPress={async () => {}}
            />

            <Button
              mailViewStyle={styles.mailViewStyle}
              icon={Images.wallet_manage}
              header={'About us'}
              customItemContainer={{width: '79%'}}
              btnPress={async () => {}}
            />

            <Button
              mailViewStyle={styles.mailViewStyle}
              icon={Images.wallet_manage}
              header={'Delete Wallet'}
              customItemContainer={{width: '79%'}}
              btnPress={async () => {
                Alert.alert(
                  'Delete Wallet',
                  'Are you sure want to delete wallet.',
                  [
                    {
                      text: 'Cancel',
                      onPress: () => null,
                      style: 'cancel',
                    },
                    {text: 'Ok', onPress: () => logoutCall()},
                  ],
                );
              }}
            />
          </View>
        </ScrollView>
      </Wrap>
    </>
  );
};
export default Me;
