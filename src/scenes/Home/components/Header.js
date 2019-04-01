import React, { Component } from 'react';
import { Header } from 'react-native-elements'
import styles from '../../../assets/styles/lightMode'

const AppHeader = props => {
  return (<Header
    placement="center"
    centerComponent={{ text: '  Just a Thought', style: { fontFamily: 'Satisfy-Regular', fontSize: 25, color:"#292929" } }}
    // rightComponent={{ icon: 'menu',  }}
    containerStyle={styles.headerContainer}
  />)
}

export default AppHeader
