import {
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import React, { useState } from 'react';
import { Header, Wrap } from '../../common';
import { colors } from '../../../theme';
import Btc from '../../../assets/svg/Btc';

const WalletManagement = () => {

    const [tabColor, setTabColor] = useState(0);

    return (
        <Wrap>
            <Header title={'Wallet Management'} />
            <ScrollView style={{ paddingHorizontal: 16 }}
            >
                <ScrollView horizontal={true}>
                    <View style={{ flexDirection: 'row', gap: 10, overflow: 'scroll', flex: 1 }} >
                        <View
                            style={{
                                width: 35, height: 42,
                                borderBottomWidth: tabColor === 0 ? 2 : 0,
                                borderColor: tabColor === 0 ? "green" : "transparent",
                            }}
                        >
                            <Btc onPress={() => setTabColor(0)}
                            />
                        </View>

                        <View
                            style={{
                                width: 35, height: 42,
                                borderBottomWidth: tabColor === 1 ? 2 : 0,
                                borderColor: tabColor === 1 ? "green" : "",
                            }}>
                            <Btc onPress={() => setTabColor(1)}
                            />
                        </View>

                        <View
                            style={{
                                width: 35, height: 42,
                                borderBottomWidth: tabColor === 2 ? 2 : 0,
                                borderColor: tabColor === 2 ? "green" : "",
                            }}>
                            <Btc onPress={() => setTabColor(2)}
                            />
                        </View>

                        <View
                            style={{
                                width: 35, height: 42,
                                borderBottomWidth: tabColor === 3 ? 2 : 0,
                                borderColor: tabColor === 3 ? "green" : "",
                            }}>
                            <Btc onPress={() => setTabColor(3)}
                            />
                        </View>

                        <View
                            style={{
                                width: 35, height: 42,
                                borderBottomWidth: tabColor === 4 ? 2 : 0,
                                borderColor: tabColor === 4 ? "green" : "",
                            }}>
                            <Btc onPress={() => setTabColor(4)}
                            />
                        </View>

                        <View
                            style={{
                                width: 35, height: 42,
                                borderBottomWidth: tabColor === 5 ? 2 : 0,
                                borderColor: tabColor === 5 ? "green" : "",
                            }}>
                            <Btc onPress={() => setTabColor(5)}
                            />
                        </View>

                        <View
                            style={{
                                width: 35, height: 42,
                                borderBottomWidth: tabColor === 6 ? 2 : 0,
                                borderColor: tabColor === 6 ? "green" : "",
                            }}>
                            <Btc onPress={() => setTabColor(6)}
                            />
                        </View>

                        <View
                            style={{
                                width: 35, height: 42,
                                borderBottomWidth: tabColor === 7 ? 2 : 0,
                                borderColor: tabColor === 7 ? "green" : "",
                            }}>
                            <Btc onPress={() => setTabColor(7)}
                            />
                        </View>

                        <View
                            style={{
                                width: 35, height: 42,
                                borderBottomWidth: tabColor === 8 ? 2 : 0,
                                borderColor: tabColor === 8 ? "green" : "",
                            }}>
                            <Btc onPress={() => setTabColor(8)}
                            />
                        </View>

                        <View
                            style={{
                                width: 35, height: 42,
                                borderBottomWidth: tabColor === 9 ? 2 : 0,
                                borderColor: tabColor === 9 ? "green" : "",
                            }}>
                            <Btc onPress={() => setTabColor(9)}
                            />
                        </View>
                    </View>
                </ScrollView>

                {tabColor === 0 ? (
                    <View style={{ marginTop: 15 }}>
                        <View style={styles.cardAddress}>
                            <Text style={{ fontWeight: '600', color: colors.black, fontSize: 13 }}>Address 1</Text>
                            <Text style={{ color: colors.grey, fontSize: 12, textAlign: 'justify' }}>Listed below are some of the Referral Marketing Projects .You can Join join them free of cost....</Text>
                        </View>

                        <View style={styles.cardAddress}>
                            <Text style={{ fontWeight: '600', color: colors.black, fontSize: 13 }}>Address 2</Text>
                            <Text style={{ color: colors.grey, fontSize: 12, textAlign: 'justify' }}>Listed below are some of the Referral Marketing Projects .You can Join join them free of cost....</Text>
                        </View>

                        <View style={styles.cardAddress}>
                            <Text style={{ fontWeight: '600', color: colors.black, fontSize: 13 }}>Address 3</Text>
                            <Text style={{ color: colors.grey, fontSize: 12, textAlign: 'justify' }}>Listed below are some of the Referral Marketing Projects .You can Join join them free of cost....</Text>
                        </View>
                    </View>
                ) : (
                    ""
                )}

                {tabColor === 1 ? (
                    <View style={{ marginTop: 15 }}>
                        <View style={styles.cardAddress}>
                            <Text style={{ fontWeight: '600', color: colors.black, fontSize: 13 }}>Address 1</Text>
                            <Text style={{ color: colors.grey, fontSize: 12, textAlign: 'justify' }}>Listed below are some of the Referral Marketing Projects .You can Join join them free of cost....</Text>
                        </View>

                        <View style={styles.cardAddress}>
                            <Text style={{ fontWeight: '600', color: colors.black, fontSize: 13 }}>Address 2</Text>
                            <Text style={{ color: colors.grey, fontSize: 12, textAlign: 'justify' }}>Listed below are some of the Referral Marketing Projects .You can Join join them free of cost....</Text>
                        </View>

                        <View style={styles.cardAddress}>
                            <Text style={{ fontWeight: '600', color: colors.black, fontSize: 13 }}>Address 3</Text>
                            <Text style={{ color: colors.grey, fontSize: 12, textAlign: 'justify' }}>Listed below are some of the Referral Marketing Projects .You can Join join them free of cost....</Text>
                        </View>
                    </View>
                ) : (
                    ""
                )}

                {tabColor === 2 ? (
                    <View style={{ marginTop: 15 }}>
                        <View style={styles.cardAddress}>
                            <Text style={{ fontWeight: '600', color: colors.black, fontSize: 13 }}>Address 1</Text>
                            <Text style={{ color: colors.grey, fontSize: 12, textAlign: 'justify' }}>Listed below are some of the Referral Marketing Projects .You can Join join them free of cost....</Text>
                        </View>

                        <View style={styles.cardAddress}>
                            <Text style={{ fontWeight: '600', color: colors.black, fontSize: 13 }}>Address 2</Text>
                            <Text style={{ color: colors.grey, fontSize: 12, textAlign: 'justify' }}>Listed below are some of the Referral Marketing Projects .You can Join join them free of cost....</Text>
                        </View>

                        <View style={styles.cardAddress}>
                            <Text style={{ fontWeight: '600', color: colors.black, fontSize: 13 }}>Address 3</Text>
                            <Text style={{ color: colors.grey, fontSize: 12, textAlign: 'justify' }}>Listed below are some of the Referral Marketing Projects .You can Join join them free of cost....</Text>
                        </View>
                    </View>
                ) : (
                    ""
                )}

                {tabColor === 3 ? (
                    <View style={{ marginTop: 15 }}>
                        <View style={styles.cardAddress}>
                            <Text style={{ fontWeight: '600', color: colors.black, fontSize: 13 }}>Address 1</Text>
                            <Text style={{ color: colors.grey, fontSize: 12, textAlign: 'justify' }}>Listed below are some of the Referral Marketing Projects .You can Join join them free of cost....</Text>
                        </View>

                        <View style={styles.cardAddress}>
                            <Text style={{ fontWeight: '600', color: colors.black, fontSize: 13 }}>Address 2</Text>
                            <Text style={{ color: colors.grey, fontSize: 12, textAlign: 'justify' }}>Listed below are some of the Referral Marketing Projects .You can Join join them free of cost....</Text>
                        </View>

                        <View style={styles.cardAddress}>
                            <Text style={{ fontWeight: '600', color: colors.black, fontSize: 13 }}>Address 3</Text>
                            <Text style={{ color: colors.grey, fontSize: 12, textAlign: 'justify' }}>Listed below are some of the Referral Marketing Projects .You can Join join them free of cost....</Text>
                        </View>
                    </View>
                ) : (
                    ""
                )}

                {tabColor === 4 ? (
                    <View style={{ marginTop: 15 }}>
                        <View style={styles.cardAddress}>
                            <Text style={{ fontWeight: '600', color: colors.black, fontSize: 13 }}>Address 1</Text>
                            <Text style={{ color: colors.grey, fontSize: 12, textAlign: 'justify' }}>Listed below are some of the Referral Marketing Projects .You can Join join them free of cost....</Text>
                        </View>

                        <View style={styles.cardAddress}>
                            <Text style={{ fontWeight: '600', color: colors.black, fontSize: 13 }}>Address 2</Text>
                            <Text style={{ color: colors.grey, fontSize: 12, textAlign: 'justify' }}>Listed below are some of the Referral Marketing Projects .You can Join join them free of cost....</Text>
                        </View>

                        <View style={styles.cardAddress}>
                            <Text style={{ fontWeight: '600', color: colors.black, fontSize: 13 }}>Address 3</Text>
                            <Text style={{ color: colors.grey, fontSize: 12, textAlign: 'justify' }}>Listed below are some of the Referral Marketing Projects .You can Join join them free of cost....</Text>
                        </View>
                    </View>
                ) : (
                    ""
                )}

                {tabColor === 5 ? (
                    <View style={{ marginTop: 15 }}>
                        <View style={styles.cardAddress}>
                            <Text style={{ fontWeight: '600', color: colors.black, fontSize: 13 }}>Address 1</Text>
                            <Text style={{ color: colors.grey, fontSize: 12, textAlign: 'justify' }}>Listed below are some of the Referral Marketing Projects .You can Join join them free of cost....</Text>
                        </View>

                        <View style={styles.cardAddress}>
                            <Text style={{ fontWeight: '600', color: colors.black, fontSize: 13 }}>Address 2</Text>
                            <Text style={{ color: colors.grey, fontSize: 12, textAlign: 'justify' }}>Listed below are some of the Referral Marketing Projects .You can Join join them free of cost....</Text>
                        </View>

                        <View style={styles.cardAddress}>
                            <Text style={{ fontWeight: '600', color: colors.black, fontSize: 13 }}>Address 3</Text>
                            <Text style={{ color: colors.grey, fontSize: 12, textAlign: 'justify' }}>Listed below are some of the Referral Marketing Projects .You can Join join them free of cost....</Text>
                        </View>
                    </View>
                ) : (
                    ""
                )}

                {tabColor === 6 ? (
                    <View style={{ marginTop: 15 }}>
                        <View style={styles.cardAddress}>
                            <Text style={{ fontWeight: '600', color: colors.black, fontSize: 13 }}>Address 1</Text>
                            <Text style={{ color: colors.grey, fontSize: 12, textAlign: 'justify' }}>Listed below are some of the Referral Marketing Projects .You can Join join them free of cost....</Text>
                        </View>

                        <View style={styles.cardAddress}>
                            <Text style={{ fontWeight: '600', color: colors.black, fontSize: 13 }}>Address 2</Text>
                            <Text style={{ color: colors.grey, fontSize: 12, textAlign: 'justify' }}>Listed below are some of the Referral Marketing Projects .You can Join join them free of cost....</Text>
                        </View>

                        <View style={styles.cardAddress}>
                            <Text style={{ fontWeight: '600', color: colors.black, fontSize: 13 }}>Address 3</Text>
                            <Text style={{ color: colors.grey, fontSize: 12, textAlign: 'justify' }}>Listed below are some of the Referral Marketing Projects .You can Join join them free of cost....</Text>
                        </View>
                    </View>
                ) : (
                    ""
                )}

                {tabColor === 7 ? (
                    <View style={{ marginTop: 15 }}>
                        <View style={styles.cardAddress}>
                            <Text style={{ fontWeight: '600', color: colors.black, fontSize: 13 }}>Address 1</Text>
                            <Text style={{ color: colors.grey, fontSize: 12, textAlign: 'justify' }}>Listed below are some of the Referral Marketing Projects .You can Join join them free of cost....</Text>
                        </View>

                        <View style={styles.cardAddress}>
                            <Text style={{ fontWeight: '600', color: colors.black, fontSize: 13 }}>Address 2</Text>
                            <Text style={{ color: colors.grey, fontSize: 12, textAlign: 'justify' }}>Listed below are some of the Referral Marketing Projects .You can Join join them free of cost....</Text>
                        </View>

                        <View style={styles.cardAddress}>
                            <Text style={{ fontWeight: '600', color: colors.black, fontSize: 13 }}>Address 3</Text>
                            <Text style={{ color: colors.grey, fontSize: 12, textAlign: 'justify' }}>Listed below are some of the Referral Marketing Projects .You can Join join them free of cost....</Text>
                        </View>
                    </View>
                ) : (
                    ""
                )}

                {tabColor === 8 ? (
                    <View style={{ marginTop: 15 }}>
                        <View style={styles.cardAddress}>
                            <Text style={{ fontWeight: '600', color: colors.black, fontSize: 13 }}>Address 1</Text>
                            <Text style={{ color: colors.grey, fontSize: 12, textAlign: 'justify' }}>Listed below are some of the Referral Marketing Projects .You can Join join them free of cost....</Text>
                        </View>

                        <View style={styles.cardAddress}>
                            <Text style={{ fontWeight: '600', color: colors.black, fontSize: 13 }}>Address 2</Text>
                            <Text style={{ color: colors.grey, fontSize: 12, textAlign: 'justify' }}>Listed below are some of the Referral Marketing Projects .You can Join join them free of cost....</Text>
                        </View>

                        <View style={styles.cardAddress}>
                            <Text style={{ fontWeight: '600', color: colors.black, fontSize: 13 }}>Address 3</Text>
                            <Text style={{ color: colors.grey, fontSize: 12, textAlign: 'justify' }}>Listed below are some of the Referral Marketing Projects .You can Join join them free of cost....</Text>
                        </View>
                    </View>
                ) : (
                    ""
                )}

                {tabColor === 9 ? (
                    <View style={{ marginTop: 15 }}>
                        <View style={styles.cardAddress}>
                            <Text style={{ fontWeight: '600', color: colors.black, fontSize: 13 }}>Address 1</Text>
                            <Text style={{ color: colors.grey, fontSize: 12, textAlign: 'justify' }}>Listed below are some of the Referral Marketing Projects .You can Join join them free of cost....</Text>
                        </View>

                        <View style={styles.cardAddress}>
                            <Text style={{ fontWeight: '600', color: colors.black, fontSize: 13 }}>Address 2</Text>
                            <Text style={{ color: colors.grey, fontSize: 12, textAlign: 'justify' }}>Listed below are some of the Referral Marketing Projects .You can Join join them free of cost....</Text>
                        </View>

                        <View style={styles.cardAddress}>
                            <Text style={{ fontWeight: '600', color: colors.black, fontSize: 13 }}>Address 3</Text>
                            <Text style={{ color: colors.grey, fontSize: 12, textAlign: 'justify' }}>Listed below are some of the Referral Marketing Projects .You can Join join them free of cost....</Text>
                        </View>
                    </View>
                ) : (
                    ""
                )}


            </ScrollView>
        </Wrap >
    );
};

export default WalletManagement;

const styles = StyleSheet.create({
    cardAddress: {
        backgroundColor: colors.white,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.grey,
        marginBottom: 10
    }
});
