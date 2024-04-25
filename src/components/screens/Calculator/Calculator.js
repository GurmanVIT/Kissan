
import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TextInput } from 'react-native';
import { Wrap } from '../../common';
import { colors } from '../../../theme';
import Btc from '../../../assets/svg/Btc';
import IconDown from '../../../assets/svg/IconDown';
import LeftRight from '../../../assets/svg/LeftRightIcon';


const Calculator = () => {

    const [tabColor, setTabColor] = useState(0);

    return (
        <Wrap>
            <ScrollView style={styles.container} behavior="padding">
                <View style={{ marginTop: 15 }}>
                    <View>
                        <Text style={{ color: colors.black }}>
                            C Calculator
                        </Text>
                    </View>
                </View>

                <View style={styles.tabView}>
                    <Text
                        style={(styles.tabButton, {
                            textAlign: 'center',
                            color: tabColor === 0 ? "white" : "gray",
                            backgroundColor: tabColor === 0 ? "green" : "white",
                            paddingVertical: 7,
                            borderRadius: tabColor === 0 ? 5 : 0,
                            paddingHorizontal: 3,
                            fontSize: 12,
                            width: '50%',
                        })}
                        onPress={() => setTabColor(0)}>
                        Crypto to Fiat
                    </Text>

                    <Text
                        style={(styles.tabButton, {
                            textAlign: 'center',
                            color: tabColor === 1 ? "white" : "gray",
                            backgroundColor: tabColor === 1 ? "green" : "white",
                            paddingVertical: 7,
                            borderRadius: tabColor === 1 ? 5 : 0,
                            paddingHorizontal: 3,
                            fontSize: 12,
                            width: '50%',
                        })}
                        onPress={() => setTabColor(1)}>
                        Crypto to Crypto
                    </Text>

                </View>

                {tabColor === 0 ? (
                    <View>

                        <View>
                            <Text style={styles.headerStyle}>Conversion prices are as per Current Market Rate</Text>
                        </View>

                        <View style={styles.card}>
                            <View style={{ flexDirection: 'column', }}>
                                <View style={styles.cardBody}>
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
                                    </View>
                                </View>
                                <View style={{ width: 120 }}>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="1 BTC"
                                        keyboardType="numeric"
                                    />

                                    <TextInput
                                        style={styles.input}
                                        placeholder="1 BTC"
                                        keyboardType="numeric"
                                    />
                                </View>

                            </View>

                            <View style={{ alignItems: 'center', justifyContent: 'center', height: 60, width: 60 }}>
                                <LeftRight />
                            </View>

                            <View style={{ flexDirection: 'column', }}>
                                <View style={styles.cardBody}>
                                    <View >
                                        <View style={styles.cardBody}>
                                            <Text style={styles.bitcoinText}>United State Dollar</Text>
                                            <View style={styles.bodyIcon}>
                                                <IconDown />
                                            </View>
                                        </View>
                                        <View>
                                            <Text style={styles.btcText}>USD</Text>
                                        </View>
                                    </View>
                                </View>
                                <View >
                                    <TextInput
                                        style={styles.input}
                                        placeholder="40.352 USD"
                                        keyboardType="numeric"
                                    />

                                    <TextInput
                                        style={styles.input}
                                        placeholder="40.352 INR"
                                        keyboardType="numeric"
                                    />

                                </View>
                            </View>
                        </View>

                        <View style={styles.cardTwo}>
                            <Text style={{ marginBottom: 10, color: colors.black, fontWeight: '600', fontSize: 15 }}>Exchange</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text style={{ fontSize: 13 }}>Exchange Rate</Text>
                                <Text style={{ fontWeight: '600', color: colors.black, }}>1BTC = 35821USD</Text>
                            </View>
                        </View>

                        <View style={{ marginTop: 15 }}>
                            <Text style={{ fontWeight: '600' }}>Note:-<Text style={{ fontWeight: '400' }}> Above rates does not include Transaction Fees, Conversion or Swapping Charges & Taxes.</Text></Text>
                        </View>
                    </View>
                ) : (
                    ""
                )}


                {tabColor === 1 ? (
                    <View>
                        <View>
                            <Text style={styles.headerStyle}>Conversion prices are as per Current Market Rate</Text>
                        </View>

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
                                <TextInput
                                    style={styles.input}
                                    placeholder="1 BTC"
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
                                <TextInput
                                    style={styles.input}
                                    placeholder="1 USDT"
                                    keyboardType="numeric"
                                />

                            </View>
                        </View>

                        <View style={{ marginTop: 15 }}>
                            <Text style={{ fontWeight: '600' }}>Note:-<Text style={{ fontWeight: '400' }}> Above rates does not include Transaction Fees, Conversion or Swapping Charges & Taxes.</Text></Text>
                        </View>
                    </View>
                ) : (
                    ""
                )}

            </ScrollView>
        </Wrap >
    );
};

export default Calculator;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        fontFamily: 'Roboto',
    },
    tabView: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 6,
        padding: 1,
        width: '100%',
        backgroundColor: colors.white,
        flexDirection: 'row',
        marginTop: 10,
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
        borderColor: colors.grey,
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
    btcText: {
        fontSize: 11,
        fontWeight: '600',
        marginTop: -3,
    },
    cardTwo: {
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 10,
        borderColor: colors.grey,
        padding: 10,
        justifyContent: 'space-between',
    }
})