import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Image } from 'react-native';
import {
	Container,
	Header,
	Left,
	Right,
	Tabs,
	Tab,
	Text,
	Icon,
	Button,
	Body,
	Title,
	StyleProvider
	} from 'native-base';
import { Grid, Col, Row } from 'react-native-easy-grid';
import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material';
import ProductList from '../components/ProductList';

export default class Products extends Component {
	// constructor(props) {
	//   super(props);
	
	//   this.state = {
	//   	thumbList: [
	//   		'https://ecs7.tokopedia.net/img/cache/200-square/product-1/2018/7/17/1543579/1543579_b4cd1976-3071-4d86-85b6-d532774be460_500_500.png',
	//   		'https://ecs7.tokopedia.net/img/cache/200-square/product-1/2016/6/2/4627548/4627548_ea691480-4158-4503-a1e6-3140eb1e3d4d.jpg'
	//   	]
	//   };
	// }

	render() {
		return (
			<StyleProvider style={getTheme(material)}>
				<Container>
					<Header hasTabs style={{backgroundColor: '#fff', borderBottomWidth:1, borderBottomColor:'#eeeeee'}}>
						<Left>
							<Button transparent onPress={() => this.props.navigation.goBack()}>
				            	<Icon name='arrow-back' style={{color: '#424242'}}/>
				            </Button>
						</Left>
						<Body>
							<Title style={{color: '#424242', fontSize:20, fontWeight:'bold'}}>Laptop</Title>
						</Body>
						<Right>
							<Button transparent>
				            	<Icon style='FontAwesome' name='search' style={{color: '#424242'}}/>
				            </Button>
						</Right>
					</Header>
					<Tabs locked tabBarUnderlineStyle={{backgroundColor:'#1CC625'}}>
						<Tab heading="Produk"
						style={{backgroundColor:'#e0e0e0'}}
						tabStyle={{backgroundColor:'#fff'}}
						textStyle={{color:'#1CC625'}}
						activeTabStyle={{backgroundColor:'#fff'}}
						activeTextStyle={{color:'#1CC625'}}>
							<ProductList navigation={this.props.navigation} />
						</Tab>
						<Tab heading="Katalog"
						style={{backgroundColor:'#e0e0e0'}}
						tabStyle={{backgroundColor:'#fff'}}
						textStyle={{color:'#1CC625'}}
						activeTabStyle={{backgroundColor:'#fff'}}
						activeTextStyle={{color:'#1CC625'}}
						>
						</Tab>
					</Tabs>
				</Container>
			</StyleProvider>
		)
	}
}