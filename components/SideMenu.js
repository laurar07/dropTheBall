
import PropTypes from 'prop-types';
import {
    View,
    TouchableOpacity,
    Text, Platform,
    StyleSheet,
    TextInput,
    Alert,
    Image,
    ScrollView
} from 'react-native'
import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import { white, purple, gray, green, blue } from '../utils/colors'

class SideMenu extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  render () {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            <Text style={styles.sectionHeadingStyle}>
              Section 1
            </Text>
            <View style={styles.navSectionStyle}>
                        <Text style={styles.navItemStyle} onPress={this.navigateToScreen('CreateCommunity')}>
              CreateCommunity
              </Text>
            </View>
          </View>
          <View>
            <Text style={styles.sectionHeadingStyle}>
              Section 2
            </Text>
            <View style={styles.navSectionStyle}>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('ManageCommunities')}>
                ManageCommunities
              </Text>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('CalendarView')}>
                CalendarView
              </Text>
            </View>
          </View>
        </ScrollView>
        <View style={styles.footerContainer}>
          <Text>This is my fixed footer</Text>
        </View>
      </View>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 40,
        backgroundColor: blue
    },
})

export default SideMenu;