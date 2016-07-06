/**
 *  调用  PageViewIndicator 来实现轮播效果
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

import ViewPager from './components/viewpager/indicator/PageViewIndicator.js';

const BANNER_IMGS = [
    require('./images/banner/1.jpg'),
    require('./images/banner/2.jpg'),
    require('./images/banner/3.jpg'),
    require('./images/banner/4.jpg')
];

var bannersView = [];

const pageCount=BANNER_IMGS.length;

export default class MyViewpager extends Component {

    componentWillMount() {
        /*for (let i = 0; i < BANNER_IMGS.length; i++) {
            bannersView.push(
                <View key={i}  collapsable={false}>
                    <Image
                        style={styles.image}
                        source={BANNER_IMGS[i]}
                    />
                </View>
            );
        }*/
    }

    _renderPageView(){

        let bannersView = BANNER_IMGS.map((banner, index) => {

            return(
                <View key={index} collapsable={false}>
                    <Image
                        style={styles.image}
                        source={banner}
                    />
                </View>
            );
        });
        return bannersView;
    }


    render() {

        return (
            <ViewPager
                style={{height:200}}
                initialPage={0}
                autoPlay={true}
                hasDots={true}
                pageCount={pageCount}
                renderPageView={this._renderPageView.bind(this)}
            >
            </ViewPager>
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
