import React, { useState } from 'react';
import { Text, TextInput, Button } from 'react-native';

const SplashPage = () => {
	const [userId, setUserId] = useState('');
	const [password, setPassword] = useState('');
	const onPress = () => {
		return;
	}
	return (
		<div>
			<Text>Hello, I am your SplashPage!</Text>
			<TextInput
				style={{height: 40, display: 'flex'}}
				placeholder="Enter user id"
				onChangeText={text => setUserId(text)}
				defaultValue={ userId }
			/>
			<TextInput
				style={{height: 40, display: 'flex'}}
				placeholder="Enter password"
				onChangeText={text => setPassword(text)}
				defaultValue={ password }
			/>
			<Button
				onPress={ onPress }
				title="Submit"
				color="#841584"
				accessibilityLabel="Submit"
			/>
		</div>
	);
}

export default SplashPage;