
import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Wrap } from '../../common';
import { colors } from '../../../theme';
import Hero from '../../../assets/svg/Hero';
import Star1 from '../../../assets/svg/Star1';


const EarnFree = () => {

  const [tabColor, setTabColor] = useState(0);

  return (
    <Wrap>
      <ScrollView style={styles.container} behavior="padding">
        <View style={{ marginTop: 15 }}>
          <View>
            <Text style={{ color: colors.black }}>
              Earn Free
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
              width: '33.33%',
              paddingHorizontal: 3,
              fontSize: 12
            })}
            onPress={() => setTabColor(0)}
          >
            Invite/ Refer Friend
          </Text>

          <Text
            style={(styles.tabButton, {
              textAlign: 'center',
              color: tabColor === 1 ? "white" : "gray",
              backgroundColor: tabColor === 1 ? "green" : "white",
              paddingVertical: 7,
              borderRadius: tabColor === 1 ? 5 : 0,
              width: '33.33%',
              paddingHorizontal: 3,
              fontSize: 12
            })}
            onPress={() => setTabColor(1)}>
            Free Airdrops
          </Text>

          <Text
            style={(styles.tabButton, {
              textAlign: 'center',
              color: tabColor === 2 ? "white" : "gray",
              backgroundColor: tabColor === 2 ? "green" : "white",
              paddingVertical: 7,
              borderRadius: tabColor === 2 ? 5 : 0,
              width: '33.33%',
              paddingHorizontal: 3,
              fontSize: 12
            })}
            onPress={() => setTabColor(2)}>
            Marketing Products
          </Text>
        </View>

        {tabColor === 1 ? (
          <View>

            <View>
              <Text style={styles.headerStyle}>Exclusive Crypto Airdrops</Text>
              <Text style={styles.headerStyle}>Listed below are all the current live exclusive crypto airdrops, including Cryptocurrencies, Tokens and other Crypto Assets. Keep watching this place for upcoming  Airdrops .</Text>
            </View>
            <View style={styles.card}>
              <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.innerText}>Starts In: <Text style={{ color: colors.grey }}> Jan 26,2022 5:30</Text></Text>
                <Text style={styles.innerText}>Ends In:  <Text style={{ color: colors.grey }}> Mar 26,2022 5:30</Text></Text>
              </View>
              <View style={{ marginTop: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <View style={{ width: 70, height: 50, alignItems: 'center', flexDirection: 'row' }}>
                  <Hero />
                  <View >
                    <Text style={styles.heroText}>Hero Seri Airdrops</Text>
                    <Text style={styles.daysText}>12 Days Left</Text>
                  </View>
                </View>
                <Text style={styles.greenButton}>Ongling</Text>
              </View>
              <View>
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                  <Text style={styles.cardText}>Rewards:</Text>
                  <Text style={styles.winnerContent}> 1000000 $HSI, 75HSI for rendom 1000 Winners,
                    {'\n'} Top 50 referrers will share 25,000 $HSI
                  </Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 5 }}>
                  <Text style={styles.cardText}>Winner:</Text>
                  <Text style={styles.winnerContent}> 1000 winners
                  </Text>
                </View>
              </View>
              <View style={styles.cardBottomSection}>
                <View style={styles.starImg}>
                  <Star1 />
                  <Star1 />
                  <Star1 />
                  <Star1 />
                  <Star1 />
                </View>
                <Text style={styles.primaryButton}>Join Now</Text>
              </View>
            </View>

            <View style={styles.card}>
              <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.innerText}>Starts In: <Text style={{ color: colors.grey }}> Jan 26,2022 5:30</Text></Text>
                <Text style={styles.innerText}>Ends In:  <Text style={{ color: colors.grey }}> Mar 26,2022 5:30</Text></Text>
              </View>
              <View style={{ marginTop: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <View style={{ width: 70, height: 50, alignItems: 'center', flexDirection: 'row' }}>
                  <Hero />
                  <View >
                    <Text style={styles.heroText}>Hero Seri Airdrops</Text>
                    <Text style={styles.daysText}>12 Days Left</Text>
                  </View>
                </View>
                <Text style={styles.greenButton}>Ongling</Text>
              </View>
              <View>
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                  <Text style={styles.cardText}>Rewards:</Text>
                  <Text style={styles.winnerContent}> 1000000 $HSI, 75HSI for rendom 1000 Winners,
                    {'\n'} Top 50 referrers will share 25,000 $HSI
                  </Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 5 }}>
                  <Text style={styles.cardText}>Winner:</Text>
                  <Text style={styles.winnerContent}> 1000 winners
                  </Text>
                </View>
              </View>
              <View style={styles.cardBottomSection}>
                <View style={styles.starImg}>
                  <Star1 />
                  <Star1 />
                  <Star1 />
                  <Star1 />
                  <Star1 />
                </View>
                <Text style={styles.primaryButton}>Join Now</Text>
              </View>
            </View>

          </View>
        ) : (
          ""
        )}


        {tabColor === 2 ? (
          <View>
            <View>
              <Text style={styles.headerStyle}>Listed below are some of the Referral Marketing Projects .You can Join join them free of cost , evaluate them and invest amount at your own risk & discretion  . We will not be responsible for any of your losses .</Text>
              <Text style={styles.headerStyle}>This initiative is taken only to give you multiple amount of income sources . Keep watching this place for best upcoming projects .</Text>
            </View>

            <View><Text style={styles.cardHeaderText}>Project 1</Text></View>
            <View style={styles.card}>
              <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.innerText}>Starts In: <Text style={{ color: colors.grey }}> Jan 26,2022 5:30</Text></Text>
                <Text style={styles.innerText}>Ends In:  <Text style={{ color: colors.grey }}> Mar 26,2022 5:30</Text></Text>
              </View>
              <View style={{ marginTop: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <View style={{ width: 70, height: 50, alignItems: 'center', flexDirection: 'row' }}>
                  <Hero />
                  <Text style={styles.heroText}>Hero Seri Airdrops</Text>
                </View>
                <Text style={styles.greenButton}>Ongling</Text>
              </View>
              <View>
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                  <Text style={styles.cardText}>Rewards:</Text>
                  <Text style={styles.winnerContent}> 1000000 $HSI, 75HSI for rendom 1000 Winners,
                    {'\n'} Top 50 referrers will share 25,000 $HSI
                  </Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 5 }}>
                  <Text style={styles.cardText}>Winner:</Text>
                  <Text style={styles.winnerContent}> 1000 winners
                  </Text>
                </View>
              </View>
              <View style={styles.cardBottomSection}>
                <View style={styles.starImg}>
                  <Star1 />
                  <Star1 />
                  <Star1 />
                  <Star1 />
                  <Star1 />
                </View>
                <Text style={styles.primaryButton}>Join Now</Text>
              </View>
            </View>

            <View><Text style={styles.cardHeaderText}>Project 2</Text></View>
            <View style={styles.card}>
              <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.innerText}>Starts In: <Text style={{ color: colors.grey }}> Jan 26,2022 5:30</Text></Text>
                <Text style={styles.innerText}>Ends In:  <Text style={{ color: colors.grey }}> Mar 26,2022 5:30</Text></Text>
              </View>
              <View style={{ marginTop: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <View style={{ width: 70, height: 50, alignItems: 'center', flexDirection: 'row' }}>
                  <Hero />
                  <Text style={styles.heroText}>Hero Seri Airdrops</Text>
                </View>
                <Text style={styles.greenButton}>Ongling</Text>
              </View>
              <View>
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                  <Text style={styles.cardText}>Rewards:</Text>
                  <Text style={styles.winnerContent}> 1000000 $HSI, 75HSI for rendom 1000 Winners,
                    {'\n'} Top 50 referrers will share 25,000 $HSI
                  </Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 5 }}>
                  <Text style={styles.cardText}>Winner:</Text>
                  <Text style={styles.winnerContent}> 1000 winners
                  </Text>
                </View>
              </View>
              <View style={styles.cardBottomSection}>
                <View style={styles.starImg}>
                  <Star1 />
                  <Star1 />
                  <Star1 />
                  <Star1 />
                  <Star1 />
                </View>
                <Text style={styles.primaryButton}>Join Now</Text>
              </View>
            </View>
          </View>
        ) : (
          ""
        )}

      </ScrollView>
    </Wrap >
  );
};

export default EarnFree;

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
    width: '100%',
    padding: 1,
    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    padding: 10
  },
  cardHeaderText: {
    fontWeight: "800",
    marginTop: 15,
    color: colors.appPrimary,
    fontSize: 19,
  },
  cardText: {
    flexDirection: 'row',
    color: colors.black,
    fontWeight: "600",
    marginTop: -1,
  },
  heroText: {
    width: 130,
    color: colors.black,
    fontWeight: "600",
    fontSize: 15
  },
  daysText: {
    color: colors.red,
    fontWeight: "600",
    fontSize: 13,
  },
  winnerContent: {
    color: colors.grey,
    fontSize: 13,
    fontWeight: "400",
  },
  innerText: {
    fontSize: 12,
    color: colors.black,
    fontWeight: "600",
  },
  primaryButton: {
    backgroundColor: colors.appPrimary,
    color: colors.white,
    fontSize: 12,
    paddingBottom: 5,
    paddingTop: 3,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  greenButton: {
    backgroundColor: colors.green,
    fontSize: 12,
    paddingTop: 3,
    paddingBottom: 5,
    paddingHorizontal: 10,
    borderRadius: 6,
    color: colors.white,
  },
  starImg: {
    width: 20,
    height: 20,
    flexDirection: 'row',
  },
  cardBottomSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    alignItems: 'center'
  },
})