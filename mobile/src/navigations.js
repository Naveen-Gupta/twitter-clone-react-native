import React, { Component } from 'react';
import { addNavigationHelpers, StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import { SimpleLineIcons, Entypo } from '@expo/vector-icons';

import { colors } from './utils/constants';
import HomeScreen from './screens/HomeScreen';
import ExploreScreen from './screens/ExploreScreen';
import AuthenticationScreen from './screens/AuthenticationScreen';

const TAB_ICON_SIZE = 20;



// const Tabs = TabNavigator(
//     {
//         Home: {
//             screen: HomeScreen,
//             navigationOptions: () => ({
//                 headerTitle: 'Home',
//                 tabBarIcon: ({ tintColor }) =>
//                     <Entypo name="heart" size={TAB_ICON_SIZE} color={tintColor} />,
//             })
//         }
//     },
//     {
//         lazy: true,
//         tabBarPosition: 'bottom',
//         swipeEnabled: false,
//         tabBarOptions: {
//             showIcon: true,
//             showLabel: false,
//             activeTintColor: colors.PRIMARY,
//             inactiveTintColor: colors.LIGHT_GRAY,
//             style: {
//                 backgroundColor: colors.WHITE,
//                 height: 50,
//                 paddingVertical: 5,
//             },
//         },
//     },
// );

const Drawable = DrawerNavigator(
    {
        Home: {
            path: '/',
            screen: HomeScreen
        },
        Explore: {
            path: '/explore',
            screen: ExploreScreen
        }
    },
    {
        initialRouteName: 'Home',
        drawerPosition: 'left',
    }
)

const AppMainNav = StackNavigator({
    Home:
    {
        screen: Drawable
    }
},
    {
        cardStyle:
        {
            backgroundColor: '#F1F6FA',
        },
        navigationOptions: () => ({
            headerStyle: {
                backgroundColor: colors.WHITE
            },
            headerTitleStyle: {
                fontWeight: 'bold',
                color: colors.SECONDARY
            }
        })
    });

class AppNavigator extends Component {
    render() {
        const nav = addNavigationHelpers({
            dispatch: this.props.dispatch,
            state: this.props.nav
        });
        if (!this.props.user.isAuthenticated) {
            return <AuthenticationScreen />
        }
        return <AppMainNav navigation={nav} />
    }
}

export default connect(state => ({
    nav: state.nav,
    user: state.user,
}))(AppNavigator);

export const router = AppMainNav.router;
