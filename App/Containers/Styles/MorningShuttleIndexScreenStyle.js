import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    marginTop: Metrics.navBarHeight,
    backgroundColor: Colors.background
  },
  row: {
    height: 60,
    flex: 1,
    marginVertical: Metrics.marginVertical,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  boldLabel: {
    fontWeight: 'bold',
    alignSelf: 'center',
    color: Colors.snow,
    textAlign: 'center',
    marginBottom: Metrics.smallMargin
  },
  timeBlock: {
    alignItems:'center',
    paddingHorizontal: Metrics.marginHorizontal,
    paddingVertical: Metrics.marginVertical,
    marginVertical: Metrics.marginVertical,
  },
  label: {
    textAlign: 'center',
    color: Colors.snow
  },
  listContent: {
    flex: 1,
    marginTop: Metrics.baseMargin
  }
})
