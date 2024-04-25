import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {SearchInput, Wrap} from '../../common';
import styles from './DiscoverStyle';
import {Images, colors} from '../../../theme';
import Singleton from '../../../helpers/Singleton';

let ServiceList = [
  {
    name: 'History',
  },
  {
    name: 'Top Searches',
  },
  {
    name: 'Favourites',
  },
];

let HistoryDataList = [
  {
    icon: Images.demo,
    title: 'https://ckdsvfddkvfvvdf.coom',
    subtitle:
      'Listed below are some of the Referral Marketing Projects .You can Join join them free of cost....',
  },
  {
    icon: Images.demo,
    title: 'https://ckdsvfddkvfvvdf.coom',
    subtitle:
      'Listed below are some of the Referral Marketing Projects .You can Join join them free of cost....',
  },
  {
    icon: Images.demo,
    title: 'https://ckdsvfddkvfvvdf.coom',
    subtitle:
      'Listed below are some of the Referral Marketing Projects .You can Join join them free of cost....',
  },
];

const Discover = () => {
  const [searchtxt, setsearchtxt] = useState('');
  const [tabselection, settabselection] = useState('History');

  const ServiceTab = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 30,
          justifyContent: 'space-between',
          backgroundColor: colors.white,
          borderWidth: 1,
          borderRadius: 5,
          borderColor: colors.lightGray,
          alignItems: 'center',
        }}>
        {ServiceList.map(item => {
          return (
            <TouchableOpacity
              onPress={() => settabselection(item.name)}
              style={{
                width: '33.5%',
                height: 30,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 5,
                backgroundColor:
                  tabselection == item.name ? colors.green : colors.transparent,
              }}>
              <Text
                style={{
                  lineHeight: 22,
                  fontSize: 13,
                  fontWeight: '400',
                  color:
                    tabselection == item.name ? colors.white : colors.black,
                }}>
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  const HistoryList = () => {
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 10,
            marginBottom: 15,
          }}>
          <Text
            style={{
              lineHeight: 22,
              fontSize: 20,
              fontWeight: '700',
              color: colors.text_blue,
            }}>
            {'History'}
          </Text>
          <Text
            style={{
              lineHeight: 22,
              fontSize: 15,
              fontWeight: '400',
              color: colors.green,
            }}>
            {'See all'}
          </Text>
        </View>
        <View style={{}}>
          {HistoryDataList.map(item => {
            return (
              <View style={{}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View
                    style={{
                      height: 40,
                      width: 40,
                      alignItems: 'center',
                      backgroundColor: colors.box_grey,
                      borderRadius: 5,
                      justifyContent: 'center',
                    }}>
                    <Image
                      source={item.icon}
                      style={{width: 20, height: 20, resizeMode: 'contain'}}
                    />
                  </View>
                  <View style={{marginLeft: 15}}>
                    <Text
                      style={{
                        lineHeight: 17,
                        fontSize: 12,
                        fontWeight: '500',
                        color: colors.black,
                      }}>
                      {item.title}
                    </Text>
                    <Text
                      style={{
                        lineHeight: 22,
                        fontSize: 13,
                        fontWeight: '400',
                        color: colors.black,
                      }}>
                      {item.subtitle}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    height: 1,
                    width: '100%',
                    backgroundColor: colors.border,
                    marginBottom: 15,
                    marginTop: 10,
                  }}
                />
              </View>
            );
          })}
        </View>
      </View>
    );
  };

  const NewDappList = () => {
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 10,
            marginBottom: 15,
          }}>
          <Text
            style={{
              lineHeight: 22,
              fontSize: 20,
              fontWeight: '700',
              color: colors.text_blue,
            }}>
            {'New Dapps'}
          </Text>
          <Text
            style={{
              lineHeight: 22,
              fontSize: 15,
              fontWeight: '400',
              color: colors.green,
            }}>
            {'See all'}
          </Text>
        </View>
        <View style={{}}>
          {HistoryDataList.map(item => {
            return (
              <View style={{}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View
                    style={{
                      height: 40,
                      width: 40,
                      alignItems: 'center',
                      backgroundColor: colors.box_grey,
                      borderRadius: 5,
                      justifyContent: 'center',
                    }}>
                    <Image
                      source={item.icon}
                      style={{width: 20, height: 20, resizeMode: 'contain'}}
                    />
                  </View>
                  <View style={{marginLeft: 15}}>
                    <Text
                      style={{
                        lineHeight: 17,
                        fontSize: 12,
                        fontWeight: '500',
                        color: colors.black,
                      }}>
                      {item.title}
                    </Text>
                    <Text
                      style={{
                        lineHeight: 22,
                        fontSize: 13,
                        fontWeight: '400',
                        color: colors.black,
                      }}>
                      {item.subtitle}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    height: 1,
                    width: '100%',
                    backgroundColor: colors.border,
                    marginBottom: 15,
                    marginTop: 10,
                  }}
                />
              </View>
            );
          })}
        </View>
      </View>
    );
  };

  return (
    <Wrap>
      <View style={{paddingHorizontal: 20, marginTop: 40}}>
        <Text style={styles.header}>{`Discover`}</Text>

        <View
          style={{marginHorizontal: 10, marginTop: 30, flexDirection: 'row'}}>
          <View style={{flex: 0.8}}>
            <SearchInput
              style={{}}
              inputStyle={{backgroundColor: 'transparent', borderRadius: 10}}
              placeholder={'Enter search or web address'}
              value={searchtxt}
              onChangeText={setsearchtxt}
              onSubmitEditing={() => {
                Actions.currentScene != 'DappBrowser' &&
                  Actions.DappBrowser({
                    enteredUrl: searchtxt,
                  });
              }}
            />
          </View>
          <View
            style={{
              flex: 0.2,
              flexDirection: 'row',
              marginTop: 10,
              marginLeft: 10,
            }}>
            <TouchableOpacity
              onPress={() => {
                Actions.currentScene != 'DappBrowser' &&
                  Actions.DappBrowser({
                    enteredUrl: searchtxt,
                  });
              }}>
              <Image
                source={Images.send}
                style={{
                  height: 20,
                  width: 20,
                  marginLeft: 5,
                  resizeMode: 'contain',
                }}
              />
            </TouchableOpacity>

            <Image
              source={Images.scanner}
              style={{
                height: 20,
                width: 20,
                marginLeft: 10,
                resizeMode: 'contain',
              }}
            />
            <Image
              source={Images.more}
              style={{
                height: 20,
                width: 20,
                marginLeft: 10,
                resizeMode: 'contain',
              }}
            />
          </View>
        </View>

        {ServiceTab()}
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{}}>
            {HistoryList()}
            {NewDappList()}
          </View>
        </ScrollView>
      </View>
    </Wrap>
  );
};

export default Discover;
