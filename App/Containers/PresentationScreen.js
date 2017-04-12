import React, {PropTypes} from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import { Images } from '../Themes'
import { connect } from 'react-redux'
import RoundedButton from '../Components/RoundedButton'
import { Actions as NavigationActions } from 'react-native-router-flux'

// Styles
import styles from './Styles/PresentationScreenStyle'

class PresentationScreen extends React.Component {

  static propTypes = {
    shuttleIndex: PropTypes.func,
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.clearLogo} style={styles.logo} />
          </View>

          <RoundedButton onPress={this.props.amShuttleIndex}>
            Morning Shuttles
          </RoundedButton>

          <RoundedButton onPress={this.props.pmShuttleIndex}>
            Evening Shuttles
          </RoundedButton>

          <View style={styles.centered}>
            <Text style={styles.subtitle}>Made with ❤️ by Bob</Text>
          </View>

        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    amShuttleIndex: NavigationActions.amShuttleIndex,
    pmShuttleIndex: NavigationActions.pmShuttleIndex,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PresentationScreen)
