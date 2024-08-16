import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Navigation = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.menuIcon}>
                    <View style={styles.hamburgerIcon} />
                    <View style={styles.hamburgerIcon} />
                    <View style={styles.hamburgerIcon} />
                </TouchableOpacity>
                <Text style={styles.appName}>CConnect</Text>
            </View>
            <View style={styles.menu}>
                <Text style={styles.menuItem}>Profile</Text>
                <Text style={styles.menuItem}>Settings</Text>
                <Text style={styles.menuItem}>Logout</Text>
            </View>
        </View>
    );
};

export default Navigation;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f7f7',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16,
        backgroundColor: '#333',
    },
    menuIcon: {
        justifyContent: 'center',
    },
    hamburgerIcon: {
        width: 30,
        height: 3,
        backgroundColor: 'white',
        marginVertical: 2,
    },
    appName: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    menu: {
        padding: 20,
    },
    menuItem: {
        fontSize: 16,
        paddingVertical: 10,
        color: '#333',
    },
});