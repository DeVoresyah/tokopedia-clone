import React, { Component } from 'react';
import { View, Image, StyleSheet, ImageBackground} from 'react-native';
import { Card, CardItem, Body, Text } from 'native-base';
import Swiper from 'react-native-swiper';

export default class FlashSwiper extends Component {
	// constructor() {
	//   super();
	
	//   this.state = {};
	// }

	render() {
		return(
			<Swiper horizontal={true} loop={false} showButtons={false} autoplay={false} showsPagination={false}>
				<View style={{flex:1, backgroundColor:'#000', justifyContent:'center', alignItems:'center'}}>
					<Text>Lorem Ipsum</Text>
				</View>
				<View style={{flex:1, backgroundColor:'#000', justifyContent:'center', alignItems:'center'}}>
					<Text>Dolor Sit Amet</Text>
				</View>
				<View style={{flex:1, backgroundColor:'#000', justifyContent:'center', alignItems:'center'}}>
					<Text>Lorem Ipsum</Text>
				</View>
				<View style={{flex:1, backgroundColor:'#000', justifyContent:'center', alignItems:'center'}}>
					<Text>Dolor Sit Amet</Text>
				</View>
			</Swiper>
		)
	}
}