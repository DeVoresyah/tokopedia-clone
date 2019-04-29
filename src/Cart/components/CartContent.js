import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Image } from 'react-native';
import {
	Text,
	Icon,
	Content,
	Button,
	Body,
	Title,
	Thumbnail,
	Card,
	CardItem,
	Item,
	Input
	} from 'native-base';
import { Grid, Col, Row } from 'react-native-easy-grid';

export default class CartContent extends Component {
	constructor() {
	  super();
	
	  this.state = {
	  	productsImg: [
	  		'https://ecs7.tokopedia.net/img/cache/200-square/product-1/2018/3/8/4077432/4077432_7d83ad20-8635-41a1-b679-56d64bbb7f7b_800_800.jpg.webp',
	  		'https://ecs7.tokopedia.net/img/cache/300/product-1/2016/9/1/11879544/11879544_ed0fd95b-8b63-4445-a278-feb09e66ff0b.jpg'
	  	]
	  };
	}

	render() {
		const thumbImg = this.state.productsImg;

		return (
			<Content>
				<Card style={styles.cardFull}>
					<CardItem>
						<View style={{flexDirection:'row', flexWrap:'wrap'}}>
							<Icon type='FontAwesome' name='ticket' style={{color:'#1CC625', fontSize:20}} />
							<Text style={styles.promoText}>Gunakan Kode Promo atau Kupon</Text>
						</View>
					</CardItem>
				</Card>

				<Card style={styles.cardFull}>
					<View style={styles.topInfo}>
						<Text style={{flex:0.8}}>
							<Text style={{color:'#bdbdbd', fontSize:12}}>Penjual:</Text> <Text style={{fontSize:12}}>SINAR21</Text>
						</Text>
						<Icon type='FontAwesome' name='trash-o' style={styles.trashIcon} />
					</View>
					<CardItem>
						<View>
							<Thumbnail square source={{uri: thumbImg[0]}} />
						</View>
						<View style={{padding:10, flex:1}}>
							<Text style={{fontSize:14}}>ASUS A407UB - i3 6006U - 4GB - 1TB - MX110 2GB - WIN10 - 14HD-SLIM</Text>
							<Text style={styles.productPrice}>Rp 5.900.000</Text>
						</View>
					</CardItem>

					<CardItem style={{paddingTop:0}}>
						<Row>
							<Col style={{flex:0.8, alignItems:'flex-end'}}>
								<Text style={styles.removeQty}>
									<Icon name='remove' style={{fontSize:17, color:'#e0e0e0'}}/>
								</Text>
							</Col>
							<Col style={{flex:0.2}}>
								<Item style={{borderColor:'#1CC625', top:-20}}>
									<Input value={'1'} style={{paddingBottom:0, fontSize:14, textAlign:'center'}} />
								</Item>
							</Col>
							<Col style={{flex:0.1, alignItems:'flex-end'}}>
								<Text style={styles.addQty}>
									<Icon name='add' style={{fontSize:17, color:'#1CC625'}}/>
								</Text>
							</Col>
						</Row>
					</CardItem>

					<View style={styles.footerInfo}>
						<Text>
							<Text style={{color:'#bdbdbd', fontSize:12}}>Catatan untuk penjual (Opsional)</Text> <Text style={{fontSize:12, color:'#1CC625'}}>Tulis Catatan</Text>
						</Text>
					</View>
				</Card>

				<Card style={styles.cardFull}>
					<View style={styles.topInfo}>
						<Text style={{flex:0.8}}>
							<Text style={{color:'#bdbdbd', fontSize:12}}>Penjual:</Text> <Text style={{fontSize:12}}>MI.STORE</Text>
						</Text>
						<Icon type='FontAwesome' name='trash-o' style={styles.trashIcon} />
					</View>
					<CardItem>
						<View>
							<Thumbnail square source={{uri: thumbImg[1]}} />
						</View>
						<View style={{padding:10, flex:1}}>
							<Text style={{fontSize:14}}>Xiaomi Mi Notebook Air 12.5"/Core M3-6y30/4gb/128gb ssd - Emas</Text>
							<Text style={styles.productPrice}>Rp 8.499.000</Text>
						</View>
					</CardItem>

					<CardItem style={{paddingTop:0}}>
						<Row>
							<Col style={{flex:0.8, alignItems:'flex-end'}}>
								<Text style={styles.removeQty}>
									<Icon name='remove' style={{fontSize:17, color:'#e0e0e0'}}/>
								</Text>
							</Col>
							<Col style={{flex:0.2}}>
								<Item style={{borderColor:'#1CC625', top:-20}}>
									<Input value={'1'} style={{paddingBottom:0, fontSize:14, textAlign:'center'}} />
								</Item>
							</Col>
							<Col style={{flex:0.1, alignItems:'flex-end'}}>
								<Text style={styles.addQty}>
									<Icon name='add' style={{fontSize:17, color:'#1CC625'}}/>
								</Text>
							</Col>
						</Row>
					</CardItem>

					<View style={styles.footerInfo}>
						<Text>
							<Text style={{color:'#bdbdbd', fontSize:12}}>Catatan untuk penjual (Opsional)</Text> <Text style={{fontSize:12, color:'#1CC625'}}>Tulis Catatan</Text>
						</Text>
						<Item style={{borderColor:'#1CC625', flex:1, width:'100%', top:-10}}>
							<Input value={'Emas'} style={{paddingBottom:0, fontSize:12}} />
						</Item>
					</View>
				</Card>
			</Content>
		)
	}
}

const styles = StyleSheet.create({
	cardFull: {
		marginTop: 20,
		marginHorizontal:0,
		width:'100%',
		marginLeft:0,
		borderRadius:0
	},
	promoText: {
		color:'#1CC625',
		fontSize:13,
		left:-5
	},
	trashIcon: {
		flex:0.2,
		fontSize:16,
		color:'#bdbdbd',
		right:-50
	},
	productPrice: {
		fontSize:13,
		color:'#ff5722',
		marginTop:8
	},
	removeQty: {
		padding:5,
		paddingRight:9,
		paddingLeft:9,
		borderRadius:15,
		borderWidth:0.5,
		borderColor:'#e0e0e0'
	},
	addQty: {
		padding:5,
		paddingRight:9,
		paddingLeft:9,
		borderRadius:15,
		borderWidth:0.5,
		borderColor:'#1CC625'
	},
	footerInfo: {
		borderTopWidth:0.5,
		borderColor:'#e0e0e0',
		padding:10,
		paddingLeft:15,
		paddingRight:15,
		justifyContent:'center'
	},
	topInfo: {
		borderBottomWidth:0.5,
		borderColor:'#e0e0e0',
		padding:10,
		paddingBottom:22,
		paddingLeft:15,
		paddingRight:15,
		flexDirection:'row'
	}
});