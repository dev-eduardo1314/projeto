import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Navigation from './Navigation';

const App: () => React$Node = () => {
    return (
        <>
            <StatusBar
                barStyle='light-content'
                background='#000'
            />
            <NavigationContainer>
                <Navigation />
            </NavigationContainer>
        </>

    );
};

export default App;
