import React from "react";
import { View, Text } from 'react-native';
import StartButton from "./StartButton";
import { Button } from 'react-native-paper';

function Login() {
    const MyComponent = () => (
        <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
            Press me
        </Button>
    );
    return (
        <View>
            <Text>This is login Compo</Text>
            <StartButton />


        </View>

    )
}
export default Login;