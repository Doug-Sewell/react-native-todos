import React from 'react';
import { Text } from 'react-native';
import SplashPage from '../SplashPage/SplashPage';

type MainProps = {
  aprops: string
}

const MainPage = ({ aprops }: MainProps) => {

  return (
    <>
        <Text>Hello, I am your MainPage! { aprops } </Text>
        <SplashPage />
    </>
  );
}

export default MainPage;