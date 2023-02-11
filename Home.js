import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Button } from 'react-native-paper';
import { TextInput } from 'react-native-paper';

function Home() {
    //when login
    const onLogin = () => {
        console.log("Save button pressed!")
    }
    return (
        <View>

            <TextInput
                label="Email"
                mode="flat"
                onChangeText={text => setText(text)}
                style={styles.txt1}
            />
            <TextInput
                label="Password"
                mode="flat"
                onChangeText={text => setText(text)}
            />


            <Button mode="contained-tonal" onPress={() => console.log('Pressed')} style={styles.btn}>
                Login
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    txt1: {
        width: '60%',
        marginLeft: '15%'
    },
    btn: {
        padding: '10%'
    }
})

export default Home;