
import React from 'react';
import { TextInput, Image, View, Text, StyleSheet, TouchableWithoutFeedback, Dimensions, ActivityIndicator } from 'react-native';
import { Fonts } from '../../theme'
const LoaderView = ({ isLoading }) => {
    if (isLoading == true) {
        return (
            <View style={styles.mainView}>
                <ActivityIndicator
                    animating={isLoading}
                    size={'large'}
                    color={'white'}
                />
                <Text style={{ fontFamily: Fonts.regular, color: 'white' }}>Loading...</Text>
            </View>
        )
    } else {
        return null
    }
}

const styles = StyleSheet.create({
    mainView: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        position: 'absolute',
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height,
        backgroundColor: 'rgba(52, 52, 52, 0.4)',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 100
    },
});

export { LoaderView }