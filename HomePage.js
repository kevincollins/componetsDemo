
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
import MenuButton from './components/MenuButton';

import ImageSelect from './ImageSelect';

const len = 160;

const wordsArr = ["jack123","lily","kevin"];

export default class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            displayWord: wordsArr[0],
        };

    }

    componentDidMount() {

    }

    _onMenuClick(title, tag) {
        Alert.alert('提示', '你点击了:' + title + " Tag:" + tag);
    }

    _onPressButton(){

    }

    render() {
        return (
            <View>
                <MyViewpager/>
                <View style={styles.menuView}>
                    <MenuButton renderIcon={require('./images/home_icons/wdgz.png')}
                                showText={'我的关注'} tag={'wdgz'}
                                onClick={this._onMenuClick}/>
                    <MenuButton renderIcon={require('./images/home_icons/wlcx.png')}
                                showText={'物流查询'} tag={'wlcx'}
                                onClick={this._onMenuClick}/>
                    <MenuButton renderIcon={require('./images/home_icons/cz.png')}
                                showText={'充值'} tag={'cz'}
                                onClick={this._onMenuClick}/>
                    <MenuButton renderIcon={require('./images/home_icons/dyp.png')}
                                showText={'电影票'} tag={'dyp'}
                                onClick={this._onMenuClick}/>
                </View>

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
    menuView: {
        flexDirection: 'row',
        marginTop: 10
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