
'use strict';


import React, { Component } from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    ListView,
    Image,
    View
} from 'react-native';


import Header from './Header';

import HomePage from './HomePage';
import TabNavigator from 'react-native-tab-navigator';

import GpcTabNavigator from './components/GpcTabNavigator';



export default class MainScreen2 extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        //selectedTab: HOME
    };

    _renderTabIndicator() {
        let tabs = [
            {
                text: 'Home',
                iconSource: require('./images/view_pager/ic_tab_home_normal@2x.png'),
                selectedIconSource: require('./images/view_pager/ic_tab_home_click@2x.png')
            },
            {
                text: 'Message',
                iconSource: require('./images/view_pager/ic_tab_task_normal@2x.png'),
                selectedIconSource: require('./images/view_pager/ic_tab_task_click@2x.png')
            },
            {
                text: 'Profile',
                iconSource: require('./images/view_pager/ic_tab_my_normal@2x.png'),
                selectedIconSource: require('./images/view_pager/ic_tab_my_click@2x.png')
            }
        ];
        return (
            <GpcTabNavigator initialPage={2}
                tabs={tabs}
            />
        );
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Header />

                {this._renderTabIndicator()}
            </View >
        );
    }
}

const styles = StyleSheet.create({
    tab: {
        height: 52,
        backgroundColor: '#303030',
        alignItems: 'center',
    },
    tabIcon: {
        width: 30,
        height: 35,
        resizeMode: 'stretch',
        marginTop: 12.5
    }
});