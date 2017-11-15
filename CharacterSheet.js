import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { StackNavigator } from 'react-navigation';

class CharacterSheet extends Component {

	constructor(props) {
    	super(props);
 	}

	render () {
 		const { params } = this.props.navigation.state;
		const character = params.character
		console.log(character);
		return(
			<View style={{flex: 1}}>
				<Text>{character.name}</Text>
				<Text>{character.race}</Text>

			</View>
		)
	}
}

module.exports = CharacterSheet;