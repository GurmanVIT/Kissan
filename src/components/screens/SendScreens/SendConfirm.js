import {View, Text, Modal, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {Fonts, Images, colors} from '../../../theme';
import styles from './styles';
import {ButtonPrimary, ButtonRoundBlue, Divider} from '../../common';

function SendConfirm({
  confirmationData,
  onClose,
  onConfirm,
  amount,
  fromAddress,
  toAddress,
  coinData,
}) {
  return (
    <Modal
      animationType="fade"
      visible={confirmationData?.isOpen}
      onRequestClose={onClose}
      transparent>
      <View
        style={{
          backgroundColor: 'rgba(52, 52, 52, 0.4)',
          flex: 1,
        }}>
        <TouchableOpacity onPress={onClose} style={{height: '25%'}} />

        <View style={styles.conModalView}>
          <Text style={styles.conTextView}>Confirm Transaction</Text>
          <View style={styles.walletNameView}>
            <Text style={styles.walletNameText}>Wallet Name</Text>
            <Text style={styles.walletNameText}>Name</Text>
          </View>
          <Divider />

          {coinData?.image_path ? (
            <Image
              style={{height: 30, width: 30, marginTop: 15}}
              source={{uri: coinData?.image_path}}
            />
          ) : (
            <View
              style={{
                width: 35,
                height: 35,
                marginTop: 3,
                borderRadius: 20,
                backgroundColor: colors.borderColor,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text>{coinData.symbol.charAt(0)}</Text>
            </View>
          )}
          <Text style={[styles.amountText, {marginTop: 8}]}>Send</Text>
          <Text style={[styles.amountText, {marginTop: 4, fontSize: 11}]}>
            {amount} {coinData?.symbol}
          </Text>
          <Divider />

          <View style={{marginTop: 10, marginHorizontal: 25}}>
            <View style={styles.toFromMainView}>
              <View style={styles.toFromView}>
                <Text style={styles.toFromText}>From</Text>
                <Text numberOfLines={1} style={styles.conAddText}>
                  {fromAddress}
                </Text>
                <Text style={[styles.conAddText, {color: colors.text_blue}]}>
                  Current Account
                </Text>
              </View>
              <Image
                style={{marginHorizontal: 10}}
                source={Images.ic_arrow_right}
              />
              <View style={styles.toFromView}>
                <Text style={styles.toFromText}>To</Text>
                <Text numberOfLines={1} style={styles.conAddText}>
                  {toAddress}
                </Text>
                <Text style={[styles.conAddText, {color: colors.green}]}>
                  Beneficiary Account
                </Text>
              </View>
            </View>
            {coinData?.contract_address != 'coin' ? (
              <View
                style={{
                  // width: '100%',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 16,
                }}>
                <Text style={[styles.conAddText, {marginTop: 0, width: '30%'}]}>
                  Contract Called
                </Text>
                <Text
                  style={[
                    styles.toFromText,
                    {width: '60%', textAlign: 'right'},
                  ]}>
                  {coinData?.contract_address}
                </Text>
              </View>
            ) : null}
            <View
              style={{
                // width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 16,
              }}>
              <Text style={[styles.conAddText, {marginTop: 0, width: '30%'}]}>
                Transaction Fee
              </Text>
              <Text
                style={[styles.toFromText, {width: '60%', textAlign: 'right'}]}>
                {confirmationData?.fees}
              </Text>
            </View>
          </View>
          <ButtonRoundBlue
            onPress={onConfirm}
            customView={{marginTop: 20}}
            title="Continue"
          />
          <TouchableOpacity onPress={onClose} style={{marginTop: 15}}>
            <Text style={styles.amountText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
export {SendConfirm};
