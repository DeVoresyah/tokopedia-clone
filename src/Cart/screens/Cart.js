import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import {
	Container,
	Header,
	Left,
	Right,
	Text,
	Icon,
	Button,
	Body,
	Title,
	Footer,
	StyleProvider
	} from 'native-base';
import { Grid, Col, Row } from 'react-native-easy-grid';
import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material';
import CartContent from '../components/CartContent';

export default class Cart extends Component {
	render() {
		return (
			<StyleProvider style={getTheme(material)}>
				<Container>
					<Header style={{backgroundColor: '#fff'}}>
						<Left>
							<Button transparent onPress={() => this.props.navigation.goBack()}>
				            	<Icon name='arrow-back' style={{color: '#424242'}}/>
				            </Button>
						</Left>
						<Body>
							<Title style={{color: '#424242', fontSize:16, fontWeight:'bold'}}>Keranjang</Title>
						</Body>
						<Right>
							<Button transparent>
								<Text style={{fontSize:14, color:'#9e9e9e'}}>Hapus</Text>
							</Button>
						</Right>
					</Header>
					<CartContent />
					<Footer style={styles.footerWrapper}>
						<Row>
							<Col>
								<Text style={{fontSize:11, color:'#bdbdbd'}}>Total Harga (2 Barang)</Text>
								<Text style={{fontSize:15, color:'#ff5722'}}>Rp 14.399.000</Text>
							</Col>
							<Col>
								<Text style={styles.checkoutFooter}>Checkout</Text>
							</Col>
						</Row>
					</Footer>
				</Container>
			</StyleProvider>
		)
	}
}

const styles = StyleSheet.create({
	footerWrapper: {
		backgroundColor:'#fff',
		padding:8,
		paddingLeft:15,
		paddingRight:15
	},
	checkoutFooter: {
		fontSize:14,
		color:'#fff',
		backgroundColor:'#ff5722',
		justifyContent:'center',
		padding:10,
		width:'100%',
		borderRadius:3,
		textAlign:'center'
	}
})