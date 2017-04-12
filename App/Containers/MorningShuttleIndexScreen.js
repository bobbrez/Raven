import React from 'react'
import { View, Text, Image, ListView } from 'react-native'
import { connect } from 'react-redux'
import createSelector from 'react-native-conditional-stylesheet';
import { Images, Colors } from '../Themes'

import Icon from 'react-native-vector-icons/FontAwesome';

// For empty lists
import AlertMessage from '../Components/AlertMessageComponent'

// Styles
import Styles from './Styles/MorningShuttleIndexScreenStyle'

const StylesSelect = createSelector(Styles);

class MorningShuttleIndexScreen extends React.Component {

  constructor (props) {
    super(props)
    /* ***********************************************************
    * STEP 1
    * This is an array of objects with the properties you desire
    * Usually this should come from Redux mapStateToProps
    *************************************************************/
    const dataObjects = [
      {id: 1, shuttle:'6:30', medford: '6:09', northStation: '6:22', wait: 8},
      {id: 2, shuttle:'7:05', medford: '6:48', northStation: '7:01', wait: 4},
      {id: 3, shuttle:'7:20', medford: '6:48', northStation: '7:01', wait: 19},
      {id: 4, shuttle:'7:40', medford: '7:14', northStation: '7:27', wait: 13},
      {id: 5, shuttle:'8:00', medford: '7:30', northStation: '7:43', wait: 17},
      {id: 6, shuttle:'8:15', medford: '7:48', northStation: '8:01', wait: 14},
      {id: 7, shuttle:'8:35', medford: '7:48', northStation: '8:01', wait: 34},
      {id: 8, shuttle:'8:50', medford: '8:34', northStation: '8:47', wait: 3},
      {id: 9, shuttle:'9:10', medford: '8:53', northStation: '9:06', wait: 4},
      {id: 10, shuttle:'9:30', medford: '8:53', northStation: '9:06', wait: 24},
      {id: 11, shuttle:'9:55', medford: '9:18', northStation: '9:31', wait: 24},
      {id: 12, shuttle:'10:30', medford: '9:47', northStation: '10:00', wait: 30},
    ]

    /* ***********************************************************
    * STEP 2
    * Teach datasource how to detect if rows are different
    * Make this function fast!  Perhaps something like:
    *   (r1, r2) => r1.id !== r2.id}
    *************************************************************/
    const rowHasChanged = (r1, r2) => r1 !== r2

    // DataSource configured
    const ds = new ListView.DataSource({rowHasChanged})

    // Datasource is always in state
    this.state = {
      dataSource: ds.cloneWithRows(dataObjects)
    }
  }

  /* ***********************************************************
  * STEP 3
  * `_renderRow` function -How each cell/row should be rendered
  * It's our best practice to place a single component here:
  *
  * e.g.
    return <MyCustomCell title={rowData.title} description={rowData.description} />
  *************************************************************/

  _renderRow (rowData) {
    var rowStyle = StylesSelect('row');
    rowStyle.add({ backgroundColor: rowData.wait > 10 ? Colors.sky : Colors.ember });

    return (
      <View style={rowStyle}>
        <View style={Styles.timeBlock}>
          <Icon name="home" size={30} color={Colors.snow} />
          <Text style={Styles.boldLabel}>{rowData.medford}</Text>
        </View>

        <View style={Styles.timeBlock}>
          <Icon name="train" size={30} color={Colors.snow} />
          <Text style={Styles.boldLabel}>{rowData.northStation}</Text>
        </View>

        <View style={Styles.timeBlock}>
          <Icon name="clock-o" size={30} color={Colors.snow} />
          <Text style={Styles.boldLabel}>{rowData.wait} min</Text>
        </View>

        <View style={Styles.timeBlock}>
          <Icon name="bus" size={30} color={Colors.snow} />
          <Text style={Styles.boldLabel}>{rowData.shuttle}</Text>
        </View>
      </View>
    )
  }

  render () {
    return (
      <View style={Styles.container}>
        <Image source={Images.background} style={Styles.backgroundImage} resizeMode='stretch' />
        <ListView
          style={Styles.listContent}
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // ...redux state to props here
  }
}

export default connect(mapStateToProps)(MorningShuttleIndexScreen)
