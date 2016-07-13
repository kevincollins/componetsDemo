/**
 * Created by 58 on 2016/7/7.
 */


import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

import Swiper from '../../components/viewpager/ViewPageSwiper'

const styles = StyleSheet.create({
    wrapper: {},

    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },

    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },

    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },

    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    }
})

export default class BasicSample extends React.Component {
    _onMomentumScrollEnd(e, state, context) {
        // you can get `state` and `this`(ref to swiper's context) from params
        console.log(state, context.state)
    }

    render() {
        return (
            <Swiper style={styles.wrapper} height={240}
                    onMomentumScrollEnd={this._onMomentumScrollEnd}
                    showsButtons={false}
                    loop={true}
                    autoplay={true}
            >
                <View style={styles.slide1}>
                    <Text style={styles.text}>1111</Text>
                </View>
                <View style={styles.slide2}>
                    <Text style={styles.text}>22222</Text>
                </View>
                <View style={styles.slide3}>
                    <Text style={styles.text}>33333</Text>
                </View>
            </Swiper>
        )
    }
}
