import { TouchableOpacity, ScrollView, StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react';
import { Wrap } from '../../common';
import Delete from '../../../assets/svg/Delete';
import Back from '../../../assets/svg/Back';
import { colors } from '../../../theme';
import NextIcon from '../../../assets/svg/NextIcon';



const Wallet = () => {

    return (
        <Wrap>
            <ScrollView style={styles.container} behavior="padding">
                <View style={{ marginTop: 15, }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color: "#000" }}>
                            Wallet
                        </Text>
                        <View style={{ flexDirection: 'row', }}>
                            <View style={{ width: 20, height: 20 }}>
                                <Delete />
                            </View>
                            <View style={{ width: 20, height: 20, marginLeft: 10 }}>
                                <Back />
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ marginTop: 15, marginBottom: 20 }}>
                    <Text style={{ color: colors.black, marginBottom: 4, marginLeft: 2 }}>Name</Text>
                    <View style={styles.inputStyleCrypto}>
                        <TextInput
                            style={{
                                flex: 1, height: 40, color: "#000", fontSize: 13,
                            }}
                            placeholder="Wallet Name"
                            placeholderTextColor={{ color: colors.grey }}
                        />
                    </View>

                    <TouchableOpacity
                        style={{
                            height: 46,
                            flexDirection: 'row',
                            marginTop: 8,
                            alignItems: 'center',
                            paddingHorizontal: 13,
                            paddingVertical: 12,
                            borderColor: colors.grey,
                            backgroundColor: colors.white,
                            borderWidth: 1,
                            borderRadius: 10,
                            marginTop: 30
                        }}>
                        <Text style={{ flex: 1, color: colors.black }}>Show Secret Phrase</Text>
                        <View style={{ width: 20, height: 20, marginTop: 5 }}>
                            <NextIcon />
                        </View>
                    </TouchableOpacity>

                    <Text style={{ marginTop: 15, textAlign: 'justify' }}>If you lose access to this device,your funds will lost, unless you back up!</Text>

                </View>
            </ScrollView >
        </Wrap >
    );
};

export default Wallet;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        fontFamily: 'Roboto',
    },
    inputStyleCrypto: {
        height: 40,
        borderWidth: 1,
        borderRadius: 7,
        borderColor: colors.grey,
        paddingHorizontal: 7,
    },
})