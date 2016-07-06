
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

import ImageSelect from './ImageSelect';
import HomePage from './HomePage';
import InnerPageTitle from './InnerPageTitle';

import TabNavigator from 'react-native-tab-navigator';

const HOME = 'home';
const HOME_NORMAL = require('./images/tabs/home_normal.png');
const HOME_FOCUS = require('./images/tabs/home_focus.png');
const CATEGORY = 'category';
const CATEGORY_NORMAL = require('./images/tabs/category_normal.png');
const CATEGORY_FOCUS = require('./images/tabs/category_focus.png');

const CART = 'cart';
const CART_NORMAL = require('./images/tabs/cart_normal.png');
const CART_FOCUS = require('./images/tabs/cart_focus.png');
const PERSONAL = 'personal';
const PERSONAL_NORMAL = require('./images/tabs/personal_normal.png');
const PERSONAL_FOCUS = require('./images/tabs/personal_focus.png');

export default class MainScreen extends Component {

    constructor(props) {
        super(props);
        //this.state = {selectedTab: HOME}
    }
    state = {
        selectedTab: HOME
    }

    _renderTabItem(index, icon, iconSelected, tag, childView) {
        return (
            <TabNavigator.Item
                key={tag}
                selected={this.state.selectedTab === tag}
                renderIcon={() => <Image style={styles.tabIcon} source={icon}/>}
                renderSelectedIcon={() => <Image style={styles.tabIcon} source={iconSelected}/>}
                onPress={() => this.setState({ selectedTab: tag })}>
                {childView}
            </TabNavigator.Item>
        );
    }

    static _createChildView(tag) {
        return (
            <View style={{flex:1,backgroundColor:'#00baff',alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontSize:22}}>{tag}</Text>
            </View>
        )
    }

    renderTabItem(){
        let tabs = [
            {
                tag: HOME,
                icon: HOME_NORMAL,
                iconSelected: HOME_FOCUS
            },
            {
                tag: CATEGORY,
                icon: CATEGORY_NORMAL,
                iconSelected: CATEGORY_FOCUS
            },
            {
                tag: CART,
                icon: CART_NORMAL,
                iconSelected: CART_FOCUS
            },
            {
                tag: PERSONAL,
                icon: PERSONAL_NORMAL,
                iconSelected: PERSONAL_FOCUS
            },
        ];


        let tabsView = tabs.map((tab, index) => {
            if(index==0){
                return (
                    this._renderTabItem(index,tab.icon,tab.iconSelected,tab.tag,<HomePage nav={this.props.nav}/> )
                );
            }

            if(index==1){
                return (
                    this._renderTabItem(index,tab.icon,tab.iconSelected,tab.tag,<ImageSelect/> )
                );
            }
            if(index==2){
                return (
                    this._renderTabItem(index,tab.icon,tab.iconSelected,tab.tag,<InnerPageTitle/> )
                );
            }
            return (
                this._renderTabItem(index,tab.icon,tab.iconSelected,tab.tag,MainScreen._createChildView(tab.tag))
            );
        });
        return tabsView;
    }



    render() {
        return (
            <View style={{flex: 1}}>
                <Header />
                <TabNavigator hidesTabTouch={true} tabBarStyle={styles.tab}>
                    {/**
                    {this._renderTabItem(HOME_NORMAL, HOME_FOCUS, HOME, <HomePage nav={this.props.nav}/>)}
                    {this._renderTabItem(CATEGORY_NORMAL, CATEGORY_FOCUS, CATEGORY, MainScreen._createChildView(CATEGORY))}
                    {this._renderTabItem(CART_NORMAL, CART_FOCUS, CART, MainScreen._createChildView(CART))}
                    {this._renderTabItem(PERSONAL_NORMAL, PERSONAL_FOCUS, PERSONAL, MainScreen._createChildView(PERSONAL))}
                    */}

                    {this.renderTabItem()}
                </TabNavigator>
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