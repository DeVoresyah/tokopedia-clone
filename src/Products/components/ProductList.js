import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import {
	Text,
	Icon,
	Content,
	Button,
	Body,
	Title,
	Thumbnail,
	} from 'native-base';
import { Grid, Col, Row } from 'react-native-easy-grid';

export default class ProductList extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	thumbList: [
	  		'https://ecs7.tokopedia.net/img/cache/200-square/product-1/2018/7/17/1543579/1543579_b4cd1976-3071-4d86-85b6-d532774be460_500_500.png',
	  		'https://ecs7.tokopedia.net/img/cache/200-square/product-1/2016/6/2/4627548/4627548_ea691480-4158-4503-a1e6-3140eb1e3d4d.jpg',
	  		'https://ecs7.tokopedia.net/img/cache/200-square/product-1/2018/3/8/4979529/4979529_1ec8c7fd-9afb-4e9d-88af-9a0802ba430c_600_369.jpg.webp',
	  		'https://ecs7.tokopedia.net/img/cache/200-square/product-1/2018/6/30/28702419/28702419_358c71cd-516e-4ea3-acef-991301312c24_500_500.png.webp',
	  		'https://ecs7.tokopedia.net/img/cache/200-square/product-1/2018/3/8/13846307/13846307_ab5fee8b-4c64-4c92-8825-3627706435c8_700_700.jpg.webp',
	  		'https://ecs7.tokopedia.net/img/cache/200-square/product-1/2018/3/8/4077432/4077432_7d83ad20-8635-41a1-b679-56d64bbb7f7b_800_800.jpg.webp'
	  	]
	  };
	}

	render() {
		return (
			<Content>
				<View style={{padding:10}}>
					<Text style={{color:'#757575'}}>666.502 Produk</Text>
				</View>
				<Row>
					<Col>
						<View style={styles.firstView}>
							<TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('ProductDetails')}>
								<Image source={{uri: this.state.thumbList[0]}} style={styles.productThumb} />
								<View style={{padding:8}}>
									<Text style={styles.productName}>Asus Transformer Flip TP203NAH (N3350, 4GB, ...</Text>
									<Text style={styles.productPrice}>Rp 4.466.000</Text>

									<Row style={{marginTop:20}}>
									</Row>
									<Row style={{marginTop:10}}>
										<Col style={styles.productFooterLeft}>
											<Text style={styles.productFooterName}>Karya Citra Computers</Text>
										</Col>
										<Col style={styles.productFooterRight}>
											<Icon type='FontAwesome' name='bullhorn' style={styles.productFooterName} />
										</Col>
									</Row>
									<Row style={{marginTop:3}}>
										<Col>
											<Image style={{width:11, height:14}} source={{uri: 'https://ecs7.tokopedia.net/assets-tokopedia-lite/prod/7bde0de9.png'}} />
										</Col>
										<Col style={{flex:6, alignItems:'flex-start'}}>
											<Text style={styles.productFooterName}>Jakarta</Text>
										</Col>
										<Col style={styles.productFooterRight}>
											<Image style={{width:16, height:16}} source={{uri: 'https://ecs7.tokopedia.net/img/gold-active-large.png'}} />
										</Col>
									</Row>
								</View>
							</TouchableOpacity>
						</View>
					</Col>
					<Col>
						<View style={styles.firstView}>
							<TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('ProductDetails')}>
								<Image source={{uri: this.state.thumbList[1]}} style={styles.productThumb} />
								<View style={{padding:3}}>
									<Text style={styles.productName}>Apple Macbook Pro 15'' Retina Display</Text>
									<Text style={styles.productPrice}>Rp 13.000.000</Text>

									<Row style={{marginTop:20}}>
										<View style={styles.cashback}>
											<Text style={{fontSize:10, color:'#fff'}}>Cashback 3%</Text>
										</View>
									</Row>
									<Row style={{marginTop:5}}>
										<Col style={styles.productFooterLeft}>
											<Text style={styles.productFooterName}>TokoComplit</Text>
										</Col>
										<Col style={styles.productFooterRight}>
											<Icon type='FontAwesome' name='bullhorn' style={styles.productFooterName} />
										</Col>
									</Row>
									<Row style={{marginTop:3}}>
										<Col>
											<Image style={{width:11, height:14}} source={{uri: 'https://ecs7.tokopedia.net/assets-tokopedia-lite/prod/7bde0de9.png'}} />
										</Col>
										<Col style={{flex:6, alignItems:'flex-start'}}>
											<Text style={styles.productFooterName}>Jakarta</Text>
										</Col>
										<Col style={styles.productFooterRight}>
											<Image style={{width:16, height:16}} source={{uri: 'https://ecs7.tokopedia.net/img/gold-active-large.png'}} />
										</Col>
									</Row>
								</View>
							</TouchableOpacity>
						</View>
					</Col>
				</Row>
				<Row>
					<Col>
						<View style={styles.firstView}>
							<TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('ProductDetails')}>
								<Image source={{uri: this.state.thumbList[2]}} style={styles.productThumb} />
								<View style={{padding:8}}>
									<Text style={styles.productName}>Asus A442UF/i7-8550UQ/8GB/1TB/MX130 2GB DDR5/Win10</Text>
									<Text style={styles.productPrice}>Rp 10.150.000</Text>
									<View style={{marginTop:8, flexDirection:'row'}}>
										<View style={{flex:1}}>
											<Icon type='FontAwesome' name='star' style={styles.starIcon} />
										</View>
										<View style={{flex:1}}>
											<Icon type='FontAwesome' name='star' style={styles.starIcon} />
										</View>
										<View style={{flex:1}}>
											<Icon type='FontAwesome' name='star' style={styles.starIcon} />
										</View>
										<View style={{flex:1}}>
											<Icon type='FontAwesome' name='star' style={styles.starIcon} />
										</View>
										<View style={{flex:1}}>
											<Icon type='FontAwesome' name='star' style={styles.starIcon} />
										</View>
										<View style={{flex:7}}>
											<Text style={styles.productFooterName}>(100)</Text>
										</View>
									</View>

									<Row style={{marginTop:10}}>
									</Row>
									<Row style={{marginTop:10}}>
										<Col style={styles.productFooterLeft}>
											<Text style={styles.productFooterName}>VISTAR518</Text>
										</Col>
										<Col style={styles.productFooterRight}>
											
										</Col>
									</Row>
									<Row style={{marginTop:3}}>
										<Col>
											<Image style={{width:11, height:14}} source={{uri: 'https://ecs7.tokopedia.net/assets-tokopedia-lite/prod/7bde0de9.png'}} />
										</Col>
										<Col style={{flex:6, alignItems:'flex-start'}}>
											<Text style={styles.productFooterName}>Jakarta</Text>
										</Col>
										<Col style={styles.productFooterRight}>
											<Image style={{width:16, height:16}} source={{uri: 'https://ecs7.tokopedia.net/img/gold-active-large.png'}} />
										</Col>
									</Row>
								</View>
							</TouchableOpacity>
						</View>
					</Col>
					<Col>
						<View style={styles.firstView}>
							<TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('ProductDetails')}>
								<Image source={{uri: this.state.thumbList[3]}} style={styles.productThumb} />
								<View style={{padding:3}}>
									<Text style={styles.productName}>ASUS VIVOBOOK PRO N580VD FY001T - GTX1050 4GB Ci7-7700HQ 8GB 1TB+128GB</Text>
									<Text style={styles.productPrice}>Rp 14.490.000</Text>

									<Row style={{marginTop:20}}>
									</Row>
									<Row style={{marginTop:10}}>
										<Col style={styles.productFooterLeft}>
											<Text style={styles.productFooterName}>Cyberpad</Text>
										</Col>
										<Col style={styles.productFooterRight}>
										</Col>
									</Row>
									<Row style={{marginTop:3}}>
										<Col>
											<Image style={{width:11, height:14}} source={{uri: 'https://ecs7.tokopedia.net/assets-tokopedia-lite/prod/7bde0de9.png'}} />
										</Col>
										<Col style={{flex:6, alignItems:'flex-start'}}>
											<Text style={styles.productFooterName}>Jakarta</Text>
										</Col>
										<Col style={styles.productFooterRight}>
										</Col>
									</Row>
								</View>
							</TouchableOpacity>
						</View>
					</Col>
				</Row>
				<Row>
					<Col>
						<View style={styles.firstView}>
							<TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('ProductDetails')}>
								<Image source={{uri: this.state.thumbList[4]}} style={styles.productThumb} />
								<View style={{padding:8}}>
									<Text style={styles.productName}>DELL VOSTRO 14 3468 i3-7100 4GB 1TB</Text>
									<Text style={styles.productPrice}>Rp 5.770.000</Text>

									<Row style={{marginTop:20}}>
									</Row>
									<Row style={{marginTop:10}}>
										<Col style={styles.productFooterLeft}>
											<Text style={styles.productFooterName}>RONIN COMP</Text>
										</Col>
										<Col style={styles.productFooterRight}>
										</Col>
									</Row>
									<Row style={{marginTop:3}}>
										<Col>
											<Image style={{width:11, height:14}} source={{uri: 'https://ecs7.tokopedia.net/assets-tokopedia-lite/prod/7bde0de9.png'}} />
										</Col>
										<Col style={{flex:6, alignItems:'flex-start'}}>
											<Text style={styles.productFooterName}>Jakarta</Text>
										</Col>
										<Col style={styles.productFooterRight}>										
										</Col>
									</Row>
								</View>
							</TouchableOpacity>
						</View>
					</Col>
					<Col>
						<View style={styles.firstView}>
							<TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('ProductDetails')}>
								<Image source={{uri: this.state.thumbList[5]}} style={styles.productThumb} />
								<View style={{padding:3}}>
									<Text style={styles.productName}>ASUS Laptop Transformer TP410UA-EC301T i3-7100U 4GB 500GB W10</Text>
									<Text style={styles.productPrice}>Rp 6.780.000</Text>

									<Row style={{marginTop:10}}>
									</Row>
									<Row style={{marginTop:5}}>
										<Col style={styles.productFooterLeft}>
											<Text style={styles.productFooterName}>YOLIN COMP</Text>
										</Col>
										<Col style={styles.productFooterRight}>
										</Col>
									</Row>
									<Row style={{marginTop:3}}>
										<Col>
											<Image style={{width:11, height:14}} source={{uri: 'https://ecs7.tokopedia.net/assets-tokopedia-lite/prod/7bde0de9.png'}} />
										</Col>
										<Col style={{flex:6, alignItems:'flex-start'}}>
											<Text style={styles.productFooterName}>Jakarta</Text>
										</Col>
										<Col style={styles.productFooterRight}>
											<Image style={{width:16, height:16}} source={{uri: 'https://ecs7.tokopedia.net/img/gold-active-large.png'}} />
										</Col>
									</Row>
								</View>
							</TouchableOpacity>
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
		borderRightColor: '#e0e0e0'
	},
	secondView: {
		backgroundColor: '#fff',
		borderBottomWidth: 1,
		borderBottomColor: '#e0e0e0'
	},
	productThumb: {
		width: '100%',
		height: 180,
		resizeMode:'cover'
	},
	productName: {
		color:'#424242',
		fontSize:13
	},
	productPrice: {
		color:'#ff5722',
		fontSize:13,
		fontWeight:'bold',
		marginTop:5
	},
	productFooterLeft: {
		alignItems:'flex-start',
		flex:8
	},
	productFooterRight: {
		alignItems:'flex-end'
	},
	productFooterName: {
		color:'rgba(0,0,0,.54)',
		fontSize:11
	},
	cashback: {
		backgroundColor: '#1CC625',
		borderRadius:3,
		padding:5,
		paddingTop:1,
		paddingBottom:1
	},
	starIcon: {
		fontSize:12,
		color:'#fec112'
	}
})