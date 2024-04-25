import {View, Text, TouchableOpacity, Clipboard} from 'react-native';
import React from 'react';
import {ButtonPrimary, Wrap} from '../../common';
import styles from '../WalletBackup/WalletBackupStyle';
import {colors} from '../../../theme';
import {Actions} from 'react-native-router-flux';

const RecoveryPhase = props => {
  let phaseArr = props.mnemonics.split(' ');
  return (
    <Wrap>
      <View style={{marginTop: 70, alignItems: 'center'}}>
        <Text style={[styles.header, {marginBottom: 30}]}>
          {'Your Recovery Phase'}
        </Text>

        <Text
          style={[styles.subheader, {marginBottom: 60, marginHorizontal: 36}]}>
          {
            'Write down or copy these words the right order and save then somewhere safe'
          }
        </Text>
      </View>
      <View
        style={{
          marginHorizontal: 15,
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}>
        {phaseArr.map((res, index) => {
          return (
            <Text
              key={index}
              style={{
                borderRadius: 25,
                marginHorizontal: 10,
                marginVertical: 4,
                borderColor: colors.grey,
                borderWidth: 1,
                paddingHorizontal: 15,
                paddingVertical: 8,
              }}>
              {index + 1}. {res}
            </Text>
          );
        })}
      </View>
      <TouchableOpacity
        style={{alignItems: 'center', justifyContent: 'center', marginTop: 20}}
        onPress={() => {
          Clipboard.setString(props.mnemonics);
        }}>
        <Text style={[styles.green_text]}>{'COPY'}</Text>
      </TouchableOpacity>
      <View style={{marginTop: 105, marginHorizontal: 40}}>
        <ButtonPrimary
          title="Continue"
          onPress={() =>
            Actions.VerifyMneumonics({
              phaseArr,
              nameOfWallet: props?.nameOfWallet,
            })
          }
        />
      </View>
      <View style={{marginTop: 33, alignItems: 'center', marginHorizontal: 33}}>
        <Text style={styles.red_bold}>{`Do not share your secret phase!`}</Text>
        <Text
          style={[
            styles.red_medium,
            {marginTop: 7, textAlign: 'center'},
          ]}>{`If someone has your secret phase. They will have full control of your wallet`}</Text>
      </View>
    </Wrap>
  );
};
export {RecoveryPhase};
