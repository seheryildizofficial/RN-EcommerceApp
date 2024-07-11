import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FAVORITES, HOME, NOTIFICATION, PROFILE} from '../utils/routes';
import Favorites from '../screens/favorites';
import Notification from '../screens/notifications';
import Profile from '../screens/profile';
import Home from '../screens/home';
import Icon from 'react-native-vector-icons/AntDesign';
import {AppColors} from '../theme/appColors';
import HeaderRight from '../router/headerRight';

const Tab = createBottomTabNavigator();

function TabNavigator({navigation}) {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerRight: () => <HeaderRight navigation={navigation} />,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === HOME) {
            iconName = focused;
            return (
              <Icon
                name="home"
                color={focused ? AppColors.PRIMARY : color}
                size={20}
              />
            );
          } else if (route.name === PROFILE) {
            return (
              <Icon
                name="user"
                color={focused ? AppColors.PRIMARY : color}
                size={20}
              />
            );
          } else if (route.name === NOTIFICATION) {
            return (
              <Icon
                name="notification"
                color={focused ? AppColors.PRIMARY : color}
                size={20}
              />
            );
          } else if (route.name === FAVORITES) {
            return (
              <Icon
                name="hearto"
                color={focused ? AppColors.PRIMARY : color}
                size={20}
              />
            );
          }
        },
        tabBarShowLabel: false,
      })}>
      <Tab.Screen name={HOME} component={Home} />
      <Tab.Screen name={PROFILE} component={Profile} />
      <Tab.Screen name={NOTIFICATION} component={Notification} />
      <Tab.Screen name={FAVORITES} component={Favorites} />
    </Tab.Navigator>
  );
}

export default TabNavigator;
