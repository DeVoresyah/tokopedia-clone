import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Container, Drawer, Button, Icon, Tabs, Tab, StyleProvider, Header, Item, Input, Text} from 'native-base';
import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material';
import ContentSection from '../components/ContentSection';

export default class Home extends Component {

	render() {
		return (
			<StyleProvider style={getTheme(material)}>
					<Container>
						<Header hasTabs searchBar>
							<View style={{flex:1, flexDirection:'row'}}>
								<Item style={styles.itemHeader}>
									<Button iconLeft transparent onPress={() => this.props.navigation.openDrawer()}>
										<Icon name='menu' style={styles.menuIcon}/>
									</Button>
									<Icon name='search' style={{color:'#bdbdbd'}}/>
									<Input placeholder='Cari produk atau toko' placeholderTextColor='#bdbdbd' style={styles.textColor}/>
								</Item>
								<View style={{flex:0.3, flexDirection:'row'}}>
									<Button small transparent style={styles.btnHeader}>
										<Icon type='FontAwesome' name='qrcode' />
									</Button>
									<Button small transparent style={styles.btnHeader} onPress={() => this.props.navigation.navigate('Cart')}>
										<Icon name='cart' />
									</Button>
								</View>
							</View>
						</Header>
						<Tabs locked>
				          <Tab heading="HOME">
				            <ContentSection navigation={this.props.navigation}/>
				          </Tab>
				          <Tab heading="FEED">
				            <View><Text>Lorem Ipsum</Text></View>
				          </Tab>
				          <Tab heading="FAVORIT">
				            <View><Text>Lorem Ipsum</Text></View>
				          </Tab>
				          <Tab heading="HOT LIST">
				            <View><Text>Lorem Ipsum</Text></View>
				          </Tab>
				        </Tabs>
					</Container>
			</StyleProvider>
		)
	}
}

const styles = StyleSheet.create({
	btnHeader: {
		flex:1,
		color: '#fff',
		height: '100%',
		textAlign: 'center',
		justifyContent: 'center',
		alignItems: 'center'
	},
	itemHeader: {
		flex: 0.7
	},
	menuIcon: {
		color:'#9e9e9e',
		fontSize: 30,
		marginBottom: 6
	},
	textColor: {
		fontSize: 15,
		marginTop: 5
	}
});