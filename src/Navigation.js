import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './Screens/Home';
import WalletScreen from './Screens/Wallet';
import PayScreen from './Screens/Pay';
import PayButton from './Components/PayButton';


const Tab = createBottomTabNavigator()

const icons = {
    Home: {
        lib: AntDesign,
        name: 'home',
    },

    Wallet: {
        lib: AntDesign,
        name: 'creditcard',
    },

/*    Pay: {
        lib: AntDesign,
        name: 'home',
    },*/

    Notifications: {
        lib: Ionicons,
        name: 'ios-notifications-outline',
    },

    Settings: {
        lib: AntDesign,
        name: 'setting',
    },

}

export default function Navigation() {
    return(
        <Tab.Navigator
            screenOptions={({ route, navigation }) => ({
                tabBarIcon: ({ color, size }) => {
                    if (route.name == 'Pay'){
                        return(
                            <PayButton
                                onPress={() => navigation.navigate('Pay')}z
                            />
                            );
                    }
                    const { lib: Icon, name } = icons [route.name];
                    return <Icon name={name} size={size} color={color} />
                },
            })}
            tabBarOptions={{
                style: {
                    backgroundColor: "#131418",
                    borderTopColor: "reba(255, 255, 255 0.2)",
                },

                activeTintColor: '#fff',
                inactiveTintColor: '#92929c'
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: 'Inicio',
                }}
            />
            <Tab.Screen
                name="Wallet"
                component={WalletScreen}
                options={{
                    title: 'Carteira',
                }}
            />
            <Tab.Screen
                name="Pay"
                component={PayScreen}
                options={{
                    title: '',
                }}
            />
            <Tab.Screen
                name="Notifications"
                component={PayScreen}
                options={{
                    title: 'Notificações',
                }}
            />
            <Tab.Screen
                name="Settings"
                component={PayScreen}
                options={{
                    title: 'Ajustes',
                }}
            />
        </Tab.Navigator>
    )
}
