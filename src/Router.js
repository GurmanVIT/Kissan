import React from 'react';
import {Scene, Router, Tabs} from 'react-native-router-flux';
import {BackHandler} from 'react-native';
import {
  Splash,
  Onboarding1,
  CreateNewWallet,
  CreatePin,
  ConfirmPin,
  Mneumonics,
  VerifyMneumonics,
  WalletBackup,
  RecoveryPhase,
  Discover,
  Me,
  EarnFree,
  MyAssests,
  Market,
  ImportWalletUseMnemonics,
  ImportWallet,
  DappBrowser,
  CoinDetails,
  SelectRecipient,
  SendEvm,
  MultiWalletList,
  ReceiveScreen,
  AddToken,
  LoginPin,
} from './components/screens';
import {colors, Images} from './theme';
import {TabIcon} from './components/common';
import {CreateMultiWallet} from './components/screens/MultiWalletList';
import CurrencyUnit from './components/screens/CurrencyUnit';

const RouterComponent = ({onRouteChanged}) => {
  return (
    <Router
      onStateChange={onRouteChanged}
      navigationBarStyle={{
        backgroundColor: 'rgba(0,0,0,0)',
        borderBottomWidth: 0,
      }}
      hideNavBar={false}
      leftButtonIconStyle={{width: 21, height: 18}}
      titleStyle={{color: '#fff'}}>
      <Scene key="root" hideNavBar>
        <Scene
          key="Splash"
          hideNavBar={true}
          component={Splash}
          gestureEnable={false}
          panHandlers={null}
        />
        <Scene
          key="Onboarding1"
          hideNavBar={true}
          component={Onboarding1}
          gestureEnable={false}
          panHandlers={null}
        />
        <Scene
          key="CreateNewWallet"
          hideNavBar={true}
          component={CreateNewWallet}
          gestureEnable={false}
          panHandlers={null}
        />
        <Scene
          key="CreatePin"
          hideNavBar={true}
          component={CreatePin}
          gestureEnable={false}
          panHandlers={null}
        />
        <Scene
          key="ConfirmPin"
          hideNavBar={true}
          component={ConfirmPin}
          gestureEnable={false}
          panHandlers={null}
        />
        <Scene
          key="LoginPin"
          hideNavBar={true}
          component={LoginPin}
          gestureEnable={false}
          panHandlers={null}
        />
        <Scene
          key="WalletBackup"
          hideNavBar={true}
          component={WalletBackup}
          gestureEnable={false}
          panHandlers={null}
        />
        <Scene
          key="VerifyMneumonics"
          hideNavBar={true}
          component={VerifyMneumonics}
          gestureEnable={false}
          panHandlers={null}
        />
        <Scene
          key="Mneumonics"
          hideNavBar={true}
          component={Mneumonics}
          gestureEnable={false}
          panHandlers={null}
        />
        <Scene
          key="RecoveryPhase"
          hideNavBar={true}
          component={RecoveryPhase}
          gestureEnable={false}
          panHandlers={null}
        />
        <Scene
          key="ImportWalletUseMnemonics"
          hideNavBar={true}
          component={ImportWalletUseMnemonics}
          gestureEnable={false}
          panHandlers={null}
        />
        <Scene
          key="ImportWallet"
          hideNavBar={true}
          component={ImportWallet}
          gestureEnable={false}
          panHandlers={null}
        />
        <Scene
          key="CurrencyUnit"
          hideNavBar={true}
          component={CurrencyUnit}
          gestureEnable={false}
          panHandlers={null}
        />
        <Scene
          key="MultiWalletList"
          hideNavBar={true}
          component={MultiWalletList}
          gestureEnable={false}
          panHandlers={null}
        />
        <Scene
          key="CreateMultiWallet"
          hideNavBar={true}
          component={CreateMultiWallet}
          gestureEnable={false}
          panHandlers={null}
        />
        <Scene
          hideNavBar={true}
          key="DappBrowser"
          component={DappBrowser}
          gestureEnable={false}
          panHandlers={null}
        />
        <Scene
          hideNavBar={true}
          key="CoinDetails"
          component={CoinDetails}
          gestureEnable={false}
          panHandlers={null}
        />
        <Scene
          hideNavBar={true}
          key="SelectRecipient"
          component={SelectRecipient}
          gestureEnable={false}
          panHandlers={null}
        />
        <Scene
          hideNavBar={true}
          key="SendEvm"
          component={SendEvm}
          gestureEnable={false}
          panHandlers={null}
        />
        <Scene
          hideNavBar={true}
          key="ReceiveScreen"
          component={ReceiveScreen}
          gestureEnable={false}
          panHandlers={null}
        />
        <Scene
          hideNavBar={true}
          key="AddToken"
          component={AddToken}
          gestureEnable={false}
          panHandlers={null}
        />
        <Scene key="Main" hideNavBar wrap={false}>
          <Tabs
            showLabel={false}
            tabStyle={{
              height: 50,
              borderTopColor: 'rgb(0, 0, 0, 0.7)',
              borderTopWidth: 0.3,
              backgroundColor: colors.white,
              justifyContent: 'space-between',
            }}
            lazy={true}
            swipeEnabled={false}
            gestureEnable={false}
            panHandlers={null}
            type="reset"
            // tabBarComponent={(props) => {
            //   return (
            //     <CustomTabBar
            //       navigation={props.navigation}
            //       ref={(ref) => {
            //         Singleton.bottomBar = ref;
            //       }}
            //     />
            //   );
            // }}
          >
            <Scene
              hideNavBar={true}
              key="MyAssests"
              component={MyAssests}
              gestureEnable={false}
              panHandlers={null}
              icon={({focused}) => (
                <TabIcon
                  focused={focused}
                  title={'My Assets'}
                  ImgSize={{width: 14, height: 14}}
                  activeImg={Images.myassets}
                  defaultImg={Images.myassets}
                />
              )}
            />
            <Scene
              hideNavBar={true}
              key="Market"
              component={Market}
              gestureEnable={false}
              panHandlers={null}
              icon={({focused}) => (
                <TabIcon
                  focused={focused}
                  title={'Market'}
                  ImgSize={{width: 14, height: 14}}
                  activeImg={Images.market}
                  defaultImg={Images.market}
                />
              )}
            />
            <Scene
              hideNavBar={true}
              key="Discover"
              component={Discover}
              gestureEnable={false}
              panHandlers={null}
              icon={({focused}) => (
                <TabIcon
                  focused={focused}
                  title={'Discover'}
                  ImgSize={{width: 14, height: 14}}
                  activeImg={Images.discover}
                  defaultImg={Images.discover}
                />
              )}
            />
            <Scene
              hideNavBar={true}
              key="Earn Free"
              component={EarnFree}
              gestureEnable={false}
              panHandlers={null}
              icon={({focused}) => (
                <TabIcon
                  focused={focused}
                  title={'Earn Free'}
                  ImgSize={{width: 14, height: 14}}
                  activeImg={Images.earn_reward}
                  defaultImg={Images.earn_reward}
                />
              )}
            />

            <Scene
              hideNavBar={true}
              key="Me"
              component={Me}
              gestureEnable={false}
              panHandlers={null}
              icon={({focused}) => (
                <TabIcon
                  focused={focused}
                  title={'Me'}
                  ImgSize={{width: 14, height: 14}}
                  activeImg={Images.me}
                  defaultImg={Images.me}
                />
              )}
            />
          </Tabs>
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
