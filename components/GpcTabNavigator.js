/**
 * Created by 58 on 2016/6/16.
 */

'use strict';

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Navigator,
    Text,
    Image,
    Platform,
    Animated,
    TouchableOpacity,
    ViewPagerAndroid,
    View
} from 'react-native';

export default class GpcTabNavigator extends Component {

    constructor(props) {
        super(props);

    }

    state = {
        selectedIndex: this.props.initialPage
    };

    componentDidMount() {

    }

    render(){

        let {
            tabs, pager, style, itemStyle, selectedItemStyle, iconStyle,
            selectedIconStyle, textStyle, selectedTextStyle
        } = this.props;
        let tabsView = tabs.map((tab, index) => {
            let isSelected = this.state.selectedIndex === index;
            return (
                <TouchableOpacity
                    style={[styles.itemContainer, isSelected ? selectedItemStyle : itemStyle]}
                    activeOpacity={0.6}
                    key={index}
                    onPress={() => {!isSelected && pager.setPage(index)}}
                >
                    <Image
                        style={[styles.image, isSelected ? selectedIconStyle : iconStyle]}
                        source={isSelected ? tab.selectedIconSource : tab.iconSource}
                    />
                    <Text
                        style={[ isSelected ? styles.textSelected : styles.text, isSelected ? selectedTextStyle : textStyle]}
                    >
                        {tab.text}
                    </Text>
                </TouchableOpacity>
            );
        });
        return (
            <View style={[styles.container, style]}>
                {tabsView}
            </View>
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingTop: 8,
        paddingBottom: 4,
        borderTopWidth: 0.5,
        borderTopColor: '#E0E0E0',
        backgroundColor: '#F7F7F7'
    },
    itemContainer: {
        alignItems: 'center',
        flex: 1
    },
    image: {},
    text: {
        marginTop: 4,
        fontSize: 11,
        color: '#999999'
    },
    textSelected: {
        marginTop: 4,
        fontSize: 11,
        color: '#3584F6'
    }
});