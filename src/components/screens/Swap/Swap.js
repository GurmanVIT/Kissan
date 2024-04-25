
import React from 'react';
import { View, Text, ScrollView, StyleSheet, TextInput } from 'react-native';
import { Wrap } from '../../common';
import { colors } from '../../../theme';
import Btc from '../../../assets/svg/Btc';
import IconDown from '../../../assets/svg/IconDown';
import LeftRight from '../../../assets/svg/LeftRightIcon';
import RoundedIcon from '../../../assets/svg/RoundedIcon';


const Swap = () => {


    return (
        <Wrap>
            <ScrollView style={styles.container} behavior="padding">
                <View style={{ marginTop: 15 }}>
                    <View>
                        <Text style={{ color: colors.black }}>
                            Swap
                        </Text>
                    </View>
                </View>

                <View style={{
                    backgroundColor: colors.white, marginTop: 10,
                }}>
                    <View style={styles.card}>
                        <View style={{ flexDirection: 'column' }}>
                            <View style={styles.cardBody}>
                                <View style={{ width: 40, height: 40 }}>
                                    <Btc />
                                </View>
                                <View>
                                    <View style={styles.cardBody}>
                                        <Text style={styles.bitcoinText}>Bitcoin</Text>
                                        <View style={styles.bodyIcon}>
                                            <IconDown />
                                        </View>
                                    </View>
                                    <View>
                                        <Text style={styles.btcText}>BTC</Text>
                                    </View>
                                    <View>
                                        <Text style={{ color: colors.grey, fontSize: 12 }}>From</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ alignItems: 'center', marginTop: 5 }}>
                                <Text style={styles.btcText}>USD : 35,831.85</Text>
                            </View>
                            <TextInput
                                style={styles.input}
                                placeholder="Enter Amount"
                                keyboardType="numeric"
                            />
                        </View>

                        <View style={{ alignItems: 'center', justifyContent: 'center', height: 60, width: 60 }}>
                            <LeftRight />
                        </View>

                        <View style={{ flexDirection: 'column', }}>
                            <View style={styles.cardBody}>
                                <View style={{ width: 40, height: 40 }}>
                                    <Btc />
                                </View>
                                <View>
                                    <View style={styles.cardBody}>
                                        <Text style={styles.bitcoinText}>USDT</Text>
                                        <View style={styles.bodyIcon}>
                                            <IconDown />
                                        </View>
                                    </View>
                                    <View>
                                        <Text style={styles.btcText}>TRC 20</Text>
                                    </View>
                                    <View>
                                        <Text style={{ color: colors.grey, fontSize: 12 }}>To</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ alignItems: 'center', marginTop: 5 }}>
                                <Text style={styles.btcText}>USD : 35,831.85</Text>
                            </View>
                            <TextInput
                                style={styles.input}
                                placeholder="Enter Amount"
                                keyboardType="numeric"
                            />
                        </View>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', marginTop: 15, justifyContent: 'space-between', }}>
                    <Text style={{ color: 'gray' }}>View Token Info</Text>
                    <Text style={{ color: colors.black, fontWeight: '600' }}>Bitcoin/USID</Text>
                </View>

                <View style={styles.cardSwap}>
                    <Text style={styles.pancakeStyle}>Pancake Swap</Text>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 4 }}>
                        <Text style={{ color: colors.grey, fontSize: 13 }}>Rate</Text>
                        <Text>1BITCoin =35821USDT</Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 4 }}>
                        <Text style={{ color: colors.grey, fontSize: 13 }}>Fee</Text>
                        <Text>0.3 BitCoins</Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 4 }}>
                        <Text style={{ color: colors.grey, fontSize: 13 }}>Price Impact</Text>
                        <Text>0.01%</Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                        <Text style={{ color: colors.grey, fontSize: 13 }}>Minimum Received </Text>
                        <Text>35831USDT</Text>
                    </View>
                </View>

                <Text style={styles.instantButton}>Instant Swap</Text>

                <Text style={styles.cardHeaderText}>Records</Text>

                <View style={{ borderColor: '#E3E1D9', borderWidth: 1, padding: 10, borderRadius: 10, backgroundColor: colors.white }}>
                    <View style={styles.recordCard}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ width: 30, height: 30, marginRight: 10, }}><RoundedIcon /></View>
                            <View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text>Bitcoin</Text><Text style={styles.coinBtcUsdt}>USD : 35,831.85</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text>USDT</Text><Text style={styles.coinBtcUsdt}>USD : 35,831.85</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ marginTop: 5 }}>
                            <Text style={styles.successButton}>Successfull</Text>
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

export default Swap;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        fontFamily: 'Roboto',
    },
    input: {
        borderWidth: 1,
        borderColor: '#E3E1D9',
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
        borderColor: '#E3E1D9',
        padding: 10,
        justifyContent: 'space-between',
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center'
    },
    cardBody: {
        flexDirection: 'row',
    },
    bitcoinText: {
        fontWeight: '600',
        color: colors.black,
    },
    bodyIcon: {
        width: 15,
        height: 10,
        marginTop: 7,
        marginLeft: 4,
    },
    btcText: {
        fontSize: 11,
        fontWeight: '600',
        marginTop: -3,
    },
    cardBtc: {
        borderWidth: 1,
        borderColor: '#E3E1D9',
        paddingVertical: 2,
        paddingHorizontal: 5,
        borderRadius: 5,
        marginTop: 3
    },
    cardSwap: {
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 10,
        borderColor: '#E3E1D9',
        padding: 10,
        justifyContent: 'space-between',
        flex: 1,
        backgroundColor: colors.white
    },
    pancakeStyle: {
        fontWeight: '600',
        color: colors.black,
        fontSize: 15,
        marginBottom: 8,
    },
    instantButton: {
        fontWeight: '600',
        backgroundColor: colors.green,
        marginVertical: 15,
        padding: 12,
        borderRadius: 24,
        textAlign: 'center',
        color: colors.white
    },
    cardHeaderText: {
        fontWeight: "600",
        color: colors.appPrimary,
        fontSize: 18,
        marginBottom: 10
    },
    recordCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 15,
        borderBottomWidth: 1,
        borderColor: '#E3E1D9',
    },
    successButton: {
        backgroundColor: colors.green,
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