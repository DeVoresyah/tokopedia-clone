import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import {
	Text,
	Icon,
	Content,
	Button,
	Body,
	Title,
	Thumbnail
	} from 'native-base';
import { Grid, Col, Row } from 'react-native-easy-grid';

export default class WishContent extends Component {
	constructor() {
	  super();
	
	  this.state = {
	  	wishImg: [
	  		require('../../assets/img/wish/product1.jpg'),
	  		require('../../assets/img/wish/product2.png'),
	  		require('../../assets/img/wish/product3.jpg'),
	  		require('../../assets/img/wish/product4.jpg'),
	  		require('../../assets/img/wish/product5.jpg'),
	  		require('../../assets/img/wish/product6.jpg')
	  	]
	  };
	}

	render() {
		return (
			<Content>
				<Row>
					<Col>
						<View style={styles.firstView}>
							<Image source={this.state.wishImg[0]} style={styles.productThumb} />
							<View>
								<Text style={styles.productName}>ASUS A407UB - i3 6006U - 4GB - 1TB-...</Text>
								<Text style={styles.productPrice}>Rp 5.900.000</Text>
								<Text style={styles.sellerName}>SINAR 21</Text>

								<Row style={{marginTop:15}}>
									<Col>
										<Image style={{width:11, height:14}} source={{uri: 'https://ecs7.tokopedia.net/assets-tokopedia-lite/prod/7bde0de9.png'}} />
									</Col>
									<Col style={{flex:7, alignItems:'flex-start'}}>
										<Text style={styles.location}>Jakarta</Text>
									</Col>
									<Col style={{alignItems:'flex-end'}}>
										<Image style={{width:16, height:16}} source={{uri: 'https://ecs7.tokopedia.net/img/gold-active-large.png'}} />
									</Col>
								</Row>
								<Row style={{marginTop:5}}>
									<Col style={{flex:2, alignItems:'center', justifyContent:'center'}}>
										<Text><Icon name='ios-trash-outline' style={{color:'#424242'}}/></Text>
									</Col>
									<Col style={{flex:8}}>
										<Text style={styles.buyBtn} onPress={() => this.props.navigation.navigate('Cart')} >Beli</Text>
									</Col>
								</Row>
							</View>
						</View>
					</Col>
					<Col>
						<View style={styles.secondView}>
							<Image source={this.state.wishImg[1]} style={styles.productThumb} />
							<View>
								<Text style={styles.productName}>HP 15-BW541AU AMD E2 RAM 4GB 500GB...</Text>
								<Text style={styles.productPrice}>Rp 3.099.000</Text>
								<Text style={styles.sellerName}>Collins Computer</Text>

								<Row style={{marginTop:15}}>
									<Col>
										<Image style={{width:11, height:14}} source={{uri: 'https://ecs7.tokopedia.net/assets-tokopedia-lite/prod/7bde0de9.png'}} />
									</Col>
									<Col style={{flex:7, alignItems:'flex-start'}}>
										<Text style={styles.location}>Sawah Besar</Text>
									</Col>
									<Col style={{alignItems:'flex-end'}}>
										<Image style={{width:16, height:16}} source={{uri: 'https://ecs7.tokopedia.net/img/gold-active-large.png'}} />
									</Col>
								</Row>
								<Row style={{marginTop:5}}>
									<Col style={{flex:2, alignItems:'center', justifyContent:'center'}}>
										<Text><Icon name='ios-trash-outline' style={{color:'#424242'}}/></Text>
									</Col>
									<Col style={{flex:8}}>
										<Text style={styles.soldBtn}>Stok Habis</Text>
									</Col>
								</Row>
							</View>
						</View>
					</Col>
				</Row>
				<Row>
					<Col>
						<View style={styles.firstView}>
							<Image source={this.state.wishImg[2]} style={styles.productThumb} />
							<View>
								<Text style={styles.productName}>Jaket Gaming Dota 2 Team Liquid Blue 2017...</Text>
								<Text style={styles.productPrice}>Rp 190.000</Text>
								<Text style={styles.sellerName}>OPPAISTORE</Text>

								<Row style={{marginTop:15}}>
									<Col>
										<Image style={{width:11, height:14}} source={{uri: 'https://ecs7.tokopedia.net/assets-tokopedia-lite/prod/7bde0de9.png'}} />
									</Col>
									<Col style={{flex:7, alignItems:'flex-start'}}>
										<Text style={styles.location}>Jakarta</Text>
									</Col>
									<Col style={{alignItems:'flex-end'}}>
									</Col>
								</Row>
								<Row style={{marginTop:5}}>
									<Col style={{flex:2, alignItems:'center', justifyContent:'center'}}>
										<Text><Icon name='ios-trash-outline' style={{color:'#424242'}}/></Text>
									</Col>
									<Col style={{flex:8}}>
										<Text style={styles.buyBtn} onPress={() => this.props.navigation.navigate('Cart')} >Beli</Text>
									</Col>
								</Row>
							</View>
						</View>
					</Col>
					<Col>
						<View style={styles.secondView}>
							<Image source={this.state.wishImg[3]} style={styles.productThumb} />
							<View>
								<Text style={styles.productName}>Screen Protector untuk Xiaomi Mi Notebook Ai...</Text>
								<Text style={styles.productPrice}>Rp 23.000</Text>
								<Text style={styles.sellerName}>web komputindo</Text>

								<Row style={{marginTop:15}}>
									<Col>
										<Image style={{width:11, height:14}} source={{uri: 'https://ecs7.tokopedia.net/assets-tokopedia-lite/prod/7bde0de9.png'}} />
									</Col>
									<Col style={{flex:7, alignItems:'flex-start'}}>
										<Text style={styles.location}>Jakarta</Text>
									</Col>
									<Col style={{alignItems:'flex-end'}}>
										<Image style={{width:16, height:16}} source={{uri: 'https://ecs7.tokopedia.net/img/gold-active-large.png'}} />
									</Col>
								</Row>
								<Row style={{marginTop:5}}>
									<Col style={{flex:2, alignItems:'center', justifyContent:'center'}}>
										<Text><Icon name='ios-trash-outline' style={{color:'#424242'}}/></Text>
									</Col>
									<Col style={{flex:8}}>
										<Text style={styles.buyBtn} onPress={() => this.props.navigation.navigate('Cart')} >Beli</Text>
									</Col>
								</Row>
							</View>
						</View>
					</Col>
				</Row>
				<Row>
					<Col>
						<View style={styles.firstView}>
							<Image source={this.state.wishImg[4]} style={styles.productThumb} />
							<View>
								<Text style={styles.productName}>Xiaomi Redmi Note 5 Pro Ram 4/64GB Garansi...</Text>
								<Text style={styles.productPrice}>Rp 2.455.000</Text>
								<Text style={styles.sellerName}>Supplier Sparepart HP</Text>

								<Row style={{marginTop:15}}>
									<Col>
										<Image style={{width:11, height:14}} source={{uri: 'https://ecs7.tokopedia.net/assets-tokopedia-lite/prod/7bde0de9.png'}} />
									</Col>
									<Col style={{flex:7, alignItems:'flex-start'}}>
										<Text style={styles.location}>Jakarta</Text>
									</Col>
									<Col style={{alignItems:'flex-end'}}>
										<Image style={{width:16, height:16}} source={{uri: 'https://ecs7.tokopedia.net/img/gold-active-large.png'}} />
									</Col>
								</Row>
								<Row style={{marginTop:5}}>
									<Col style={{flex:2, alignItems:'center', justifyContent:'center'}}>
										<Text><Icon name='ios-trash-outline' style={{color:'#424242'}}/></Text>
									</Col>
									<Col style={{flex:8}}>
										<Text style={styles.buyBtn} onPress={() => this.props.navigation.navigate('Cart')} >Beli</Text>
									</Col>
								</Row>
							</View>
						</View>
					</Col>
					<Col>
						<View style={styles.secondView}>
							<Image source={this.state.wishImg[5]} style={styles.productThumb} />
							<View>
								<Text style={styles.productName}>SSD WD My Passport 512GB External SSD...</Text>
								<Text style={styles.productPrice}>Rp 2.544.000</Text>
								<Text style={styles.sellerName}>DUNIA COMPUTER & SERVICE</Text>

								<Row style={{marginTop:15}}>
									<Col>
										<Image style={{width:11, height:14}} source={{uri: 'https://ecs7.tokopedia.net/assets-tokopedia-lite/prod/7bde0de9.png'}} />
									</Col>
									<Col style={{flex:7, alignItems:'flex-start'}}>
										<Text style={styles.location}>Jakarta</Text>
									</Col>
									<Col style={{alignItems:'flex-end'}}>
										<Image style={{width:16, height:16}} source={{uri: 'https://ecs7.tokopedia.net/img/gold-active-large.png'}} />
									</Col>
								</Row>
								<Row style={{marginTop:5}}>
									<Col style={{flex:2, alignItems:'center', justifyContent:'center'}}>
										<Text><Icon name='ios-trash-outline' style={{color:'#424242'}}/></Text>
									</Col>
									<Col style={{flex:8}}>
										<Text style={styles.buyBtn} onPress={() => this.props.navigation.navigate('Cart')} >Beli</Text>
									</Col>
								</Row>
							</View>
						</View>
					</Col>
				</Row>
			</Content>
		)
	}
}

const styles = StyleSheet.create({
	firstView: {
		flex:1,
		backgroundColor:'#fff',
		borderBottomColor: '#e0e0e0',
		borderBottomWidth: 1,
		borderRightWidth: 1,
		borderRightColor: '#e0e0e0',
		padding:4
	},
	secondView: {
		backgroundColor: '#fff',
		borderBottomWidth: 1,
		borderBottomColor: '#e0e0e0',
		padding:4
	},
	productThumb: {
		width: '100%',
		height: 180,
		resizeMode:'cover'
	},
	productName: {
		color:'#1CC625',
		fontSize:15
	},
	productPrice: {
		color:'#ff5722',
		fontSize:11,
		fontWeight:'bold',
		marginTop:5
	},
	sellerName: {
		marginTop:3,
		color:'rgba(0,0,0,.54)',
		fontSize:12
	},
	location: {
		fontSize:11,
		left:-6,
		color: '#bdbdbd'
	},
	buyBtn: {
		backgroundColor:'rgb(255, 87, 34)',
		color: '#fff',
		fontSize:14,
		padding:7,
		justifyContent: 'center',
		alignSelf: 'center',
		textAlign: 'center',
		width:'100%'
	},
	soldBtn: {
		backgroundColor: '#e0e0e0',
		color: '#757575',
		fontSize: 14,
		borderWidth: 1,
		borderColor: '#757575',
		padding:7,
		justifyContent: 'center',
		alignSelf: 'center',
		textAlign: 'center',
		width: '100%'
	}
})