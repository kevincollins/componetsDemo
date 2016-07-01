/**
 * Created by 58 on 2016/6/24.
 */

'use strict';

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Navigator,
    Text,
    Platform,
    Animated,
    ViewPagerAndroid,
    View
} from 'react-native';

const VIEWPAGER_REF = 'viewPager';

const DEFAULT_DOT_RADIUS = 6;

var pageCount=0;
var autoPlay=true;


export default class PageViewIndicator extends Component {

    constructor(props) {
        super(props);
        pageCount = this.props.pageCount;
        if(this.props.autoPlay)
            autoPlay = this.props.autoPlay;
    }
    state = {
        selectedIndex: this.props.initialPage
    };

    componentDidMount() {
        if(autoPlay){
            this.timer = setInterval(this.changeSelected.bind(this), 4000);
        }
    }

    changeSelected() {
        let currentIndex = this.state.selectedIndex;

        let newIndex = currentIndex + 1;

        if(newIndex == pageCount){
            newIndex = 0;
        }

        this._setPage(newIndex);

        this.setState({
            selectedIndex: newIndex,
        },null);//callback
    }

    render() {

        return (
            <View>
                <ViewPagerAndroid
                    {...this.props}
                    ref={VIEWPAGER_REF}
                    style={[styles.viewPager,this.props.style]}
                    initialPage={this.props.initialPage}
                    onPageScroll={this._onPageScrollOnAndroid.bind(this)}
                    onPageSelected={this._onPageSelectedOnAndroid.bind(this)}

                >
                    {this.props.rendViewPage()}
                </ViewPagerAndroid>

            </View>

        );
    }

    _onPageScrollOnAndroid(e) {
        if (this.props.onPageScroll) this.props.onPageScroll(e.nativeEvent);
    }

    _onPageSelectedOnAndroid(e) {
        let param = e.nativeEvent;
        this.setState({selectedIndex: param.position});
    }

    _setPage(index) {
        console.log('*********** ViewPager # setPage android,index:'+index);
        this.refs[VIEWPAGER_REF].setPage(index);
        //if (this.props.onPageSelected) this.props.onPageSelected({position: index});
    }
}


var styles = StyleSheet.create({
    viewPager: {

    },

    container: {
        position: 'absolute',
        bottom: 10,
        left: 0,
        right: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    dot: {
        width: DEFAULT_DOT_RADIUS,
        height: DEFAULT_DOT_RADIUS,
        borderRadius: DEFAULT_DOT_RADIUS >> 1,
        backgroundColor: '#BBBBBB',
        margin: DEFAULT_DOT_RADIUS >> 1
    },
    selectDot: {
        backgroundColor: 'white',
    },

});
