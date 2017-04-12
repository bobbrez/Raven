import React, { Component } from 'react'
import { Scene, Router, Modal } from 'react-native-router-flux'
import Styles from './Styles/NavigationContainerStyle'

// screens identified by the router
import PresentationScreen from '../Containers/PresentationScreen'
import MorningShuttleIndexScreen from '../Containers/MorningShuttleIndexScreen'
import EveningShuttleIndexScreen from '../Containers/EveningShuttleIndexScreen'

/***************************
* Documentation: https://github.com/aksonov/react-native-router-flux
***************************/

class NavigationRouter extends Component {
  render () {
    return (
      <Router>
        <Scene key="modal" component={Modal} >
          <Scene key="root" navigationBarStyle={Styles.navBar} titleStyle={Styles.title} leftButtonIconStyle={Styles.leftButton} rightButtonTextStyle={Styles.rightButton}>
            <Scene key='presentationScreen' component={PresentationScreen} title='Raven' initial />
            <Scene key='amShuttleIndex' component={MorningShuttleIndexScreen} title='Morning Shuttles' />
            <Scene key='pmShuttleIndex' component={EveningShuttleIndexScreen} title='Evening Shuttles' />
          </Scene>
        </Scene>
      </Router>
    )
  }
}

export default NavigationRouter
