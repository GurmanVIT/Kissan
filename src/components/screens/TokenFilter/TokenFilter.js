import { ScrollView, StyleSheet, Text, View, TextInput } from 'react-native';
import React, { useState } from 'react';
import { Wrap } from '../../common';
import Back from '../../../assets/svg/Back';
import { colors } from '../../../theme';
import Search from '../../../assets/svg/Search';
import SwitchSelector from 'react-native-switch-selector';
import Btc from '../../../assets/svg/Btc';
import AddTokenIcon from '../../../assets/svg/AddTokenIcon';

const TokenFilter = () => {

    const [tabColor, setTabColor] = useState(0);
    const [pin, setPin] = useState(false);
    const options = [{ value: false }, { value: true }];

    const onSwitchPress = async value => {
        await Singleton.getInstance().saveData(
            IS_MESSAGE_PIN,
            value ? 'enable' : 'disable',
        );
        console.log('value---', value);
    };

    return (
        <Wrap>
            <ScrollView style={styles.container} behavior="padding">
                <View style={{ marginTop: 15, }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color: "#000", fontSize: 13 }}>
                            Token Filter
                        </Text>
                        <View style={{ flexDirection: 'row', }}>
                            <View style={{ width: 20, height: 20 }}>
                                <AddTokenIcon />
                            </View>
                            <View style={{ width: 20, height: 20, marginLeft: 10 }}>
                                <Back />
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ marginTop: 15, marginBottom: 20 }}>
                    <View style={styles.inputStyleCrypto}>
                        <TextInput
                            style={{
                                flex: 1, height: 40, color: "#000", fontSize: 13
                            }}
                            placeholder="Search Crypto"
                            placeholderTextColor="#000"
                        />
                        <View style={{ height: 18, width: 18 }}>
                            <Search />
                        </View>
                    </View>

                    <ScrollView horizontal={true}>
                        <View style={{ flexDirection: 'row', gap: 5, overflow: 'scroll', flex: 1, marginTop: 15 }} >

                            <Text
                                onPress={() => setTabColor(0)}
                                style={{
                                    borderWidth: tabColor === 0 ? 1 : 1,
                                    borderColor: tabColor === 0 ? "green" : "transparent",
                                    paddingVertical: 4,
                                    paddingHorizontal: 12,
                                    fontSize: 12,
                                    color: colors.green,
                                    borderRadius: 12
                                }}
                            >ALL
                            </Text>

                            <Text
                                onPress={() => setTabColor(1)}
                                style={{
                                    borderWidth: tabColor === 1 ? 1 : 1,
                                    borderColor: tabColor === 1 ? "green" : "transparent",
                                    paddingVertical: 4,
                                    paddingHorizontal: 12,
                                    fontSize: 12,
                                    color: colors.green,
                                    borderRadius: 12
                                }}
                            >ETH
                            </Text>

                            <Text
                                onPress={() => setTabColor(2)}
                                style={{
                                    borderWidth: tabColor === 2 ? 1 : 1,
                                    borderColor: tabColor === 2 ? "green" : "transparent",
                                    paddingVertical: 4,
                                    paddingHorizontal: 12,
                                    fontSize: 12,
                                    color: colors.green,
                                    borderRadius: 12
                                }}
                            >XRP
                            </Text>

                            <Text
                                onPress={() => setTabColor(3)}
                                style={{
                                    borderWidth: tabColor === 3 ? 1 : 1,
                                    borderColor: tabColor === 3 ? "green" : "transparent",
                                    paddingVertical: 4,
                                    paddingHorizontal: 12,
                                    fontSize: 12,
                                    color: colors.green,
                                    borderRadius: 12
                                }}
                            >TRX
                            </Text>

                            <Text
                                onPress={() => setTabColor(4)}
                                style={{
                                    borderWidth: tabColor === 4 ? 1 : 1,
                                    borderColor: tabColor === 4 ? "green" : "transparent",
                                    paddingVertical: 4,
                                    paddingHorizontal: 12,
                                    fontSize: 12,
                                    color: colors.green,
                                    borderRadius: 12
                                }}
                            >BNB
                            </Text>

                            <Text
                                onPress={() => setTabColor(5)}
                                style={{
                                    borderWidth: tabColor === 5 ? 1 : 1,
                                    borderColor: tabColor === 5 ? "green" : "transparent",
                                    paddingVertical: 4,
                                    paddingHorizontal: 12,
                                    fontSize: 12,
                                    color: colors.green,
                                    borderRadius: 12
                                }}
                            >BSC
                            </Text>

                            <Text
                                onPress={() => setTabColor(6)}
                                style={{
                                    borderWidth: tabColor === 6 ? 1 : 1,
                                    borderColor: tabColor === 6 ? "green" : "transparent",
                                    paddingVertical: 4,
                                    paddingHorizontal: 12,
                                    fontSize: 12,
                                    color: colors.green,
                                    borderRadius: 12
                                }}
                            >DOT
                            </Text>

                            <Text
                                onPress={() => setTabColor(7)}
                                style={{
                                    borderWidth: tabColor === 7 ? 1 : 1,
                                    borderColor: tabColor === 7 ? "green" : "transparent",
                                    paddingVertical: 4,
                                    paddingHorizontal: 12,
                                    fontSize: 12,
                                    color: colors.green,
                                    borderRadius: 12
                                }}
                            >TRX
                            </Text>

                        </View>
                    </ScrollView>

                    {tabColor === 0 ? (
                        <View style={{ marginTop: 15 }}>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    paddingHorizontal: 3,
                                    paddingVertical: 15,
                                    borderBottomWidth: 1,
                                    borderColor: '#E8E8E8',
                                }}>
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <View style={{ width: 35, height: 35 }}><Btc /></View>
                                    <View style={{ marginLeft: 10 }}>
                                        <Text style={{ fontSize: 13, fontWeight: '600', color: colors.black }}>BTC</Text>
                                        <Text style={{ fontSize: 11 }}>Bitcoin</Text>
                                    </View>
                                </View>
                                <View
                                    style={{
                                        height: 30,
                                        width: 30,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}>
                                    <SwitchSelector
                                        backgroundColor={pin ? colors.green : colors.red}
                                        width={60}
                                        height={20}
                                        buttonColor={pin ? colors.white : colors.white}
                                        options={options}
                                        initial={0}
                                        value={pin}
                                        onPress={value => onSwitchPress(value)}
                                        hasPadding
                                    />
                                </View>
                            </View>

                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    paddingHorizontal: 3,
                                    paddingVertical: 15,
                                    borderBottomWidth: 1,
                                    borderColor: '#E8E8E8',
                                }}>
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <View style={{ width: 35, height: 35 }}><Btc /></View>
                                    <View style={{ marginLeft: 10 }}>
                                        <Text style={{ fontSize: 13, fontWeight: '600', color: colors.black }}>BTC</Text>
                                        <Text style={{ fontSize: 11 }}>Bitcoin</Text>
                                    </View>
                                </View>
                                <View
                                    style={{
                                        height: 30,
                                        width: 30,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}>
                                    <SwitchSelector
                                        backgroundColor={pin ? colors.green : colors.red}
                                        width={60}
                                        height={20}
                                        buttonColor={pin ? colors.white : colors.white}
                                        options={options}
                                        initial={0}
                                        value={pin}
                                        onPress={value => onSwitchPress(value)}
                                        hasPadding
                                    />
                                </View>
                            </View>

                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    paddingHorizontal: 3,
                                    paddingVertical: 15,
                                    borderBottomWidth: 1,
                                    borderColor: '#E8E8E8',
                                }}>
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <View style={{ width: 35, height: 35 }}><Btc /></View>
                                    <View style={{ marginLeft: 10 }}>
                                        <Text style={{ fontSize: 13, fontWeight: '600', color: colors.black }}>BTC</Text>
                                        <Text style={{ fontSize: 11 }}>Bitcoin</Text>
                                    </View>
                                </View>
                                <View
                                    style={{
                                        height: 30,
                                        width: 30,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}>
                                    <SwitchSelector
                                        backgroundColor={pin ? colors.green : colors.red}
                                        width={60}
                                        height={20}
                                        buttonColor={pin ? colors.white : colors.white}
                                        options={options}
                                        initial={0}
                                        value={pin}
                                        onPress={value => onSwitchPress(value)}
                                        hasPadding
                                    />
                                </View>
                            </View>

                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    paddingHorizontal: 3,
                                    paddingVertical: 15,
                                    borderBottomWidth: 1,
                                    borderColor: '#E8E8E8',
                                }}>
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <View style={{ width: 35, height: 35 }}><Btc /></View>
                                    <View style={{ marginLeft: 10 }}>
                                        <Text style={{ fontSize: 13, fontWeight: '600', color: colors.black }}>BTC</Text>
                                        <Text style={{ fontSize: 11 }}>Bitcoin</Text>
                                    </View>
                                </View>
                                <View
                                    style={{
                                        height: 30,
                                        width: 30,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}>
                                    <SwitchSelector
                                        backgroundColor={pin ? colors.green : colors.red}
                                        width={60}
                                        height={20}
                                        buttonColor={pin ? colors.white : colors.white}
                                        options={options}
                                        initial={0}
                                        value={pin}
                                        onPress={value => onSwitchPress(value)}
                                        hasPadding
                                    />
                                </View>
                            </View>
                        </View>
                    ) : (
                        ""
                    )}

                    {tabColor === 1 ? (
                        <View style={{ marginTop: 15 }}>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    paddingHorizontal: 3,
                                    paddingVertical: 15,
                                    borderBottomWidth: 1,
                                    borderColor: '#E8E8E8',
                                }}>
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <View style={{ width: 35, height: 35 }}><Btc /></View>
                                    <View style={{ marginLeft: 10 }}>
                                        <Text style={{ fontSize: 13, fontWeight: '600', color: colors.black }}>BTC</Text>
                                        <Text style={{ fontSize: 11 }}>Bitcoin</Text>
                                    </View>
                                </View>
                                <View
                                    style={{
                                        height: 30,
                                        width: 30,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}>
                                    <SwitchSelector
                                        backgroundColor={pin ? colors.green : colors.red}
                                        width={60}
                                        height={20}
                                        buttonColor={pin ? colors.white : colors.white}
                                        options={options}
                                        initial={0}
                                        value={pin}
                                        onPress={value => onSwitchPress(value)}
                                        hasPadding
                                    />
                                </View>
                            </View>

                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    paddingHorizontal: 3,
                                    paddingVertical: 15,
                                    borderBottomWidth: 1,
                                    borderColor: '#E8E8E8',
                                }}>
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <View style={{ width: 35, height: 35 }}><Btc /></View>
                                    <View style={{ marginLeft: 10 }}>
                                        <Text style={{ fontSize: 13, fontWeight: '600', color: colors.black }}>BTC</Text>
                                        <Text style={{ fontSize: 11 }}>Bitcoin</Text>
                                    </View>
                                </View>
                                <View
                                    style={{
                                        height: 30,
                                        width: 30,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}>
                                    <SwitchSelector
                                        backgroundColor={pin ? colors.green : colors.red}
                                        width={60}
                                        height={20}
                                        buttonColor={pin ? colors.white : colors.white}
                                        options={options}
                                        initial={0}
                                        value={pin}
                                        onPress={value => onSwitchPress(value)}
                                        hasPadding
                                    />
                                </View>
                            </View>

                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    paddingHorizontal: 3,
                                    paddingVertical: 15,
                                    borderBottomWidth: 1,
                                    borderColor: '#E8E8E8',
                                }}>
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <View style={{ width: 35, height: 35 }}><Btc /></View>
                                    <View style={{ marginLeft: 10 }}>
                                        <Text style={{ fontSize: 13, fontWeight: '600', color: colors.black }}>BTC</Text>
                                        <Text style={{ fontSize: 11 }}>Bitcoin</Text>
                                    </View>
                                </View>
                                <View
                                    style={{
                                        height: 30,
                                        width: 30,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}>
                                    <SwitchSelector
                                        backgroundColor={pin ? colors.green : colors.red}
                                        width={60}
                                        height={20}
                                        buttonColor={pin ? colors.white : colors.white}
                                        options={options}
                                        initial={0}
                                        value={pin}
                                        onPress={value => onSwitchPress(value)}
                                        hasPadding
                                    />
                                </View>
                            </View>

                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    paddingHorizontal: 3,
                                    paddingVertical: 15,
                                    borderBottomWidth: 1,
                                    borderColor: '#E8E8E8',
                                }}>
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <View style={{ width: 35, height: 35 }}><Btc /></View>
                                    <View style={{ marginLeft: 10 }}>
                                        <Text style={{ fontSize: 13, fontWeight: '600', color: colors.black }}>BTC</Text>
                                        <Text style={{ fontSize: 11 }}>Bitcoin</Text>
                                    </View>
                                </View>
                                <View
                                    style={{
                                        height: 30,
                                        width: 30,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}>
                                    <SwitchSelector
                                        backgroundColor={pin ? colors.green : colors.red}
                                        width={60}
                                        height={20}
                                        buttonColor={pin ? colors.white : colors.white}
                                        options={options}
                                        initial={0}
                                        value={pin}
                                        onPress={value => onSwitchPress(value)}
                                        hasPadding
                                    />
                                </View>
                            </View>
                        </View>
                    ) : (
                        ""
                    )}

                    {tabColor === 2 ? (
                        <View style={{ marginTop: 15 }}>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    paddingHorizontal: 3,
                                    paddingVertical: 8,
                                    borderBottomWidth: 1,
                                    borderColor: '#E8E8E8',
                                }}>
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <View style={{ width: 35, height: 35 }}><Btc /></View>
                                    <View style={{ marginLeft: 10 }}>
                                        <Text style={{ fontSize: 13, fontWeight: '600', color: colors.black }}>BTC</Text>
                                        <Text style={{ fontSize: 11 }}>Bitcoin</Text>
                                    </View>
                                </View>
                                <View
                                    style={{
                                        height: 30,
                                        width: 30,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}>
                                    <SwitchSelector
                                        backgroundColor={pin ? colors.green : colors.red}
                                        width={60}
                                        height={20}
                                        buttonColor={pin ? colors.white : colors.white}
                                        options={options}
                                        initial={0}
                                        value={pin}
                                        onPress={value => onSwitchPress(value)}
                                        hasPadding
                                    />
                                </View>
                            </View>

                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    paddingHorizontal: 3,
                                    paddingVertical: 15,
                                    borderBottomWidth: 1,
                                    borderColor: '#E8E8E8',
                                }}>
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <View style={{ width: 35, height: 35 }}><Btc /></View>
                                    <View style={{ marginLeft: 10 }}>
                                        <Text style={{ fontSize: 13, fontWeight: '600', color: colors.black }}>BTC</Text>
                                        <Text style={{ fontSize: 11 }}>Bitcoin</Text>
                                    </View>
                                </View>
                                <View
                                    style={{
                                        height: 30,
                                        width: 30,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}>
                                    <SwitchSelector
                                        backgroundColor={pin ? colors.green : colors.red}
                                        width={60}
                                        height={20}
                                        buttonColor={pin ? colors.white : colors.white}
                                        options={options}
                                        initial={0}
                                        value={pin}
                                        onPress={value => onSwitchPress(value)}
                                        hasPadding
                                    />
                                </View>
                            </View>

                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    paddingHorizontal: 3,
                                    paddingVertical: 15,
                                    borderBottomWidth: 1,
                                    borderColor: '#E8E8E8',
                                }}>
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <View style={{ width: 35, height: 35 }}><Btc /></View>
                                    <View style={{ marginLeft: 10 }}>
                                        <Text style={{ fontSize: 13, fontWeight: '600', color: colors.black }}>BTC</Text>
                                        <Text style={{ fontSize: 11 }}>Bitcoin</Text>
                                    </View>
                                </View>
                                <View
                                    style={{
                                        height: 30,
                                        width: 30,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}>
                                    <SwitchSelector
                                        backgroundColor={pin ? colors.green : colors.red}
                                        width={60}
                                        height={20}
                                        buttonColor={pin ? colors.white : colors.white}
                                        options={options}
                                        initial={0}
                                        value={pin}
                                        onPress={value => onSwitchPress(value)}
                                        hasPadding
                                    />
                                </View>
                            </View>

                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    paddingHorizontal: 3,
                                    paddingVertical: 15,
                                    borderBottomWidth: 1,
                                    borderColor: '#E8E8E8',
                                }}>
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <View style={{ width: 35, height: 35 }}><Btc /></View>
                                    <View style={{ marginLeft: 10 }}>
                                        <Text style={{ fontSize: 13, fontWeight: '600', color: colors.black }}>BTC</Text>
                                        <Text style={{ fontSize: 11 }}>Bitcoin</Text>
                                    </View>
                                </View>
                                <View
                                    style={{
                                        height: 30,
                                        width: 30,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}>
                                    <SwitchSelector
                                        backgroundColor={pin ? colors.green : colors.red}
                                        width={60}
                                        height={20}
                                        buttonColor={pin ? colors.white : colors.white}
                                        options={options}
                                        initial={0}
                                        value={pin}
                                        onPress={value => onSwitchPress(value)}
                                        hasPadding
                                    />
                                </View>
                            </View>
                        </View>
                    ) : (
                        ""
                    )}

                    {tabColor === 3 ? (
                        <View style={{ marginTop: 15 }}>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    paddingHorizontal: 3,
                                    paddingVertical: 15,
                                    borderBottomWidth: 1,
                                    borderColor: '#E8E8E8',
                                }}>
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <View style={{ width: 35, height: 35 }}><Btc /></View>
                                    <View style={{ marginLeft: 10 }}>
                                        <Text style={{ fontSize: 13, fontWeight: '600', color: colors.black }}>BTC</Text>
                                        <Text style={{ fontSize: 11 }}>Bitcoin</Text>
                                    </View>
                                </View>
                                <View
                                    style={{
                                        height: 30,
                                        width: 30,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}>
                                    <SwitchSelector
                                        backgroundColor={pin ? colors.green : colors.red}
                                        width={60}
                                        height={20}
                                        buttonColor={pin ? colors.white : colors.white}
                                        options={options}
                                        initial={0}
                                        value={pin}
                                        onPress={value => onSwitchPress(value)}
                                        hasPadding
                                    />
                                </View>
                            </View>

                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    paddingHorizontal: 3,
                                    paddingVertical: 15,
                                    borderBottomWidth: 1,
                                    borderColor: '#E8E8E8',
                                }}>
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <View style={{ width: 35, height: 35 }}><Btc /></View>
                                    <View style={{ marginLeft: 10 }}>
                                        <Text style={{ fontSize: 13, fontWeight: '600', color: colors.black }}>BTC</Text>
                                        <Text style={{ fontSize: 11 }}>Bitcoin</Text>
                                    </View>
                                </View>
                                <View
                                    style={{
                                        height: 30,
                                        width: 30,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}>
                                    <SwitchSelector
                                        backgroundColor={pin ? colors.green : colors.red}
                                        width={60}
                                        height={20}
                                        buttonColor={pin ? colors.white : colors.white}
                                        options={options}
                                        initial={0}
                                        value={pin}
                                        onPress={value => onSwitchPress(value)}
                                        hasPadding
                                    />
                                </View>
                            </View>

                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    paddingHorizontal: 3,
                                    paddingVertical: 15,
                                    borderBottomWidth: 1,
                                    borderColor: '#E8E8E8',
                                }}>
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <View style={{ width: 35, height: 35 }}><Btc /></View>
                                    <View style={{ marginLeft: 10 }}>
                                        <Text style={{ fontSize: 13, fontWeight: '600', color: colors.black }}>BTC</Text>
                                        <Text style={{ fontSize: 11 }}>Bitcoin</Text>
                                    </View>
                                </View>
                                <View
                                    style={{
                                        height: 30,
                                        width: 30,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}>
                                    <SwitchSelector
                                        backgroundColor={pin ? colors.green : colors.red}
                                        width={60}
                                        height={20}
                                        buttonColor={pin ? colors.white : colors.white}
                                        options={options}
                                        initial={0}
                                        value={pin}
                                        onPress={value => onSwitchPress(value)}
                                        hasPadding
                                    />
                                </View>
                            </View>

                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    paddingHorizontal: 3,
                                    paddingVertical: 15,
                                    borderBottomWidth: 1,
                                    borderColor: '#E8E8E8',
                                }}>
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <View style={{ width: 35, height: 35 }}><Btc /></View>
                                    <View style={{ marginLeft: 10 }}>
                                        <Text style={{ fontSize: 13, fontWeight: '600', color: colors.black }}>BTC</Text>
                                        <Text style={{ fontSize: 11 }}>Bitcoin</Text>
                                    </View>
                                </View>
                                <View
                                    style={{
                                        height: 30,
                                        width: 30,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}>
                                    <SwitchSelector
                                        backgroundColor={pin ? colors.green : colors.red}
                                        width={60}
                                        height={20}
                                        buttonColor={pin ? colors.white : colors.white}
                                        options={options}
                                        initial={0}
                                        value={pin}
                                        onPress={value => onSwitchPress(value)}
                                        hasPadding
                                    />
                                </View>
                            </View>
                        </View>
                    ) : (
                        ""
                    )}

                    {tabColor === 4 ? (
                        <View style={{ marginTop: 15 }}>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    paddingHorizontal: 3,
                                    paddingVertical: 15,
                                    borderBottomWidth: 1,
                                    borderColor: '#E8E8E8',
                                }}>
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <View style={{ width: 35, height: 35 }}><Btc /></View>
                                    <View style={{ marginLeft: 10 }}>
                                        <Text style={{ fontSize: 13, fontWeight: '600', color: colors.black }}>BTC</Text>
                                        <Text style={{ fontSize: 11 }}>Bitcoin</Text>
                                    </View>
                                </View>
                                <View
                                    style={{
                                        height: 30,
                                        width: 30,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}>
                                    <SwitchSelector
                                        backgroundColor={pin ? colors.green : colors.red}
                                        width={60}
                                        height={20}
                                        buttonColor={pin ? colors.white : colors.white}
                                        options={options}
                                        initial={0}
                                        value={pin}
                                        onPress={value => onSwitchPress(value)}
                                        hasPadding
                                    />
                                </View>
                            </View>

                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    paddingHorizontal: 3,
                                    paddingVertical: 15,
                                    borderBottomWidth: 1,
                                    borderColor: '#E8E8E8',
                                }}>
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <View style={{ width: 35, height: 35 }}><Btc /></View>
                                    <View style={{ marginLeft: 10 }}>
                                        <Text style={{ fontSize: 13, fontWeight: '600', color: colors.black }}>BTC</Text>
                                        <Text style={{ fontSize: 11 }}>Bitcoin</Text>
                                    </View>
                                </View>
                                <View
                                    style={{
                                        height: 30,
                                        width: 30,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}>
                                    <SwitchSelector
                                        backgroundColor={pin ? colors.green : colors.red}
                                        width={60}
                                        height={20}
                                        buttonColor={pin ? colors.white : colors.white}
                                        options={options}
                                        initial={0}
                                        value={pin}
                                        onPress={value => onSwitchPress(value)}
                                        hasPadding
                                    />
                                </View>
                            </View>

                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    paddingHorizontal: 3,
                                    paddingVertical: 15,
                                    borderBottomWidth: 1,
                                    borderColor: '#E8E8E8',
                                }}>
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <View style={{ width: 35, height: 35 }}><Btc /></View>
                                    <View style={{ marginLeft: 10 }}>
                                        <Text style={{ fontSize: 13, fontWeight: '600', color: colors.black }}>BTC</Text>
                                        <Text style={{ fontSize: 11 }}>Bitcoin</Text>
                                    </View>
                                </View>
                                <View
                                    style={{
                                        height: 30,
                                        width: 30,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}>
                                    <SwitchSelector
                                        backgroundColor={pin ? colors.green : colors.red}
                                        width={60}
                                        height={20}
                                        buttonColor={pin ? colors.white : colors.white}
                                        options={options}
                                        initial={0}
                                        value={pin}
                                        onPress={value => onSwitchPress(value)}
                                        hasPadding
                                    />
                                </View>
                            </View>

                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    paddingHorizontal: 3,
                                    paddingVertical: 15,
                                    borderBottomWidth: 1,
                                    borderColor: '#E8E8E8',
                                }}>
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <View style={{ width: 35, height: 35 }}><Btc /></View>
                                    <View style={{ marginLeft: 10 }}>
                                        <Text style={{ fontSize: 13, fontWeight: '600', color: colors.black }}>BTC</Text>
                                        <Text style={{ fontSize: 11 }}>Bitcoin</Text>
                                    </View>
                                </View>
                                <View
                                    style={{
                                        height: 30,
                                        width: 30,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}>
                                    <SwitchSelector
                                        backgroundColor={pin ? colors.green : colors.red}
                                        width={60}
                                        height={20}
                                        buttonColor={pin ? colors.white : colors.white}
                                        options={options}
                                        initial={0}
                                        value={pin}
                                        onPress={value => onSwitchPress(value)}
                                        hasPadding
                                    />
                                </View>
                            </View>
                        </View>
                    ) : (
                        ""
                    )}

                    {tabColor === 5 ? (
                        <View style={{ marginTop: 15 }}>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    paddingHorizontal: 3,
                                    paddingVertical: 15,
                                    borderBottomWidth: 1,
                                    borderColor: '#E8E8E8',
                                }}>
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <View style={{ width: 35, height: 35 }}><Btc /></View>
                                    <View style={{ marginLeft: 10 }}>
                                        <Text style={{ fontSize: 13, fontWeight: '600', color: colors.black }}>BTC</Text>
                                        <Text style={{ fontSize: 11 }}>Bitcoin</Text>
                                    </View>
                                </View>
                                <View
                                    style={{
                                        height: 30,
                                        width: 30,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}>
                                    <SwitchSelector
                                        backgroundColor={pin ? colors.green : colors.red}
                                        width={60}
                                        height={20}
                                        buttonColor={pin ? colors.white : colors.white}
                                        options={options}
                                        initial={0}
                                        value={pin}
                                        onPress={value => onSwitchPress(value)}
                                        hasPadding
                                    />
                                </View>
                            </View>

                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    paddingHorizontal: 3,
                                    paddingVertical: 15,
                                    borderBottomWidth: 1,
                                    borderColor: '#E8E8E8',
                                }}>
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <View style={{ width: 35, height: 35 }}><Btc /></View>
                                    <View style={{ marginLeft: 10 }}>
                                        <Text style={{ fontSize: 13, fontWeight: '600', color: colors.black }}>BTC</Text>
                                        <Text style={{ fontSize: 11 }}>Bitcoin</Text>
                                    </View>
                                </View>
                                <View
                                    style={{
                                        height: 30,
                                        width: 30,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}>
                                    <SwitchSelector
                                        backgroundColor={pin ? colors.green : colors.red}
                                        width={60}
                                        height={20}
                                        buttonColor={pin ? colors.white : colors.white}
                                        options={options}
                                        initial={0}
                                        value={pin}
                                        onPress={value => onSwitchPress(value)}
                                        hasPadding
                                    />
                                </View>
                            </View>

                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    paddingHorizontal: 3,
                                    paddingVertical: 15,
                                    borderBottomWidth: 1,
                                    borderColor: '#E8E8E8',
                                }}>
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <View style={{ width: 35, height: 35 }}><Btc /></View>
                                    <View style={{ marginLeft: 10 }}>
                                        <Text style={{ fontSize: 13, fontWeight: '600', color: colors.black }}>BTC</Text>
                                        <Text style={{ fontSize: 11 }}>Bitcoin</Text>
                                    </View>
                                </View>
                                <View
                                    style={{
                                        height: 30,
                                        width: 30,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}>
                                    <SwitchSelector
                                        backgroundColor={pin ? colors.green : colors.red}
                                        width={60}
                                        height={20}
                                        buttonColor={pin ? colors.white : colors.white}
                                        options={options}
                                        initial={0}
                                        value={pin}
                                        onPress={value => onSwitchPress(value)}
                                        hasPadding
                                    />
                                </View>
                            </View>

                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    paddingHorizontal: 3,
                                    paddingVertical: 15,
                                    borderBottomWidth: 1,
                                    borderColor: '#E8E8E8',
                                }}>
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <View style={{ width: 35, height: 35 }}><Btc /></View>
                                    <View style={{ marginLeft: 10 }}>
                                        <Text style={{ fontSize: 13, fontWeight: '600', color: colors.black }}>BTC</Text>
                                        <Text style={{ fontSize: 11 }}>Bitcoin</Text>
                                    </View>
                                </View>
                                <View
                                    style={{
                                        height: 30,
                                        width: 30,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}>
                                    <SwitchSelector
                                        backgroundColor={pin ? colors.green : colors.red}
                                        width={60}
                                        height={20}
                                        buttonColor={pin ? colors.white : colors.white}
                                        options={options}
                                        initial={0}
                                        value={pin}
                                        onPress={value => onSwitchPress(value)}
                                        hasPadding
                                    />
                                </View>
                            </View>
                        </View>
                    ) : (
                        ""
                    )}

                    {tabColor === 6 ? (
                        <View style={{ marginTop: 15 }}>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    paddingHorizontal: 3,
                                    paddingVertical: 15,
                                    borderBottomWidth: 1,
                                    borderColor: '#E8E8E8',
                                }}>
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <View style={{ width: 35, height: 35 }}><Btc /></View>
                                    <View style={{ marginLeft: 10 }}>
                                        <Text style={{ fontSize: 13, fontWeight: '600', color: colors.black }}>BTC</Text>
                                        <Text style={{ fontSize: 11 }}>Bitcoin</Text>
                                    </View>
                                </View>
                                <View
                                    style={{
                                        height: 30,
                                        width: 30,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}>
                                    <SwitchSelector
                                        backgroundColor={pin ? colors.green : colors.red}
                                        width={60}
                                        height={20}
                                        buttonColor={pin ? colors.white : colors.white}
                                        options={options}
                                        initial={0}
                                        value={pin}
                                        onPress={value => onSwitchPress(value)}
                                        hasPadding
                                    />
                                </View>
                            </View>

                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    paddingHorizontal: 3,
                                    paddingVertical: 15,
                                    borderBottomWidth: 1,
                                    borderColor: '#E8E8E8',
                                }}>
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <View style={{ width: 35, height: 35 }}><Btc /></View>
                                    <View style={{ marginLeft: 10 }}>
                                        <Text style={{ fontSize: 13, fontWeight: '600', color: colors.black }}>BTC</Text>
                                        <Text style={{ fontSize: 11 }}>Bitcoin</Text>
                                    </View>
                                </View>
                                <View
                                    style={{
                                        height: 30,
                                        width: 30,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}>
                                    <SwitchSelector
                                        backgroundColor={pin ? colors.green : colors.red}
                                        width={60}
                                        height={20}
                                        buttonColor={pin ? colors.white : colors.white}
                                        options={options}
                                        initial={0}
                                        value={pin}
                                        onPress={value => onSwitchPress(value)}
                                        hasPadding
                                    />
                                </View>
                            </View>

                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    paddingHorizontal: 3,
                                    paddingVertical: 15,
                                    borderBottomWidth: 1,
                                    borderColor: '#E8E8E8',
                                }}>
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <View style={{ width: 35, height: 35 }}><Btc /></View>
                                    <View style={{ marginLeft: 10 }}>
                                        <Text style={{ fontSize: 13, fontWeight: '600', color: colors.black }}>BTC</Text>
                                        <Text style={{ fontSize: 11 }}>Bitcoin</Text>
                                    </View>
                                </View>
                                <View
                                    style={{
                                        height: 30,
                                        width: 30,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}>
                                    <SwitchSelector
                                        backgroundColor={pin ? colors.green : colors.red}
                                        width={60}
                                        height={20}
                                        buttonColor={pin ? colors.white : colors.white}
                                        options={options}
                                        initial={0}
                                        value={pin}
                                        onPress={value => onSwitchPress(value)}
                                        hasPadding
                                    />
                                </View>
                            </View>

                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    paddingHorizontal: 3,
                                    paddingVertical: 15,
                                    borderBottomWidth: 1,
                                    borderColor: '#E8E8E8',
                                }}>
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <View style={{ width: 35, height: 35 }}><Btc /></View>
                                    <View style={{ marginLeft: 10 }}>
                                        <Text style={{ fontSize: 13, fontWeight: '600', color: colors.black }}>BTC</Text>
                                        <Text style={{ fontSize: 11 }}>Bitcoin</Text>
                                    </View>
                                </View>
                                <View
                                    style={{
                                        height: 30,
                                        width: 30,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}>
                                    <SwitchSelector
                                        backgroundColor={pin ? colors.green : colors.red}
                                        width={60}
                                        height={20}
                                        buttonColor={pin ? colors.white : colors.white}
                                        options={options}
                                        initial={0}
                                        value={pin}
                                        onPress={value => onSwitchPress(value)}
                                        hasPadding
                                    />
                                </View>
                            </View>
                        </View>
                    ) : (
                        ""
                    )}

                    {tabColor === 7 ? (
                        <View style={{ marginTop: 15 }}>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    paddingHorizontal: 3,
                                    paddingVertical: 15,
                                    borderBottomWidth: 1,
                                    borderColor: '#E8E8E8',
                                }}>
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <View style={{ width: 35, height: 35 }}><Btc /></View>
                                    <View style={{ marginLeft: 10 }}>
                                        <Text style={{ fontSize: 13, fontWeight: '600', color: colors.black }}>BTC</Text>
                                        <Text style={{ fontSize: 11 }}>Bitcoin</Text>
                                    </View>
                                </View>
                                <View
                                    style={{
                                        height: 30,
                                        width: 30,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}>
                                    <SwitchSelector
                                        backgroundColor={pin ? colors.green : colors.red}
                                        width={60}
                                        height={20}
                                        buttonColor={pin ? colors.white : colors.white}
                                        options={options}
                                        initial={0}
                                        value={pin}
                                        onPress={value => onSwitchPress(value)}
                                        hasPadding
                                    />
                                </View>
                            </View>

                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    paddingHorizontal: 3,
                                    paddingVertical: 15,
                                    borderBottomWidth: 1,
                                    borderColor: '#E8E8E8',
                                }}>
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <View style={{ width: 35, height: 35 }}><Btc /></View>
                                    <View style={{ marginLeft: 10 }}>
                                        <Text style={{ fontSize: 13, fontWeight: '600', color: colors.black }}>BTC</Text>
                                        <Text style={{ fontSize: 11 }}>Bitcoin</Text>
                                    </View>
                                </View>
                                <View
                                    style={{
                                        height: 30,
                                        width: 30,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}>
                                    <SwitchSelector
                                        backgroundColor={pin ? colors.green : colors.red}
                                        width={60}
                                        height={20}
                                        buttonColor={pin ? colors.white : colors.white}
                                        options={options}
                                        initial={0}
                                        value={pin}
                                        onPress={value => onSwitchPress(value)}
                                        hasPadding
                                    />
                                </View>
                            </View>

                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    paddingHorizontal: 3,
                                    paddingVertical: 15,
                                    borderBottomWidth: 1,
                                    borderColor: '#E8E8E8',
                                }}>
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <View style={{ width: 35, height: 35 }}><Btc /></View>
                                    <View style={{ marginLeft: 10 }}>
                                        <Text style={{ fontSize: 13, fontWeight: '600', color: colors.black }}>BTC</Text>
                                        <Text style={{ fontSize: 11 }}>Bitcoin</Text>
                                    </View>
                                </View>
                                <View
                                    style={{
                                        height: 30,
                                        width: 30,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}>
                                    <SwitchSelector
                                        backgroundColor={pin ? colors.green : colors.red}
                                        width={60}
                                        height={20}
                                        buttonColor={pin ? colors.white : colors.white}
                                        options={options}
                                        initial={0}
                                        value={pin}
                                        onPress={value => onSwitchPress(value)}
                                        hasPadding
                                    />
                                </View>
                            </View>

                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    paddingHorizontal: 3,
                                    paddingVertical: 15,
                                    borderBottomWidth: 1,
                                    borderColor: '#E8E8E8',
                                }}>
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <View style={{ width: 35, height: 35 }}><Btc /></View>
                                    <View style={{ marginLeft: 10 }}>
                                        <Text style={{ fontSize: 13, fontWeight: '600', color: colors.black }}>BTC</Text>
                                        <Text style={{ fontSize: 11 }}>Bitcoin</Text>
                                    </View>
                                </View>
                                <View
                                    style={{
                                        height: 30,
                                        width: 30,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}>
                                    <SwitchSelector
                                        backgroundColor={pin ? colors.green : colors.red}
                                        width={60}
                                        height={20}
                                        buttonColor={pin ? colors.white : colors.white}
                                        options={options}
                                        initial={0}
                                        value={pin}
                                        onPress={value => onSwitchPress(value)}
                                        hasPadding
                                    />
                                </View>
                            </View>
                        </View>
                    ) : (
                        ""
                    )}


                </View>
            </ScrollView >
        </Wrap >
    );
};

export default TokenFilter;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        fontFamily: 'Roboto',
    },
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
})