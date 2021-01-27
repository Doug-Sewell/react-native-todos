import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

const Home = (props) => {
    const { navigation } = props;

   return (
        <View style={ styles.mainView }>
            <Text>Welcome to the only re-occuring todo app you'll ever need.</Text>
            <View style={ styles.buttonContainer}>
                <View style={ styles.buttonMarginContainer }>
                    <Button 
                        title="Log in"
                        onPress={ () => navigation.navigate('Main Page') }
                        color="#841584"
                    />
                </View>
                <View style={ styles.buttonMarginContainer }>
                    <Button 
                        title="About this app"
                        onPress={ () => navigation.navigate('About') }
                    />
                </View>
            </View>
        </View>
    );
};

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

export default Home;