/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

import { AuthContext } from './AuthProvider';

import AuthStack from './AuthStack';
import AppStack from './AppStack';

const Routes = () => {
    const [initializing, setInitializing] = useState(true);

    const { user, setUser } = useContext(AuthContext);

    const onAuthStateChanged = usr => {
        setUser(usr);
        if (initializing) {
            setInitializing(false);
        }
    };

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    if (initializing) {
        return null;
    }

    return (
        <NavigationContainer>
            {user ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
    );
};

export default Routes;
