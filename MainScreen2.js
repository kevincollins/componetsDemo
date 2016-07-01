
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



import IndicatorViewPager from './components/viewpager/IndicatorViewPager';
import PagerTabIndicator from './components/viewpager/indicator/PagerTabIndicator';


export default class MainScreen2 extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        //selectedTab: HOME
    };

    static propTypes = {
        ...View.propTypes
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
            <PagerTabIndicator
                tabs={tabs}
            />
        );
    }

    render() {
        return (
            <IndicatorViewPager
                style={{flex:1}}
                indicator={this._renderTabIndicator()}
            >
                <View style={{backgroundColor:'#1AA094'}}>
                    <Text>Home Page</Text>
                </View>
                <View style={{backgroundColor:'#1AA094'}}>
                    <Text>Message Page</Text>
                </View>
                <View style={{backgroundColor:'#1AA094'}}>
                    <Text>Profile Page</Text>
                </View>
            </IndicatorViewPager>
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