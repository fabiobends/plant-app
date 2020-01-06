import React, { Component, useState } from 'react';
import { Platform, StyleSheet, Text, View, Button} from 'react-native';

import { AppLoading, Asset } from 'expo';

import Navigation from './navigation';
import { Block } from './constants';

// import all used images
const images = [
  require('./assets/icons/back.png'),
  require('./assets/icons/plants.png'),
  require('./assets/icons/seeds.png'),
  require('./assets/icons/flowers.png'),
  require('./assets/icons/sprayers.png'),
  require('./assets/icons/pots.png'),
  require('./assets/icons/fertilizers.png'),
  require('./assets/images/plants_1.png'),
  require('./assets/images/plants_2.png'),
  require('./assets/images/plants_3.png'),
  require('./assets/images/explore_1.png'),
  require('./assets/images/explore_2.png'),
  require('./assets/images/explore_3.png'),
  require('./assets/images/explore_4.png'),
  require('./assets/images/explore_5.png'),
  require('./assets/images/explore_6.png'),
  require('./assets/images/avatar.png'),
];

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
// });

export default class App extends Component {
  
  state = {
    isLoadingComplete: false,
  }

  handleResourcesAsync = async() => {
    // we're caching all the images
    // for better perfomance on the app 
    const cacheImages = images.map(img => {
      return Asset.fromModule(images).downloadAsync();
    })

    return Promise.all(cacheImages);  
  }

  render(){
    
    if(!this.state.isLoadingComplete && !this.props.skipLoadingScreen){
      return (
        <AppLoading
         startAsync={!this.handleResourcesAsync}
         onError={error => console.warn(error)}
         onFinish={() => this.setState({ isLoadingComplete: true })}
         />
      )
    }
    
    return (
        <Block white>
          <Navigation />
        </Block>
    );
  }    
}

const styles = StyleSheet.create({

});

