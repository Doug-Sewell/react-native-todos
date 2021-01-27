import React, { useState } from 'react';
import { Text, TextInput, Button, View } from 'react-native';
import Validator from '../utils/validator';

const SplashPage = () => {
	const [userId, setUserId] = useState('');
	const [password, setPassword] = useState('');
	const userValidator = new Validator('', 0, '');

	const onInput = (input: string, inputType: string) => {
		if (userValidator.getAttempts() >= 3) {
			// no more than three attempts per hour maybe idk
			// set error state
			return;
		}
		switch(inputType) {
			case 'UserId':
				// UserId validation on backend, check for unwanted regex characters, or script tags. Make a verification reusable class
				userValidator.setItem(inputType);
				userValidator.setValidatee(input);
				if (userValidator.isSafe()) {
					// safe to submit
				} else {
					// not safe
				}
			case 'PW':
				// Password validation here, check for unwanted characters
				userValidator.setItem(inputType);
				userValidator.setValidatee(input);
				if (userValidator.isSafe()) {
					// safe to submit
				} else {
					// not safe
				}
		}
		userValidator.setAttempts(userValidator.getAttempts() + 1);
	}

	const onPress = () => {
		// Api call to backend to verify things as necessary
		return;
	}

	return (
		<View>
			<Text>Hello, I am your SplashPage! Input your details to login.</Text>
			<TextInput
				style={{height: 40, display: 'flex'}}
				placeholder="Enter user id"
				onChangeText={text => onInput(text, 'UserId')}
				defaultValue={ userId }
			/>
			<TextInput
				style={{height: 40, display: 'flex'}}
				placeholder="Enter password"
				onChangeText={text => onInput(text, 'PW')}
				defaultValue={ password }
			/>
			<Button
				onPress={ onPress }
				title="Submit"
				color="#841584"
				accessibilityLabel="Submit"
			/>
		</View>
	);
}

export default SplashPage;