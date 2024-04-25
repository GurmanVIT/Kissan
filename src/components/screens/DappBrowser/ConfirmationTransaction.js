import {View, Text, Image, Modal, TouchableOpacity} from 'react-native';
import React from 'react';
import {ButtonPrimary, LoaderView} from '../../common';
import {Images} from '../../../theme';
import Singleton from '../../../helpers/Singleton';
import {hex2dec} from '../../../helpers/utils';
import styles from './styles';
export default function ConfirmationTransaction({
  isVisible,
  transactionData,
  onClose,
  loader,
  selectedCoin,
  onConfirm,
}) {
  if (transactionData == null) {
    return null;
  }

  const {signingData, fee} = transactionData;
  const calculatedFee = fee;
  return (
    <View>
      <Modal visible={isVisible} transparent={true} animationType="fade">
        {signingData != '' && (
          <>
            <View style={[styles.modalView]}>
              <View style={styles.modalinner}>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 30,
                  }}>
                  <Text style={styles.titleSign}>Confirm Transaction</Text>
                  <TouchableOpacity
                    style={{
                      position: 'absolute',
                      right: 0,
                      top: 0,
                      height: 20,
                      width: 20,
                      alignItems: 'flex-end',
                    }}
                    onPress={onClose}>
                    <Image
                      style={{width: 20, height: 20}}
                      source={Images.close}
                    />
                  </TouchableOpacity>
                </View>

                <View style={styles.vwSignTransaction}>
                  <Text style={styles.textLbl}>To</Text>
                  <Text style={styles.txtValue}>{signingData.object.to}</Text>
                </View>

                <View style={styles.vwSignTransaction}>
                  <Text style={styles.textLbl}>From</Text>
                  <Text style={styles.txtValue}>{signingData.object.from}</Text>
                </View>

                <View style={styles.vwSignTransaction}>
                  <Text style={styles.textLbl}>Gas Fee</Text>
                  <Text style={styles.txtValue}>
                    {calculatedFee} {selectedCoin.coin_symbol.toUpperCase()}
                  </Text>
                </View>

                <View style={styles.vwSignTransaction}>
                  <Text style={styles.textLbl}>Total</Text>
                  <Text style={styles.txtValue}>
                    {Singleton.getInstance().toFixed(
                      parseFloat(hex2dec(signingData.object.value) / 10 ** 18) +
                        parseFloat(calculatedFee),
                      6,
                    )}{' '}
                    {selectedCoin.coin_symbol.toUpperCase()}
                  </Text>
                </View>

                <ButtonPrimary
                  title="Submit"
                  style={{
                    width: '80%',
                    alignSelf: 'center',
                    marginTop: 30,
                  }}
                  onPress={onConfirm}
                />

                <TouchableOpacity onPress={onClose}>
                  <Text style={styles.modalTitle}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </>
        )}
        <LoaderView isLoading={loader} />
      </Modal>
    </View>
  );
}
