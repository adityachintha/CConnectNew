import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Jobs = () => {
    const [selectedTab, setSelectedTab] = useState(1); // Default tab 1 is selected

    // Functions to handle tab selection
    const selectTab1 = () => setSelectedTab(1);
    const selectTab2 = () => setSelectedTab(2);

    return (

        <View style={styles.container}>
            <Text style={styles.welcomeText}>Welcome to Jobs</Text>

            <View style={styles.tabButtonContainer}>
                {/* Part-Time Tab */}
                <TouchableOpacity onPress={selectTab1}>
                    <Text style={[styles.tabText, selectedTab === 1 && styles.activeTabText]}>Part-time</Text>
                    {selectedTab === 1 && <View style={styles.underline} />}
                </TouchableOpacity>

                {/* Full-Time Tab */}
                <TouchableOpacity onPress={selectTab2}>
                    <Text style={[styles.tabText, selectedTab === 2 && styles.activeTabText]}>Full-time</Text>
                    {selectedTab === 2 && <View style={styles.underline} />}
                </TouchableOpacity>
            </View>

            {/* Display the message based on the selected tab */}
            {selectedTab === 1 && <Text style={styles.messageText}>Message 1: You selected Part-Time</Text>}
            {selectedTab === 2 && <Text style={styles.messageText}>Message 2: You selected Full-Time</Text>}
        </View>
    );
};

const styles = StyleSheet.create({

        container: {
            flex: 1,
            alignItems: 'center',
            backgroundColor: '#fff',
            paddingTop: 50, // Adjust this value if needed to position it further down
    },
    welcomeText: {
        position: 'absolute',
        top: 10,
        left: 10,
        fontSize: 24,
    },
    tabButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '50%',
        marginBottom: 20,
    },
    tabText: {
        fontSize: 18,
        color: 'gray',
    },
    activeTabText: {
        color: 'black',
        fontWeight: 'bold',
    },
    underline: {
        height: 2,
        backgroundColor: 'black',
        marginTop: 5,
    },
    messageText: {
        fontSize: 16,
        marginTop: 20,
    },
});

export default Jobs;
