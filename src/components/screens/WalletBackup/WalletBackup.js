import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import { ButtonPrimary, Wrap } from '../../common';
import { Images, colors } from '../../../theme';
import styles from './WalletBackupStyle';
import { Actions } from 'react-native-router-flux';
import { generateMnemonics } from '../../../helpers/utils';

const WalletBackup = props => {
  useEffect(() => {
    // generateMnemonics();
  }, []);
  return (
    <Wrap>
      <View style={{ marginTop: 70, alignItems: 'center' }}>
        <Text style={[styles.header, { marginBottom: 30 }]}>
          {'Wallet Backup'}
        </Text>

        <Text
          style={[
            styles.subheader,
            { marginBottom: 60 },
          ]}>{`In next step you wll see 12 words that allows
        you to recover a Wallet.`}</Text>

        <View>
          <Image
            source={Images.wallet_frame}
            style={{ height: 165, width: 134 }}
          />
          <Image
            source={Images.reload}
            style={{ position: 'absolute', top: 50, left: 40 }}
          />
          <Image
            source={Images.eth}
            style={{ position: 'absolute', bottom: 48, right: 30 }}
          />
          <Image
            source={Images.bitcoin}
            style={{ position: 'absolute', top: 38, right: 25 }}
          />
        </View>
      </View>
      <View
        style={{
          marginHorizontal: 30,
          marginBottom: 80,
          justifyContent: 'flex-end',
          flex: 1,
        }}>
        <View style={{ marginBottom: 30, flexDirection: 'row' }}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: colors.green,
              height: 20,
              width: 20,
              marginRight: 5,
            }}>
            <Image source={Images.tick} />
          </View>

          <Text style={styles.bottom_txt}>
            {
              'I understand that if I lose my recovery words, I will not be able to access my wallet.'
            }
          </Text>
        </View>

        <ButtonPrimary
          title="Continue"
          onPress={async () => {
            let mnemonics = await generateMnemonics();
            Actions.currentScene != 'RecoveryPhase' &&
              Actions.RecoveryPhase({
                mnemonics,
                nameOfWallet: props?.nameOfWallet,
              });
          }}
        />
      </View>
    </Wrap>
  );
};

export { WalletBackup };
