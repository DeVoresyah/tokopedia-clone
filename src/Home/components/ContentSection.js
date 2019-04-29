import React, { Component } from 'react';
import { View, Image, StyleSheet, Dimensions, ScrollView, ImageBackground, TouchableOpacity} from 'react-native';
import { Container, Button, Icon, Tabs, Tab, StyleProvider, Content, Thumbnail, Card, CardItem, Body, Badge, Text} from 'native-base';
import { Grid, Col, Row } from 'react-native-easy-grid';
import Swiper from 'react-native-swiper';
import CountDown from 'react-native-countdown-component';
import LinearGradient from 'react-native-linear-gradient';
import DigitalTabs from '../components/DigitalTabs';
const { width } = Dimensions.get('window');


export default class ContentSection extends Component {
	constructor() {
	  super();
	
	  this.state = {
	  	imgList: [
	  		'https://ecs7.tokopedia.net/img/banner/2018/7/20/25618007/25618007_6031f197-e7d5-4b46-9353-e050724a1a05.jpg',
	  		'https://ecs7.tokopedia.net/img/banner/2018/7/2/25618007/25618007_781fa693-e0fa-4f32-bff6-a2c4a64ba0c1.jpg',
	  		'https://ecs7.tokopedia.net/img/banner/2018/7/20/25618007/25618007_867bfe2c-7622-48b4-9266-14d47d8f1a56.jpg'
	  	],
	  	iconList: [
	  		'https://ecs7.tokopedia.net/img/cache/100-square/attachment/2018/7/4/8470985/8470985_32575b82-f7c6-4e0e-9d2f-7341b457fe67.png',
	  		'https://ecs7.tokopedia.net/img/cache/100-square/attachment/2018/7/4/8470985/8470985_336c29f2-f590-4737-80f6-8db9d3bf0e0e.png',
	  		'https://ecs7.tokopedia.net/img/cache/100-square/attachment/2018/7/4/8470985/8470985_9f04d16f-161e-4cff-a612-b923ea5fa5d5.png',
	  		'https://ecs7.tokopedia.net/img/cache/100-square/attachment/2018/7/4/8470985/8470985_867bf490-8a8a-41d5-885a-244ab80eda9e.png',
	  		'https://ecs7.tokopedia.net/img/cache/100-square/attachment/2018/7/4/8470985/8470985_bad813ad-9ebe-4d8c-97f9-3f37d510536d.png',
	  		'https://ecs7.tokopedia.net/img/cache/100-square/attachment/2018/5/26/3127195/3127195_9920081e-6493-48a3-aa21-2ece04f7ce8c.png',
	  		'https://ecs7.tokopedia.net/img/cache/100-square/attachment/2018/6/8/3127195/3127195_93c9f38b-fb78-4022-bb86-f2553447dd6a.png',
	  		'https://ecs7.tokopedia.net/img/cache/100-square/attachment/2018/7/23/35341190/35341190_cfe35425-8ef2-410a-bd11-2c793b8c923a.png',
	  		'https://ecs7.tokopedia.net/img/cache/100-square/attachment/2018/7/23/35341190/35341190_bda0a204-f21f-410a-bb1c-dc7073f68803.png',
	  		'https://ecs7.tokopedia.net/img/cache/100-square/attachment/2018/7/20/35972976/35972976_8d248d06-2b76-459e-804f-1f0ee4fbc857.png'
	  	],
	  	flashProduct: [
	  		require('../../assets/img/flash-sale/product1.jpg'),
	  		require('../../assets/img/flash-sale/product2.jpg'),
	  		require('../../assets/img/flash-sale/product3.png'),
	  		require('../../assets/img/flash-sale/product4.jpg')
	  	],
	  	flashBg: require('../../assets/img/flash-sale/bg.png'),
	  	otomotif: [
	  		require('../../assets/img/tags/otomotif/top.jpg'),
	  		require('../../assets/img/tags/otomotif/bot.jpg'),
	  		require('../../assets/img/tags/otomotif/1.jpg'),
	  		require('../../assets/img/tags/otomotif/2.jpg'),
	  		require('../../assets/img/tags/otomotif/3.jpg'),
	  		require('../../assets/img/tags/otomotif/4.jpg')
	  	],
	  	makersDay: [
	  		require('../../assets/img/tags/ofday/top.jpg'),
	  		require('../../assets/img/tags/ofday/bot.jpg'),
	  		require('../../assets/img/tags/ofday/1.jpg'),
	  		require('../../assets/img/tags/ofday/2.jpg'),
	  		require('../../assets/img/tags/ofday/3.jpg'),
	  		require('../../assets/img/tags/ofday/4.jpg')
	  	],
	  	kamar: [
	  		require('../../assets/img/tags/kamar/top.jpg'),
	  		require('../../assets/img/tags/kamar/bot.jpg'),
	  		require('../../assets/img/tags/kamar/1.jpg'),
	  		require('../../assets/img/tags/kamar/2.jpg'),
	  		require('../../assets/img/tags/kamar/3.jpg'),
	  		require('../../assets/img/tags/kamar/4.jpg')
	  	]
	  };
	}

	render() {
		return (
			<Content>
				<Swiper loop={true} showButtons={false} autoplay={true} style={{height:193}} paginationStyle={{
					position:'absolute',
					top:180,
					left:-200
					}}>
					{
						this.state.imgList.map((item, index) => {
							return(
								<View key={index}>
									<Image source={{uri: item}} style={styles.slideImage} />
								</View>
							)
						})
					}
				</Swiper>
				<Grid style={{backgroundColor:'#eeeeee', padding:15}}>
					<Row>
						<Col>
							<TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('Products')}>
								<Thumbnail square small source={{uri: this.state.iconList[0]}} style={styles.iconThumb} />
								<Text style={styles.iconText}>Kategori</Text>
							</TouchableOpacity>
						</Col>
						<Col>
							<TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('Products')}>
								<Thumbnail square small source={{uri: this.state.iconList[1]}} style={styles.iconThumb} />
								<Text style={styles.iconText}>Tagihan</Text>
							</TouchableOpacity>
						</Col>
						<Col>
							<TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('Products')}>
								<Thumbnail square small source={{uri: this.state.iconList[2]}} style={styles.iconThumb} />
								<Text style={styles.iconText}>Tiket</Text>
							</TouchableOpacity>
						</Col>
						<Col>
							<TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('Products')}>
								<Thumbnail square small source={{uri: this.state.iconList[3]}} style={styles.iconThumb} />
								<Text style={styles.iconText}>Keuangan</Text>
							</TouchableOpacity>
						</Col>
						<Col>
							<TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('Products')}>
								<Thumbnail square small source={{uri: this.state.iconList[4]}} style={styles.iconThumb} />
								<Text style={styles.iconText}>Jual</Text>
							</TouchableOpacity>
						</Col>
					</Row>
					<Row style={{marginTop:10}}>
						<Col>
							<TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('Products')}>
								<Thumbnail square small source={{uri: this.state.iconList[5]}} style={styles.iconThumb} />
								<Text style={styles.iconText}>Official Store</Text>
							</TouchableOpacity>
						</Col>
						<Col>
							<TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('Products')}>
								<Thumbnail square small source={{uri: this.state.iconList[6]}} style={styles.iconThumb} />
								<Text style={styles.iconText}>Kamera</Text>
							</TouchableOpacity>
						</Col>
						<Col>
							<TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('Products')}>
								<Thumbnail square small source={{uri: this.state.iconList[7]}} style={styles.iconThumb} />
								<Text style={styles.iconText}>Ansuran Kredit</Text>
							</TouchableOpacity>
						</Col>
						<Col>
							<Thumbnail square small source={{uri: this.state.iconList[8]}} style={styles.iconThumb} />
							<Text style={styles.iconText}>Pulsa</Text>
						</Col>
						<Col>
							<Thumbnail square small source={{uri: this.state.iconList[9]}} style={styles.iconThumb} />
							<Text style={styles.iconText}>Pinjaman Online</Text>
						</Col>
					</Row>
				</Grid>
				<ImageBackground style={styles.flashBg} source={this.state.flashBg}>
					<Grid style={{padding:10}}>
						<Row>
							<Col style={{flex:3}}>
								<Text style={{color: '#fff'}}>Flash Sale</Text>
							</Col>
							<Col style={{flex:5}}>
								<CountDown
							        until={100}
							        size={12}
							        digitBgColor={'#fff'}
							        digitTxtColor={'#000'}
							        timeToShow={['H', 'M', 'S']}
							        labelH={''}
							        labelM={''}
							        labelS={''}
							        style={styles.countdown}
							      />
							</Col>
							<Col style={{flex:4}}>
								<Button small style={styles.flashBtn} onPress={() => this.props.navigation.navigate('Products')} >
									<Text style={styles.flashBtnText}>Lihat Semua</Text>
								</Button>
							</Col>
						</Row>
						<Row>
							<Col>
								<ScrollView horizontal={true}>
									<View style={[styles.flashProductOuter, {marginLeft:0}]}>
										<TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('ProductDetails')}>
											<ImageBackground style={styles.flashWrapperBg} source={this.state.flashProduct[0]}>
												<Text style={styles.productOffer}>8% OFF</Text>
											</ImageBackground>
											<Text style={styles.priceBefore}>
												Rp 129.000
											</Text>
											<Text style={styles.priceAfter}>
												Rp 119.000
											</Text>
											<View style={styles.saleProgress}>
												<LinearGradient
												colors={['rgb(249, 188, 192)', 'rgb(224, 132, 138)']}
												style={{flex:0.25, height:'100%'}}
												start={{x: 0, y: 0}}
												end={{x: 1, y: 0}}
												>
												</LinearGradient>
												<View style={{flex:0.75, height:'100%', backgroundColor:'rgb(224, 224, 224)'}} />
											</View>
											<Text style={styles.stockStatus}>Terjual Sebagian</Text>
										</TouchableOpacity>
									</View>
									<View style={styles.flashProductOuter}>
										<TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('ProductDetails')}>
											<ImageBackground style={styles.flashWrapperBg} source={this.state.flashProduct[1]}>
												<Text style={styles.productOffer}>28% OFF</Text>
											</ImageBackground>
											<Text style={styles.priceBefore}>
												Rp 587.300
											</Text>
											<Text style={styles.priceAfter}>
												Rp 420.000
											</Text>
											<View style={styles.saleProgress}>
												<View style={{flex:1, height:'100%', backgroundColor:'rgb(224, 224, 224)'}} />
											</View>
											<Text style={styles.stockStatus}>Masih Tersedia</Text>
										</TouchableOpacity>
									</View>
									<View style={styles.flashProductOuter}>
										<TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('ProductDetails')}>
											<ImageBackground style={styles.flashWrapperBg} source={this.state.flashProduct[2]}>
												<Text style={styles.productOffer}>20% OFF</Text>
											</ImageBackground>
											<Text style={styles.priceBefore}>
												Rp 199.000
											</Text>
											<Text style={styles.priceAfter}>
												Rp 159.200
											</Text>
											<View style={styles.saleProgress}>
												<LinearGradient
												colors={['rgb(249, 188, 192)', 'rgb(224, 132, 138)']}
												style={{flex:0.1, height:'100%'}}
												start={{x: 0, y: 0}}
												end={{x: 1, y: 0}}
												>
												</LinearGradient>
												<View style={{flex:0.9, height:'100%', backgroundColor:'rgb(224, 224, 224)'}} />
											</View>
											<Text style={styles.stockStatus}>Terjual Sebagian</Text>
										</TouchableOpacity>
									</View>
									<View style={styles.flashProductOuter}>
										<TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('ProductDetails')}>
											<ImageBackground style={styles.flashWrapperBg} source={this.state.flashProduct[3]}>
												<Text style={styles.productOffer}>23% OFF</Text>
											</ImageBackground>
											<Text style={styles.priceBefore}>
												Rp 3.299.000
											</Text>
											<Text style={styles.priceAfter}>
												Rp 2.549.000
											</Text>
											<View style={styles.saleProgress}>
												<LinearGradient
												colors={['rgb(249, 188, 192)', 'rgb(224, 132, 138)']}
												style={{flex:0.1, height:'100%'}}
												start={{x: 0, y: 0}}
												end={{x: 1, y: 0}}
												>
												</LinearGradient>
												<View style={{flex:0.9, height:'100%', backgroundColor:'rgb(224, 224, 224)'}} />
											</View>
											<Text style={styles.stockStatus}>Terjual Sebagian</Text>
										</TouchableOpacity>
									</View>
								</ScrollView>
							</Col>
						</Row>
					</Grid>
				</ImageBackground>

				<View style={{backgroundColor:'#eee'}}>
					<View style={styles.tagsOuter}>
						<View style={{padding:15, justifyContent:'center'}}>
							<Text style={styles.tagsTitle}>Produk Otomotif Pilihan</Text>
						</View>

						<View style={styles.tagsCol}>
							<Image source={this.state.otomotif[0]} style={styles.tagsImg} />
							<Image source={this.state.otomotif[2]} style={styles.tagsImg} />
							<Image source={this.state.otomotif[3]} style={styles.tagsImg} />
						</View>
						<View style={styles.tagsCol}>
							<Image source={this.state.otomotif[1]} style={styles.tagsImg} />
							<Image source={this.state.otomotif[4]} style={styles.tagsImg} />
							<Image source={this.state.otomotif[5]} style={styles.tagsImg} />
						</View>
					</View>

					<View style={styles.tagsOuter}>
						<View style={{padding:15, justifyContent:'center'}}>
							<Text style={styles.tagsTitle}>Makers of The Day</Text>
						</View>

						<View style={styles.tagsCol}>
								<Image source={this.state.makersDay[0]} style={styles.tagsImg} />
								<Image source={this.state.makersDay[2]} style={styles.tagsImg} />
								<Image source={this.state.makersDay[3]} style={styles.tagsImg} />
						</View>
						<View style={styles.tagsCol}>
								<Image source={this.state.makersDay[1]} style={styles.tagsImg} />
								<Image source={this.state.makersDay[4]} style={styles.tagsImg} />
								<Image source={this.state.makersDay[5]} style={styles.tagsImg} />
						</View>
					</View>

					<View style={styles.tagsOuter}>
						<View style={{padding:15, justifyContent:'center'}}>
							<Text style={styles.tagsTitle}>Kamar Tidur Lebih Nyaman</Text>
						</View>

						<View style={styles.tagsCol}>
								<Image source={this.state.kamar[0]} style={styles.tagsImg} />
								<Image source={this.state.kamar[2]} style={styles.tagsImg} />
								<Image source={this.state.kamar[3]} style={styles.tagsImg} />
						</View>
						<View style={styles.tagsCol}>
								<Image source={this.state.kamar[1]} style={styles.tagsImg} />
								<Image source={this.state.kamar[4]} style={styles.tagsImg} />
								<Image source={this.state.kamar[5]} style={styles.tagsImg} />
						</View>
					</View>

					<View style={styles.tagsOuter}>
						<View style={{padding:15, justifyContent:'center'}}>
							<Text style={styles.tagsTitle}>Produk Digital</Text>
						</View>

						<DigitalTabs />
					</View>
				</View>
			</Content>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	slideImage: {
		width,
		height: 193
	},
	iconThumb: {
		position: 'relative',
		top: 0,
		alignSelf: 'center'
	},
	iconText: {
		fontSize: 10,
		textAlign: 'center'
	},
	flashBg: {
		flex: 1,
		width: '100%',
		justifyContent: 'center',
		resizeMode: 'center'
	},
	flashLeft: {
		flex:7,
		color: '#ffffff'
	},
	flashBtn: {
		backgroundColor: '#ffffff'
	},
	flashBtnText: {
		color: '#1CC625',
		fontSize:10
	},
	countdown: {
		fontWeight:'bold',
		justifyContent:'flex-start',
		alignItems:'flex-start'
	},
	flashProductOuter: {
		backgroundColor:'#fff',
		padding:8,
		width:120,
		borderRadius:4,
		marginLeft:20
	},
	flashWrapperBg: {
		width:'100%',
		height:100,
		resizeMode:'stretch'
	},
	productOffer: {
		backgroundColor:'rgb(253, 235, 236)',
		color:'rgb(234, 33, 45)',
		fontSize:7,
		borderRadius:16,
		borderWidth:1,
		borderColor:'rgb(234, 33, 45)',
		position:'absolute',
		top:0,
		right:0,
		padding:1,
		paddingLeft:5,
		paddingRight:5,
		textAlign:'center',
		justifyContent: 'center',
		fontWeight: 'bold'
	},
	priceBefore: {
		textDecorationLine: 'line-through',
		textDecorationStyle: 'solid',
		fontSize:11,
		color:'#9e9e9e'
	},
	priceAfter: {
		fontSize:12,
		color:'#ff5722',
		marginTop:5
	},
	saleProgress: {
		marginTop:7,
		flex:1,
		flexDirection:'row',
		height:4,
		borderRadius:20
	},
	stockStatus: {
		fontSize:10,
		color:'#757575',
		marginTop:1,
		marginBottom:5
	},
	tagsOuter: {
		backgroundColor:'#fff',
		marginTop:8
	},
	tagsTitle: {
		color:'#212121',
		fontSize:14,
		fontWeight:'bold'
	},
	tagsCol: {
		flex:1,
		flexDirection:'row',
		height:130
	},
	tagsImg: {
		flex:1,
		width:'100%',
		height:'100%',
		resizeMode:'stretch'
	}
});