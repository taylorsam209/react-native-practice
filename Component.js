import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

class ComponentTest extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>I am red text with a size of 24.</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        flexDirection: "center",
        alignItems: "center"
    },
    text: {
        color: 'red',
        fontSize: 24
    }
})

export default ComponentTest;