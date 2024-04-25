import { ScrollView, StyleSheet, Text, TextInput, View, } from 'react-native';
import React from 'react';
import { Header, Wrap } from '../../common';
import Search from '../../../assets/svg/Search';
import { colors } from '../../../theme';
import Btc from '../../../assets/svg/Btc';


const SelectNetwork = () => {

    return (
        <Wrap>
            <Header title={'Select Network'} />
            <ScrollView style={{ paddingHorizontal: 16 }}>
                <View style={styles.inputStyleCrypto}>
                    <TextInput
                        style={{
                            flex: 1, height: 40, color: "#000"
                        }}
                        placeholder="Search - Select Asset"
                        placeholderTextColor="#000"
                    />
                    <View style={{ height: 18, width: 18 }}>
                        <Search />
                    </View>
                </View>

                <View style={{ marginTop: 15, }}>
                    <View style={styles.cardBtc}>
                        <View style={{ width: 35, height: 35 }}>
                            <Btc />
                        </View>
                        <Text style={{ marginTop: -3, color: colors.black, fontWeight: '600', marginLeft: 7 }}>BTC</Text>
                    </View>

                    <View style={styles.cardBtc}>
                        <View style={{ width: 35, height: 35 }}>
                            <Btc />
                        </View>
                        <Text style={{ marginTop: -3, color: colors.black, fontWeight: '600', marginLeft: 7 }}>BTC</Text>
                    </View>

                    <View style={styles.cardBtc}>
                        <View style={{ width: 35, height: 35 }}>
                            <Btc />
                        </View>
                        <Text style={{ marginTop: -3, color: colors.black, fontWeight: '600', marginLeft: 7 }}>BTC</Text>
                    </View>
                </View>

            </ScrollView>
        </Wrap >
    );
};

export default SelectNetwork;

const styles = StyleSheet.create({
    inputStyleCrypto: {
        height: 40,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: colors.grey,
        paddingHorizontal: 10,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    cardBtc: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#E8E8E8',
        borderBottomWidth: 1,
        paddingHorizontal: 5,
        paddingVertical: 12,
    },
});
