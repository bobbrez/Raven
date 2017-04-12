import React from 'react'
import { View, Text, Image, ListView } from 'react-native'
import { connect } from 'react-redux'
import createSelector from 'react-native-conditional-stylesheet';
import { Images, Colors } from '../Themes'

import Icon from 'react-native-vector-icons/FontAwesome';

// For empty lists
import AlertMessage from '../Components/AlertMessageComponent'

// Styles
import Styles from './Styles/EveningShuttleIndexScreenStyle'

const StylesSelect = createSelector(Styles);

class EveningShuttleIndexScreen extends React.Component {

  constructor (props) {
    super(props)
    /* ***********************************************************
    * STEP 1
    * This is an array of objects with the properties you desire
    * Usually this should come from Redux mapStateToProps
    *************************************************************/
    const dataObjects = [
      {id: 1, shuttle:'3:30', medford: '3:51', northStation: '3:40', wait: 10},
      {id: 2, shuttle:'4:00', medford: '4:31', northStation: '4:20', wait: 20},
      {id: 3, shuttle:'4:25', medford: '4:56', northStation: '4:45', wait: 20},
      {id: 4, shuttle:'4:50', medford: '5:21', northStation: '5:10', wait: 20},
      {id: 5, shuttle:'5:10', medford: '6:01', northStation: '5:50', wait: 40},
      {id: 6, shuttle:'5:35', medford: '6:01', northStation: '5:50', wait: 15},
      {id: 7, shuttle:'5:55', medford: '6:36', northStation: '6:25', wait: 30},
      {id: 8, shuttle:'6:15', medford: '6:36', northStation: '6:25', wait: 10},
      {id: 9, shuttle:'6:35', medford: '7:06', northStation: '6:55', wait: 20},
      {id: 10, shuttle:'7:10', medford: '7:36', northStation: '7:25', wait: 15},
      {id: 11, shuttle:'7:35', medford: '8:46', northStation: '8:35', wait: 60},
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
          <Icon name="bus" size={30} color={Colors.snow} />
          <Text style={Styles.boldLabel}>{rowData.shuttle}</Text>
        </View>

        <View style={Styles.timeBlock}>
          <Icon name="clock-o" size={30} color={Colors.snow} />
          <Text style={Styles.boldLabel}>{rowData.wait} min</Text>
        </View>

        <View style={Styles.timeBlock}>
          <Icon name="train" size={30} color={Colors.snow} />
          <Text style={Styles.boldLabel}>{rowData.northStation}</Text>
        </View>

        <View style={Styles.timeBlock}>
          <Icon name="home" size={30} color={Colors.snow} />
          <Text style={Styles.boldLabel}>{rowData.medford}</Text>
        </View>
      </View>
    )
  }

  render () {
    return (
      <View style={Styles.container}>
        <Image source={Images.backgroundDark} style={Styles.backgroundImage} resizeMode='stretch' />
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

export default connect(mapStateToProps)(EveningShuttleIndexScreen)
