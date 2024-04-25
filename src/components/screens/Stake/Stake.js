
import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Wrap } from '../../common';
import { colors } from '../../../theme';
import Btc from '../../../assets/svg/Btc';
import Copy from '../../../assets/svg/Copy';
import StakeImage from '../../../assets/svg/StakeImage';


const Stake = () => {

    return (
        <Wrap>
            <ScrollView style={styles.container} behavior="padding">
                <View style={{ marginTop: 15 }}>
                    <View>
                        <Text style={{ color: colors.black }}>
                            Stake
                        </Text>
                    </View>
                </View>

                <View>
                    <View style={styles.card}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ width: 40, height: 40 }}>
                                    <Btc />
                                </View>
                                <Text style={styles.bitcoinText}>Bitcoin</Text>
                            </View>
                            <Text>0.00</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.cardAccount}>
                    <Text style={styles.accountStyle}>Account</Text>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 4, }}>
                        <Text style={{ color: colors.grey, fontSize: 13 }}>AWSDXFCVBIUHEWAESXCGVHBN</Text>
                        <View style={{ width: 20, height: 20 }} >
                            <Copy />
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 4 }}>
                        <Text style={{ color: colors.grey, fontSize: 13 }}>Available</Text>
                        <Text>USD 0.00</Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 4 }}>
                        <Text style={{ color: colors.grey, fontSize: 13 }}>Stake</Text>
                        <Text>0.0</Text>
                    </View>
                    <Text style={styles.instantButton}>Stake</Text>
                </View>

                <Text style={{ color: colors.grey, fontWeight: '300', marginTop: 10 }}>You don’t need to clain the earnings. Deposits are automatically earning in BLT.</Text>
                <Text style={{ marginTop: 10, color: colors.black, fontWeight: '600' }}>Approximately APY 5% Stacked returned</Text>
                <Text style={styles.cardHeaderText}>Records</Text>

                <View style={{ borderColor: '#E3E1D9', borderWidth: 1, padding: 10, borderRadius: 10 }}>
                    <View style={styles.recordCard}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ width: 30, height: 30, marginRight: 10, }}><StakeImage /></View>
                            <View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text>Bitcoin</Text><Text style={styles.coinBtcUsdt}>USD : 35,831.85</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text>APY :</Text><Text style={styles.coinBtcUsdt}>35,831.85</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ marginTop: 5 }}>
                            <Text style={styles.stakeButton}>Unstake</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: "space-between", }}>
                        <Text style={{ color: colors.grey, fontSize: 13 }}>24-03-2022  15:07</Text>
                        <Text style={{ color: colors.grey, fontSize: 13 }}>Exchange Rate : 2.25341551</Text>
                    </View>

                </View>

            </ScrollView>
        </Wrap >
    );
};

export default Stake;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        fontFamily: 'Roboto',
    },
    input: {
        borderWidth: 1,
        borderColor: colors.grey,
        paddingVertical: 5,
        paddingHorizontal: 6,
        borderRadius: 5,
        marginTop: 3,
        height: 25,
        fontSize: 12,
        maxWidth: 110
    },
    headerStyle: {
        textAlign: 'justify',
        marginTop: 15,
        color: colors.black,
        fontSize: 14,
    },
    card: {
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 10,
        borderColor: '#E3E1D9',
        padding: 10,
        backgroundColor: colors.white
    },

    bitcoinText: {
        fontWeight: '600',
        color: colors.black,
        marginTop: 7,
    },
    cardAccount: {
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 10,
        borderColor: '#E3E1D9',
        padding: 10,
        justifyContent: 'space-between',
        flex: 1,
        backgroundColor: colors.white,
    },
    accountStyle: {
        fontWeight: '600',
        color: colors.black,
        fontSize: 15,
        marginBottom: 8,
    },
    instantButton: {
        fontWeight: '600',
        backgroundColor: colors.green,
        marginTop: 10,
        marginBottom: 5,
        padding: 10,
        borderRadius: 24,
        textAlign: 'center',
        color: colors.white
    },
    cardHeaderText: {
        fontWeight: "600",
        color: colors.appPrimary,
        fontSize: 18,
        marginTop: 12,
        marginBottom: 10
    },
    recordCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 15,
        borderBottomWidth: 1,
        borderColor: '#E3E1D9',
    },
    stakeButton: {
        backgroundColor: colors.appPrimary,
        paddingHorizontal: 15,
        paddingTop: 4,
        paddingBottom: 6,
        borderRadius: 20,
        color: colors.white,
        fontSize: 13
    },
    coinBtcUsdt: {
        fontSize: 12,
        color: colors.grey,
        marginLeft: 10,
        marginTop: 3
    },
})