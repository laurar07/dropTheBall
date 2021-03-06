import React from 'react'
import {
  View
} from 'react-native'
import {
  Provider
} from 'react-redux'
import {
  createStore
} from 'redux'
import reducer from './reducers'
import Login from './components/Login'
import Header from './components/Header'
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import { white, purple, gray, green, blue } from './utils/colors'
import CalendarView from './components/CalendarView';
import CreateCommunity from './components/CreateCommunity';
import ManageCommunities from './components/ManageCommunities';
import PastDrops from './components/PastDrops';
import SideMenu from './components/SideMenu';
import Landing from './components/Landing';
import Drop from './components/Drop';

const navOptions = {
  headerTintColor: green,
  headerTitle: Header,
  headerLeft: null,
  headerStyle: {
    backgroundColor: green,
    height: 60
  }
};
const CustomDrawerNavigator = createDrawerNavigator({
  Landing: {
    screen: Landing,
    navigationOptions: navOptions,
  },
  Drop: {
    screen: Drop,
    navigationOptions: navOptions,
  },
  CalendarView: {
    screen: CalendarView,
    navigationOptions: navOptions,
  },
  CreateCommunity: {
    screen: CreateCommunity,
    navigationOptions: navOptions,
  },
  ManageCommunities: {
    screen: ManageCommunities,
    navigationOptions: navOptions,
  },
  PastDrops: {
    screen: PastDrops,
    navigationOptions: navOptions,
  }
}, {
  contentComponent: SideMenu,
  drawerWidth: 300
});

const MainNavigator = createStackNavigator({
  CustomDrawerNavigator: {
    screen: CustomDrawerNavigator,
    navigationOptions: {
      headerTintColor: green,
      headerTitle: Header,
      headerStyle: {
        backgroundColor: green
      }
    }
  },
})

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      store: createStore(reducer)
    };
  }
  triggerLogin() {
    this.setState({
      loggedIn: true
    });
  }
  render() {
    if (this.state.loggedIn) {
      return (
        <Provider store={this.state.store}>
          <View style={[{ flex: 1 }]}>
            <MainNavigator />
          </View>
        </Provider>
      )
    }

    return (
      <Provider store={this.state.store}>
        <View style={[{ flex: 1 }]}>
          <Login login={this.triggerLogin.bind(this)}/>
        </View>
      </Provider>
    )
  }
}
