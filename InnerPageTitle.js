/**
 * Created by 58 on 2016/7/4.
 *
 */


import React, { Component,PropTypes } from 'react';

import {
    Image,
    Text,
    TextInput,
    View,
    Platform,
    StyleSheet
} from 'react-native';

import IndicatorViewPager from './components/viewpager/IndicatorViewPager';
import PagerTitleIndicator from './components/viewpager/indicator/PagerTitleIndicator';


export default class InnerTab extends Component {

    componentWillMount() {

    }

    _renderTitleIndicator() {
        return (
            <PagerTitleIndicator
                titles={['one', 'two', 'three']}
            />
        );
    }

    render() {
        return (
            <IndicatorViewPager
                style={{flex:1}}
                indicator={this._renderTitleIndicator()}
            >
                <View style={{backgroundColor:'#1AA094'}}>
                    <Text>111 Page</Text>
                </View>
                <View style={{backgroundColor:'#1AA094'}}>
                    <Text>222 Page</Text>
                </View>
                <View style={{backgroundColor:'#1AA094'}}>
                    <Text>333 Page</Text>
                </View>
            </IndicatorViewPager>
        );
    }
}

const styles = StyleSheet.create({
    image: {},
    text: {
        marginTop: 4,
        fontSize: 11,
        color: '#999999'
    },
});
