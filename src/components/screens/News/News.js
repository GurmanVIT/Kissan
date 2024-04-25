import { ScrollView, StyleSheet, Text, View, TextInput, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import Search from '../../../assets/svg/Search';
import { Header, Wrap } from '../../common';
import { colors } from '../../../theme';
import Calendars from '../../../assets/svg/Calendar';
import TradeImage from '../../../assets/svg/TradeImage';
import Play from '../../../assets/svg/Play';


const News = () => {

    const [tabColor, setTabColor] = useState(0);
    const currentDate = new Date().getDate(); // Get current date
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000); // Update every second

        return () => clearInterval(interval);
    }, []);

    return (
        <Wrap>
            <Header title={'News'} />
            <ScrollView style={{ paddingHorizontal: 16 }}>
                <View style={styles.inputStyleCrypto}>
                    <TextInput
                        style={{
                            flex: 1, height: 40, color: "#000"
                        }}
                        placeholder="Enter search or web address"
                        placeholderTextColor="#000"
                    />
                    <View style={{ height: 18, width: 18 }}>
                        <Search />
                    </View>
                </View>

                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
                    <Text
                        style={(styles.tabButton, {
                            color: tabColor === 0 ? "green" : "#000",
                            borderBottomWidth: tabColor === 0 ? 2 : 0,
                            borderColor: tabColor === 0 ? "green" : "transparent",
                            paddingVertical: 5,
                            paddingHorizontal: 6
                        })}
                        onPress={() => setTabColor(0)}>
                        Home
                    </Text>

                    <Text
                        style={(styles.tabButton, {
                            color: tabColor === 1 ? "green" : "#000",
                            borderBottomWidth: tabColor === 1 ? 2 : 0,
                            borderColor: tabColor === 1 ? "green" : "transparent",
                            paddingVertical: 5,
                            paddingHorizontal: 6
                        })}
                        onPress={() => setTabColor(1)}>
                        NFT
                    </Text>

                    <Text
                        style={(styles.tabButton, {
                            color: tabColor === 2 ? "green" : "#000",
                            borderBottomWidth: tabColor === 2 ? 2 : 0,
                            borderColor: tabColor === 2 ? "green" : "transparent",
                            paddingVertical: 5,
                            paddingHorizontal: 6
                        })}
                        onPress={() => setTabColor(2)}>
                        DeFi
                    </Text>

                    <Text
                        style={(styles.tabButton, {
                            color: tabColor === 3 ? "green" : "#000",
                            borderBottomWidth: tabColor === 3 ? 2 : 0,
                            borderColor: tabColor === 3 ? "green" : "transparent",
                            paddingVertical: 5,
                            paddingHorizontal: 6
                        })}
                        onPress={() => setTabColor(3)}>
                        Play To Earn
                    </Text>

                    <Text
                        style={(styles.tabButton, {
                            color: tabColor === 4 ? "green" : "#000",
                            borderBottomWidth: tabColor === 4 ? 2 : 0,
                            borderColor: tabColor === 4 ? "green" : "transparent",
                            paddingVertical: 5,
                            paddingHorizontal: 6
                        })}
                        onPress={() => setTabColor(4)}>
                        Altcoin
                    </Text>
                </View>

                {tabColor === 0 ? (
                    <View>
                        <View style={{ marginVertical: 20, width: 333 }}>
                            <Image source={require('../../../assets/images/newsImages1.png')} />
                        </View>

                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ height: 35, width: 45 }}>
                                <Calendars />
                            </View>
                            <Text style={{ position: 'absolute', top: 13, left: 8, fontSize: 14, color: colors.black }}>{currentDate}</Text>
                            <View style={{ width: 30, height: 30 }}>
                                <Play />
                            </View>
                        </View>

                        <View style={{ marginTop: 10 }}>
                            <Text style={{ color: colors.appPrimary }}>{currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text>
                        </View>

                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <Text style={styles.headerStyle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</Text>
                            <View style={{ width: 200, height: 40 }}>
                                <TradeImage />
                            </View>
                        </View>

                        <View>
                            <Text style={styles.textStyle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</Text>
                        </View>

                        <View style={{ marginTop: 15 }}>
                            <Text style={{ color: colors.appPrimary }}>{currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text>
                        </View>

                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <Text style={styles.headerStyle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</Text>
                            <View style={{ width: 200, height: 40 }}>
                                <TradeImage />
                            </View>
                        </View>
                        <View style={{}}>
                            <Text style={styles.textStyle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</Text>
                        </View>
                    </View>
                ) : (
                    ""
                )}

            </ScrollView>
        </Wrap>
    );
};

export default News;

const styles = StyleSheet.create({
    headerStyle: {
        marginTop: 5,
        fontWeight: '600',
        color: colors.black,
        fontSize: 13,
    },
    blurText: {
        marginTop: 8,
        fontWeight: '600',
        color: colors.blue,
        fontSize: 16,
    },
    textStyle: {
        textAlign: 'justify',
        marginTop: 8,
        marginLeft: 4,
        fontSize: 13,
    },
    inputStyleCrypto: {
        height: 40,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#000",
        paddingHorizontal: 10,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
});
