import { TouchableOpacity, ScrollView, StyleSheet, Text, View, TextInput } from 'react-native';
import React, { useState } from 'react';
import Search from '../../../assets/svg/Search';
import Btc from '../../../assets/svg/Btc';
import { Wrap } from '../../common';
import Star from '../../../assets/svg/Star';
import { colors } from '../../../theme';
import UpImage from '../../../assets/svg/UpImage';
import DownImage from '../../../assets/svg/DownImage';
import DropDownPicker from 'react-native-dropdown-picker';


const CustomTabPanel = ({ value, index, children }) => {
  return (
    <View style={{ display: value === index ? 'flex' : 'none' }}>
      {children}
    </View>
  );
};

const Market = () => {

  const [value, setValue] = useState(0);
  const [tabColor, setTabColor] = useState(0);
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Rank 1', value: 'Rank 1' },
    { label: 'Rank 2', value: 'Rank 2' },
    { label: 'Rank 3', value: 'Rank 3' },
    { label: 'Rank 4', value: 'Rank 4' },
    { label: 'Rank 5', value: 'Rank 5' },
  ]);

  const handleChange = (index) => {
    setValue(index);
  };

  const a11yProps = (index) => {
    return {
      onPress: () => handleChange(index),
    };
  };

  return (
    <Wrap>
      <ScrollView style={styles.container} behavior="padding">
        <View style={{ marginTop: 15 }}>
          <View>
            <Text style={{ color: "#000" }}>
              Market
            </Text>
          </View>
        </View>
        <View style={{ marginTop: 15, marginBottom: 20 }}>
          <View>
            <View style={{
              flexDirection: 'row',
              borderColor: "#fafafa",
              borderWidth: 2,
              backgroundColor: "#fff",
              borderRadius: 11,
              marginBottom: 15
            }}>
              <TouchableOpacity {...a11yProps(0)} style={{ flex: 1 }}>
                <Text onPress={() => setValue(0)}
                  style={(styles.tabs, {
                    textAlign: 'center', padding: 7, borderRadius: 10,
                    color: value === 0 ? "#fff" : "#000000",
                    backgroundColor: value === 0 ? "#14A300" : "#fff",
                  })}>
                  Spot Pair
                </Text>
              </TouchableOpacity>
              <TouchableOpacity {...a11yProps(1)} style={{ flex: 1 }}>
                <Text onPress={() => setValue(1)}
                  style={{
                    textAlign: 'center', padding: 7, borderRadius: 10,
                    color: value === 1 ? "#fff" : "#000000",
                    backgroundColor: value === 1 ? "#14A300" : "#fff",
                  }}>
                  Crypto Currencies
                </Text>
              </TouchableOpacity>
            </View>

            <CustomTabPanel value={value} index={0} >
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View>
                  <Text style={styles.headerText}>Favorite</Text>
                </View>
                <View style={styles.inputStyle}>
                  <TextInput
                    style={{
                      flex: 1, height: 40, color: "#000"
                    }}
                    placeholder="Search crypto pair"
                    placeholderTextColor="#000"
                  />
                  <View style={{ height: 18, width: 18 }}>
                    <Search />
                  </View>
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
                  INR
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
                  BUSD
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
                  USDT
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
                  BNB
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
                  BTC
                </Text>

                <Text
                  style={(styles.tabButton, {
                    color: tabColor === 5 ? "green" : "#000",
                    borderBottomWidth: tabColor === 5 ? 2 : 0,
                    borderColor: tabColor === 5 ? "green" : "transparent",
                    paddingVertical: 5,
                    paddingHorizontal: 6
                  })}
                  onPress={() => setTabColor(5)}>
                  ALTS
                </Text>

              </View>

              {tabColor === 0 ? (
                <View>
                  <View style={{ flex: 1, flexDirection: 'row', height: 40, marginTop: 16, alignItems: 'center' }}>
                    <View style={{ height: 35, width: 35, marginRight: 8 }}>
                      <Btc />
                    </View>

                    <View >
                      <Text style={{ color: colors.black, fontSize: 13 }}>BTC<Text style={{ color: colors.grey, fontSize: 11 }}>/INR</Text></Text>
                      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ height: 10, width: 10 }}><Star /></View>
                        <Text style={{ color: colors.black, marginLeft: 4, fontSize: 12 }}>Vol 0.728</Text>

                      </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                      <Text style={{ color: colors.red, marginLeft: 6 }}>-8.0%</Text>
                      <DownImage />
                    </View>
                    <View>
                      <Text style={{ fontSize: 13 }}>≈ INR : 35,831.85</Text>
                      <Text style={{ fontSize: 13 }}>≈ INR : 35,831.85</Text>
                    </View>

                  </View>

                  <View style={{ flex: 1, flexDirection: 'row', height: 40, marginTop: 16, alignItems: 'center' }}>
                    <View style={{ height: 35, width: 35, marginRight: 8 }}>
                      <Btc />
                    </View>
                    <View >
                      <Text style={{ color: colors.black, fontSize: 13 }}>BTC<Text style={{ color: colors.grey, fontSize: 11 }}>/INR</Text></Text>
                      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ height: 10, width: 10 }}><Star /></View>
                        <Text style={{ color: colors.black, marginLeft: 4, fontSize: 12 }}>Vol 0.728</Text>
                      </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                      <Text style={{ color: colors.green, marginLeft: 6 }}>8.0%</Text>
                      <UpImage />
                    </View>
                    <View>
                      <Text style={{ fontSize: 13 }}>≈ INR : 35,831.85</Text>
                      <Text style={{ fontSize: 13 }}>≈ INR : 35,831.85</Text>
                    </View>
                  </View>

                </View>
              ) : (
                ""
              )}

              {tabColor === 1 ? (
                <View>
                  <View style={{ flex: 1, flexDirection: 'row', height: 40, marginTop: 16, alignItems: 'center' }}>
                    <View style={{ height: 35, width: 35, marginRight: 8 }}>
                      <Btc />
                    </View>

                    <View >
                      <Text style={{ color: colors.black, fontSize: 13 }}>BTC<Text style={{ color: colors.grey, fontSize: 11 }}>/INR</Text></Text>
                      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ height: 10, width: 10 }}><Star /></View>
                        <Text style={{ color: colors.black, marginLeft: 4, fontSize: 12 }}>Vol 0.728</Text>

                      </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                      <Text style={{ color: colors.red, marginLeft: 6 }}>-8.0%</Text>
                      <DownImage />
                    </View>
                    <View>
                      <Text style={{ fontSize: 13 }}>≈ INR : 35,831.85</Text>
                      <Text style={{ fontSize: 13 }}>≈ INR : 35,831.85</Text>
                    </View>

                  </View>

                  <View style={{ flex: 1, flexDirection: 'row', height: 40, marginTop: 16, alignItems: 'center' }}>
                    <View style={{ height: 35, width: 35, marginRight: 8 }}>
                      <Btc />
                    </View>
                    <View >
                      <Text style={{ color: colors.black, fontSize: 13 }}>BTC<Text style={{ color: colors.grey, fontSize: 11 }}>/INR</Text></Text>
                      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ height: 10, width: 10 }}><Star /></View>
                        <Text style={{ color: colors.black, marginLeft: 4, fontSize: 12 }}>Vol 0.728</Text>
                      </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                      <Text style={{ color: colors.green, marginLeft: 6 }}>8.0%</Text>
                      <UpImage />
                    </View>
                    <View>
                      <Text style={{ fontSize: 13 }}>≈ INR : 35,831.85</Text>
                      <Text style={{ fontSize: 13 }}>≈ INR : 35,831.85</Text>
                    </View>
                  </View>

                </View>
              ) : (
                ""
              )}

              {tabColor === 2 ? (
                <View>
                  <View style={{ flex: 1, flexDirection: 'row', height: 40, marginTop: 16, alignItems: 'center' }}>
                    <View style={{ height: 35, width: 35, marginRight: 8 }}>
                      <Btc />
                    </View>

                    <View >
                      <Text style={{ color: colors.black, fontSize: 13 }}>BTC<Text style={{ color: colors.grey, fontSize: 11 }}>/INR</Text></Text>
                      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ height: 10, width: 10 }}><Star /></View>
                        <Text style={{ color: colors.black, marginLeft: 4, fontSize: 12 }}>Vol 0.728</Text>

                      </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                      <Text style={{ color: colors.red, marginLeft: 6 }}>-8.0%</Text>
                      <DownImage />
                    </View>
                    <View>
                      <Text style={{ fontSize: 13 }}>≈ INR : 35,831.85</Text>
                      <Text style={{ fontSize: 13 }}>≈ INR : 35,831.85</Text>
                    </View>

                  </View>

                  <View style={{ flex: 1, flexDirection: 'row', height: 40, marginTop: 16, alignItems: 'center' }}>
                    <View style={{ height: 35, width: 35, marginRight: 8 }}>
                      <Btc />
                    </View>
                    <View >
                      <Text style={{ color: colors.black, fontSize: 13 }}>BTC<Text style={{ color: colors.grey, fontSize: 11 }}>/INR</Text></Text>
                      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ height: 10, width: 10 }}><Star /></View>
                        <Text style={{ color: colors.black, marginLeft: 4, fontSize: 12 }}>Vol 0.728</Text>
                      </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                      <Text style={{ color: colors.green, marginLeft: 6 }}>8.0%</Text>
                      <UpImage />
                    </View>
                    <View>
                      <Text style={{ fontSize: 13 }}>≈ INR : 35,831.85</Text>
                      <Text style={{ fontSize: 13 }}>≈ INR : 35,831.85</Text>
                    </View>
                  </View>

                </View>
              ) : (
                ""
              )}

              {tabColor === 3 ? (
                <View>
                  <View style={{ flex: 1, flexDirection: 'row', height: 40, marginTop: 16, alignItems: 'center' }}>
                    <View style={{ height: 35, width: 35, marginRight: 8 }}>
                      <Btc />
                    </View>

                    <View >
                      <Text style={{ color: colors.black, fontSize: 13 }}>BTC<Text style={{ color: colors.grey, fontSize: 11 }}>/INR</Text></Text>
                      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ height: 10, width: 10 }}><Star /></View>
                        <Text style={{ color: colors.black, marginLeft: 4, fontSize: 12 }}>Vol 0.728</Text>

                      </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                      <Text style={{ color: colors.red, marginLeft: 6 }}>-8.0%</Text>
                      <DownImage />
                    </View>
                    <View>
                      <Text style={{ fontSize: 13 }}>≈ INR : 35,831.85</Text>
                      <Text style={{ fontSize: 13 }}>≈ INR : 35,831.85</Text>
                    </View>

                  </View>

                  <View style={{ flex: 1, flexDirection: 'row', height: 40, marginTop: 16, alignItems: 'center' }}>
                    <View style={{ height: 35, width: 35, marginRight: 8 }}>
                      <Btc />
                    </View>
                    <View >
                      <Text style={{ color: colors.black, fontSize: 13 }}>BTC<Text style={{ color: colors.grey, fontSize: 11 }}>/INR</Text></Text>
                      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ height: 10, width: 10 }}><Star /></View>
                        <Text style={{ color: colors.black, marginLeft: 4, fontSize: 12 }}>Vol 0.728</Text>
                      </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                      <Text style={{ color: colors.green, marginLeft: 6 }}>8.0%</Text>
                      <UpImage />
                    </View>
                    <View>
                      <Text style={{ fontSize: 13 }}>≈ INR : 35,831.85</Text>
                      <Text style={{ fontSize: 13 }}>≈ INR : 35,831.85</Text>
                    </View>
                  </View>

                </View>
              ) : (
                ""
              )}

              {tabColor === 4 ? (
                <View>
                  <View style={{ flex: 1, flexDirection: 'row', height: 40, marginTop: 16, alignItems: 'center' }}>
                    <View style={{ height: 35, width: 35, marginRight: 8 }}>
                      <Btc />
                    </View>

                    <View >
                      <Text style={{ color: colors.black, fontSize: 13 }}>BTC<Text style={{ color: colors.grey, fontSize: 11 }}>/INR</Text></Text>
                      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ height: 10, width: 10 }}><Star /></View>
                        <Text style={{ color: colors.black, marginLeft: 4, fontSize: 12 }}>Vol 0.728</Text>

                      </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                      <Text style={{ color: colors.red, marginLeft: 6 }}>-8.0%</Text>
                      <DownImage />
                    </View>
                    <View>
                      <Text style={{ fontSize: 13 }}>≈ INR : 35,831.85</Text>
                      <Text style={{ fontSize: 13 }}>≈ INR : 35,831.85</Text>
                    </View>

                  </View>

                  <View style={{ flex: 1, flexDirection: 'row', height: 40, marginTop: 16, alignItems: 'center' }}>
                    <View style={{ height: 35, width: 35, marginRight: 8 }}>
                      <Btc />
                    </View>
                    <View >
                      <Text style={{ color: colors.black, fontSize: 13 }}>BTC<Text style={{ color: colors.grey, fontSize: 11 }}>/INR</Text></Text>
                      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ height: 10, width: 10 }}><Star /></View>
                        <Text style={{ color: colors.black, marginLeft: 4, fontSize: 12 }}>Vol 0.728</Text>
                      </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                      <Text style={{ color: colors.green, marginLeft: 6 }}>8.0%</Text>
                      <UpImage />
                    </View>
                    <View>
                      <Text style={{ fontSize: 13 }}>≈ INR : 35,831.85</Text>
                      <Text style={{ fontSize: 13 }}>≈ INR : 35,831.85</Text>
                    </View>
                  </View>

                </View>
              ) : (
                ""
              )}

              {tabColor === 5 ? (
                <View>
                  <View style={{ flex: 1, flexDirection: 'row', height: 40, marginTop: 16, alignItems: 'center' }}>
                    <View style={{ height: 35, width: 35, marginRight: 8 }}>
                      <Btc />
                    </View>

                    <View >
                      <Text style={{ color: colors.black, fontSize: 13 }}>BTC<Text style={{ color: colors.grey, fontSize: 11 }}>/INR</Text></Text>
                      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ height: 10, width: 10 }}><Star /></View>
                        <Text style={{ color: colors.black, marginLeft: 4, fontSize: 12 }}>Vol 0.728</Text>

                      </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                      <Text style={{ color: colors.red, marginLeft: 6 }}>-8.0%</Text>
                      <DownImage />
                    </View>
                    <View>
                      <Text style={{ fontSize: 13 }}>≈ INR : 35,831.85</Text>
                      <Text style={{ fontSize: 13 }}>≈ INR : 35,831.85</Text>
                    </View>

                  </View>

                  <View style={{ flex: 1, flexDirection: 'row', height: 40, marginTop: 16, alignItems: 'center' }}>
                    <View style={{ height: 35, width: 35, marginRight: 8 }}>
                      <Btc />
                    </View>
                    <View >
                      <Text style={{ color: colors.black, fontSize: 13 }}>BTC<Text style={{ color: colors.grey, fontSize: 11 }}>/INR</Text></Text>
                      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ height: 10, width: 10 }}><Star /></View>
                        <Text style={{ color: colors.black, marginLeft: 4, fontSize: 12 }}>Vol 0.728</Text>
                      </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                      <Text style={{ color: colors.green, marginLeft: 6 }}>8.0%</Text>
                      <UpImage />
                    </View>
                    <View>
                      <Text style={{ fontSize: 13 }}>≈ INR : 35,831.85</Text>
                      <Text style={{ fontSize: 13 }}>≈ INR : 35,831.85</Text>
                    </View>
                  </View>

                </View>
              ) : (
                ""
              )}

            </CustomTabPanel>

            <CustomTabPanel value={value} index={1}>
              <View style={styles.inputStyleCrypto}>
                <TextInput
                  style={{
                    flex: 1, height: 40, color: "#000"
                  }}
                  placeholder="Search crypto"
                  placeholderTextColor="#000"
                />
                <View style={{ height: 18, width: 18 }}>
                  <Search />
                </View>
              </View>

              <View style={{ marginTop: 10, flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.headerText}>Favorite</Text>
                </View>

                <View style={{ marginRight: 10 }}>
                  <Text>Sort By</Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                  <DropDownPicker
                    open={open}
                    value={selectedValue}
                    items={items}
                    setOpen={setOpen}
                    setValue={setSelectedValue}
                    setItems={setItems}
                    placeholder="Rank"
                    style={{ width: 100 }}
                    dropDownContainerStyle={{ height: 68 }}
                  />
                </View>
              </View>

              <View style={{ flex: 1, flexDirection: 'row', height: 40, marginTop: 10, alignItems: 'center' }}>
                <View style={{ height: 35, width: 35, marginRight: 8 }}>
                  <Btc />
                </View>

                <View >
                  <Text style={{ color: colors.black, fontSize: 13 }}>BTC<Text style={{ color: colors.grey, fontSize: 11 }}>/INR</Text></Text>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ height: 10, width: 10 }}><Star /></View>
                    <Text style={{ color: colors.black, marginLeft: 4, fontSize: 12 }}>Vol 0.728</Text>

                  </View>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={{ color: colors.red, marginLeft: 4 }}>-8.0%</Text>
                  <DownImage />
                </View>
                <View>
                  <Text style={{ fontSize: 13 }}>≈ INR : 35,831.85</Text>
                  <Text style={{ fontSize: 13 }}>≈ INR : 35,831.85</Text>
                </View>

              </View>

            </CustomTabPanel>
          </View>
        </View>
      </ScrollView >
    </Wrap >
  );
};

export default Market;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    fontFamily: 'Roboto',
  },
  Button: {
    color: '#F59300',
    backgroundColor: '#fff',
    marginTop: 15,
    borderRadius: 10
  },
  inputStyle: {
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#000",
    paddingHorizontal: 10,
    flex: 1,
    flexDirection: 'row',
    marginLeft: 10,
    alignItems: 'center',
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
  headerText: {
    color: "#fff",
    backgroundColor: "#007CFF",
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: 91
  },
  tabButton: {
    backgroundColor: 'transparent',
    paddingHorizontal: 20,
    color: colors.black
  }
})