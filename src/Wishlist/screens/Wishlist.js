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
	Item,
	Input,
	Button,
	Body,
	Title,
	StyleProvider
	} from 'native-base';
import { Grid, Col, Row } from 'react-native-easy-grid';
import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material';
import WishContent from '../components/WishContent';

export default class Wishlist extends Component {
	render() {
		return(
			<StyleProvider style={getTheme(material)}>
				<Container>
					<Header style={{backgroundColor: '#fff'}}>
						<Left>
							<Button transparent onPress={() => this.props.navigation.goBack()} >
				            	<Icon name='arrow-back' style={{color: '#424242'}}/>
				            </Button>
						</Left>
						<Body>
							<Title style={{color: '#424242', fontSize:16, fontWeight:'bold'}}>Wishlist</Title>
						</Body>
						<Right />
					</Header>
					<View style={{backgroundColor:'#eee', padding:10}}>
						<View style={{backgroundColor:'#fff', paddingLeft:20, paddingRight:20}}>
							<Item style={{borderBottomWidth:0}}>
								<Icon name="ios-search" />
	        					<Input placeholder="Search" style={{borderBottomWidth:0}}/>
							</Item>
						</View>
					</View>
					<WishContent navigation={this.props.navigation} />
				</Container>
			</StyleProvider>
		)
	}
}