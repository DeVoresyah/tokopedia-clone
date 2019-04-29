import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Header, Item, Input, Icon, Button, Text, Tabs, Tab, StyleProvider } from 'native-base';
import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material';

export default class HeaderSection extends Component {
	// constructor() {
	//   super();
	// }

	render() {
		return (
			<StyleProvider style={getTheme(material)}>
				<Header hasTabs searchBar>
					<View style={{flex:1, flexDirection:'row'}}>
						<Item style={styles.itemHeader}>
							<Button iconLeft transparenton>
								<Icon name='menu' style={styles.menuIcon}/>
							</Button>
							<Icon name='search' style={{color:'#bdbdbd'}}/>
							<Input placeholder='Cari produk atau toko' placeholderTextColor='#bdbdbd' style={styles.textColor}/>
						</Item>
						<View sstyle={styles.btnHeader}>
							<Button transparent style={styles.btnHeader}>
								<Icon type='FontAwesome' name='qrcode' />
							</Button>
							<Button transparent style={styles.btnHeader}>
								<Icon name='cart' />
							</Button>
						</View>
					</View>
				</Header>
			</StyleProvider>
		)
	}
}

const styles = StyleSheet.create({
	btnHeader: {
		flex: 2,
		color: '#fff',
		height: '100%'
	},
	itemHeader: {
		flex: 7
	},
	menuIcon: {
		color:'#9e9e9e',
		fontSize: 30,
		marginBottom: 6
	},
	textColor: {
		fontSize: 13,
		marginTop: 5
	}
});