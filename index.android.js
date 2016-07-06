/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Platform,
  StyleSheet,
  Navigator,
  Text,
  View
} from 'react-native';

import MainScreen from './MainScreen';
import MainScreen2 from './MainScreen2';
import MainScreen3 from './MainScreen3';

class componetsDemo extends Component {
    constructor(props) {
        super(props);   //这一句不能省略，照抄即可
    }
    componentDidMount() {

    }

    render() {
        return (
            <Navigator
                initialRoute={{name: 'main', index: 0, id:'main'}}
                renderScene={(route, navigator) =>{
                                console.log('route.id is: ' + route.id);
                                return (<MainScreen nav={navigator}/>);
                            }
                }
            />
        )
    }

    static _renderPage(route, nav) {
        switch (route.id) {
            case 'main':
                return (<MainScreen nav={nav}/>);
                break;
            case 'webview':
                //return (<JdWebView url={route.url}/>);
                break;
        }
    }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('componetsDemo', () => componetsDemo);
