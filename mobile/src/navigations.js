import React, { Component } from 'react';
import { addNavigationHelpers, StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';
import { connect } from 'react-redux';

import { colors } from './utils/constants';
import HomeScreen from './screens/HomeScreen';

// const Tabs = TabNavigator(
//     {
//         Home: {
//             screen: HomeScreen,
//             navigationOptions: () => ({
//                 headerTitle: 'Home',
//                 tabBarIcon: ({ tintColor }) =>
//                     <FontAwesome size={TAB_ICON_SIZE} color={tintColor} name="home" />,
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
            screen: HomeScreen
        }
    },
    {
        initialRouteName: 'Home',
        drawerPosition: 'left',
    }
)

const AppMainNav = StackNavigator({
    Home: {
        screen: Drawable
    }
}, {
        cardStyle: {
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
        return <AppMainNav navigation={nav} />
    }
}

export default connect(state => ({
    nav: state.nav
}))(AppNavigator);

export const router = AppMainNav.router;
