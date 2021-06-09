import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FormButton from '../components/FormButton';
import { AuthContext } from '../navigation/AuthProvider';

const ProfileScreen = () => {
    const { user, logout } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                ProfileScreen Logout {user?.email} ?
            </Text>
            <FormButton buttonTitle="Logout" onPress={() => logout()} />
        </View>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9fafd',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    text: {
        fontSize: 20,
        color: '#333333',
    },
});