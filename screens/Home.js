import React, { useEffect } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text } from "react-native-elements";


//import components

const Home = () => {

    useEffect(() => {

    },[]);

    return (
            <ScrollView style={styles.container} >
                <Text style={styles.text} h1>
                   Title
                </Text>
            </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#282572',
        // marginTop: 50,
        paddingBottom: 50
    },
});


export default Home;