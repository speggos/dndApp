import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, TouchableHighlight, FlatList } from 'react-native';
import { StackNavigator } from 'react-navigation';


class Background extends Component {

	render() {
    	const {source, children, style, ...props} = this.props
	    return (

	        <ImageBackground
	          style={[styles.container, styles.banner]}
	          source={require('./background.png')}
	        >
	        	{ children }

	        </ImageBackground>
	    )
	}
}

export class CharacterMaker extends Component {

	render() {

		const { navigate } = this.props.navigation;

		return (

			<Background>
				<TouchableHighlight
					onPress = {()=> navigate("ClassPicker", { character: this.props.character})}>

					<View style = {styles.textContainer}>

						<Text style={styles.title}>
							Welcome to the Character Creator
						</Text>

						<Text style={styles.text}>
							This section will help you create a new character. DnD has many rules, and creating a character
							may take up to 20 minutes. If this is your first time, we suggest taking a look at the DnD
							players handbook reference. Click the book at the bottom of the screen at any time to view the guide
						</Text>

						<Text style={styles.title}>
							Click anywhere to get started!
						</Text>

					</View>

				</TouchableHighlight>
			</Background>
		)
	}
}

export class ClassPicker extends Component {

	constructor(props) {
		super(props)
	}

	render() {

		const { navigate } = this.props.navigation;
		var classes = global.rules.classes
		console.log(classes);

		return(
			<Background>
				<View style={{alignItems: 'center'}}>

					<TouchableOpacity 
						style={{}}
						onPress={()=>navigate("RacePicker", { character: this.props.character})}>

						<View style = {[styles.textContainer]}>
							<Text style={styles.title}>
								Choose your Class
							</Text>

							<Text style={styles.text}>
								This section allows you to select your class. If you're feeling lost, click the
								book at the bottom of the screen at any time to view the DnD guide
							</Text>
						</View>

					</TouchableOpacity>

					<View style = {[styles.textContainer, {alignItems: 'center', marginVertical: '20%'}]}>
						<FlatList
							data = {classes}
							renderItem={({item}) => <Text>{item.name}</Text>}
						/>

					</View>
				</View>
			</Background>
		)
	}
}

export class RacePicker extends Component {

	constructor(props) {
		super(props)
	}

	render() {

		const {navigate} = this.props.navigation;
		var races = global.rules.races;
		console.log(races);

		return (
				<Background>
					<View style={{justifyContent: 'space-between', alignItems: 'center'}}>

						<TouchableOpacity 
						onPress={()=> navigate("WeaponPicker", { character: this.props.character})}>

						<View style={[styles.textContainer, {height: '20%'}]}>
							<Text style={styles.title}>
								Choose a Race
							</Text>
						</View>
						</TouchableOpacity>

						<View style={[styles.textContainer, {height: '40%'}]}>
							<FlatList
								data = {races}
								renderItem={({item}) => <Text style={styles.text}>{item.name}</Text>}
							/>
						</View>
					</View>
				</Background>
		)
	}
}

export class AbilityPicker extends Component {

	constructor(props) {
		super(props);
	}

	render() {

		return (
			<Background>

			</Background>
		)
	}
}

export class WeaponPicker extends Component {

	constructor(props) {
		super(props);
	}

	render() {

		return (
			<Background>

			</Background>
		)
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  banner: {
    flex: 1,
    width: null,
    height: null
  },
  textContainer: {
  	width: '80%',
    backgroundColor: '#A39367',
  	borderWidth: 3,
  	alignItems: 'center',
  },
  title: {
  	fontSize: 22,
  	marginHorizontal: 5,
  	marginVertical: 10,
  	textAlign: 'center',
  },
  text: {
  	fontSize: 14,
  	marginHorizontal: 10,
  	textAlign: 'center',
  },

});