
'use strict';

import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    Alert,
    ListView,
    RefreshControl,
    Dimensions,
    PixelRatio,
    Animated,
    Easing,
    TouchableWithoutFeedback
}from 'react-native';


import MyViewpager from './MyViewpager';


const len = 160;

const wordsArr = ["jack123","lily","kevin"];

export default class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            displayWord: wordsArr[0],
            fadeInOpacity: new Animated.Value(0), // 初始值
            rotation: new Animated.Value(0),
            fontSize: new Animated.Value(0),
        };
    }

    componentDidMount() {
        var timing = Animated.timing;
        Animated.parallel(['fadeInOpacity', 'rotation', 'fontSize'].map(property => {
            return timing(this.state[property], {
                toValue: 1,
                duration: 1000,
                easing: Easing.linear
            });
        })).start();
    }

    render() {
        return (
            <View>
                <MyViewpager/>

                <Animated.View
                    style={[styles.demo, {
                        opacity: this.state.fadeInOpacity,
                        transform: [{
                            rotateZ: this.state.rotation.interpolate({
                                inputRange: [0,1],
                                outputRange: ['0deg', '360deg']
                            })
                        }]
                    }
                ]}
                >
                    <Animated.Text style={{
                fontSize: this.state.fontSize.interpolate({
                    inputRange: [0,1],
                    outputRange: [12,26]
                })
            }}>{'hello,' + this.state.displayWord}</Animated.Text>
                </Animated.View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        height: 130,
        resizeMode: 'stretch'
    },
    demo: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    text:{
        fontSize: 30
    }
});