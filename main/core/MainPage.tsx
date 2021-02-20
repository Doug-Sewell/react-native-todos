import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import SplashPage from '../SplashPage/SplashPage';

type MainProps = {
  aprops: string
}

const MainPage = ({ aprops }: MainProps) => {

  return (
    <View style={ styles.mainView }>
        <Text>Enter your login credentials below: { aprops } </Text>
        <SplashPage />
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
      flex:1,
      alignItems: 'center',
      justifyContent: 'center'
  }
});

export default MainPage;