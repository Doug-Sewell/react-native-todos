import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const About = (props) => {
    const { navigation } = props;
    return (
        <View style={ styles.mainView }>
            <Text>This app was created with awesomeness by Doug &amp; Barrett.</Text>
            <View style={ styles.buttonContainer }>
                <View style={ styles.buttonMarginContainer}>
                    <Button
                        title="Log In"
                        onPress={() => navigation.navigate('Main Page')}
                        color="#841584"
                    />
                </View>
                <View style={ styles.buttonMarginContainer}>
                    <Button 
                        title="Back to home"
                        onPress={ () => navigation.navigate('Home') }
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainView: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonContainer: {
        justifyContent: 'space-evenly',
        width:'50%'
    },
    buttonMarginContainer: {
        margin: 10
    }
});
export default About;