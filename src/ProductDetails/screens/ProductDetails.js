import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Image, Dimensions } from 'react-native';
import {
	Container,
	Header,
	Left,
	Right,
	Text,
	Icon,
	Button,
	Card,
	CardItem,
	Body,
	Content,
	List,
	ListItem,
	Thumbnail,
	Footer,
	FooterTab,
	StyleProvider
	} from 'native-base';
import { Grid, Col, Row } from 'react-native-easy-grid';
import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material';
import Swiper from 'react-native-swiper';
import LinearGradient from 'react-native-linear-gradient';
const { width, height } = Dimensions.get('window');

class TopHeader extends Component {
	render() {
		if (this.props.current == true) {
			return (
				<Header transparent noShadow>
					<Left>
						<Button transparent onPress={() => this.props.navigation.goBack()} >
			            	<Icon name='arrow-back' style={{color: '#fff'}}/>
			            </Button>
					</Left>
					<Body />
					<Right>
						<Button transparent>
							<Icon name='share' />
						</Button>
						<Button transparent onPress={() => this.props.navigation.navigate('Cart')} >
							<Icon name='cart'/>
						</Button>
						<Button transparent>
							<Icon name='more' />
						</Button>
					</Right>
				</Header>
			)
		} else {
			return (
				<Header style={{backgroundColor: '#fff'}}>
					<Left>
						<Button transparent onPress={() => this.props.navigation.goBack()}>
			            	<Icon name='arrow-back' style={{color: '#9e9e9e'}} />
			            </Button>
					</Left>
					<Body />
					<Right>
						<Button transparent>
							<Icon name='share' style={{color: '#9e9e9e'}}/>
						</Button>
						<Button transparent onPress={() => this.props.navigation.navigate('Cart')}>
							<Icon name='cart' style={{color: '#9e9e9e'}}/>
						</Button>
						<Button transparent>
							<Icon name='more' style={{color: '#9e9e9e'}}/>
						</Button>
					</Right>
				</Header>
			)
		}
	}
}

export default class ProductDetails extends Component {
	constructor() {
	  super();
	
	  this.state = {
	  	imgList: [
	  		require('../../assets/img/product/laptop1.jpg'),
	  		require('../../assets/img/product/laptop2.jpg'),
	  		require('../../assets/img/product/laptop3.jpg')
	  	],
	  	produkInfo: [
	  		'https://ecs7.tokopedia.net/assets-tokopedia-lite/prod/5e894f95.png',
	  		'https://ecs7.tokopedia.net/assets-tokopedia-lite/prod/ca8a3058.png',
	  		'https://ecs7.tokopedia.net/assets-tokopedia-lite/prod/b475eaee.png',
	  		'https://ecs7.tokopedia.net/assets-tokopedia-lite/prod/7561e429.png'
	  	],
	  	relatedImg: [
	  		require('../../assets/img/related/product1.jpg'),
	  		require('../../assets/img/related/product2.jpg'),
	  		require('../../assets/img/related/product3.jpg'),
	  		require('../../assets/img/related/product4.jpg'),
	  		require('../../assets/img/related/product5.jpg')
	  	],
	  	currentScreen: true
	  };
	}

	isScrolled = (event: Object) => {
		if (event.nativeEvent.contentOffset.y >= 80) {
			this.setState({
				currentScreen: false
			})
		} else {
			this.setState({
				currentScreen: true
			})
		}
	}

	render() {
		return (
			<StyleProvider style={getTheme(material)}>
				<Container>
					<LinearGradient colors={['#616161', '#f5f5f5']}>
						<TopHeader current={this.state.currentScreen} navigation={this.props.navigation} />
					</LinearGradient>
						
					<Content onScroll={this.isScrolled}>
						<Swiper
						style={{height:282}}
						loop={false}
						showButtons={false}
						autoPlay={false}
						paginationStyle={{position: 'absolute', top: 240}}
						dot={
							<View style={{backgroundColor:'#fff', width: 7, height: 7,borderRadius: 5, borderWidth:1, borderColor: '#bdbdbd',marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}}/>
						}
						activeDot={
							<View style={{backgroundColor: '#1CC625', width: 7, height: 7, borderRadius: 5, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />
						}>
						{
							this.state.imgList.map((item, index) => {
								return (
									<View key={index}>
										<Image source={item} style={{width:'100%'}} />
									</View>
								)
							})
						}
						</Swiper>
						<View>
							<Button iconLeft rounded style={styles.wishBtn} onPress={() => this.props.navigation.navigate('Wishlist')} >
								<Icon name='ios-heart-outline' style={{color:'#757575', left:-4}}/>
							</Button>
						</View>
						<Row style={{padding:10}}>
							<Col style={{flex:0.8}}>
								<Text style={styles.name}>ASUS A407UB - i3 6006U- 4GB- 1TB- MX110 2GB- WIN10- 14HD- SLIM</Text>
							</Col>
							<Col style={{flex:0.2}}>
								
							</Col>
						</Row>
						<Row style={{padding:10, top:0, marginTop:0}}>
							<Col>
								<View>
									<Text style={styles.price}>Rp 5.900.000</Text>
								</View>
								<View style={styles.stockStatus}>
									<Icon name='ios-archive-outline' style={styles.stockIcon}/>
									<Text style={styles.stockText}>Stok Tersedia</Text>
								</View>
							</Col>
						</Row>
						<Row>
							<Col>
								<Card style={styles.shadowBox}>
									<CardItem>
										<Row>
											<Col style={styles.awBox}>
												<View style={{marginTop:4, flexDirection:'row'}}>
													<View style={styles.starColumn}>
														<Icon type='FontAwesome' name='star' style={styles.starIcon} />
													</View>
													<View style={styles.starColumn}>
														<Icon type='FontAwesome' name='star' style={styles.starIcon} />
													</View>
													<View style={styles.starColumn}>
														<Icon type='FontAwesome' name='star' style={styles.starIcon} />
													</View>
													<View style={styles.starColumn}>
														<Icon type='FontAwesome' name='star' style={styles.starIcon} />
													</View>
													<View style={{flex:0.1}}>
														<Icon type='FontAwesome' name='star' style={styles.starIcon} />
													</View>
												</View>
												<View style={{marginTop:18}}>
													<Text style={styles.greenDesc}>4 Ulasan</Text>
												</View>
											</Col>
											<Col style={styles.awBox}>
												<View style={{left:5}}>
													<Icon name='ios-chatbubbles-outline' style={{fontSize:30, color:'#1CC625'}} />
												</View>
												<View style={{marginTop:5}}>
													<Text style={styles.greenDesc}>10 Diskusi</Text>
												</View>
											</Col>
											<Col style={{alignItems:'center'}}>
												<View>
													<Icon type='FontAwesome' name='truck' style={{fontSize:30, color:'#1CC625'}} />
												</View>
												<View style={{marginTop:5}}>
													<Text style={styles.greenDesc}>4 Kurir</Text>
												</View>
											</Col>
										</Row>
									</CardItem>
								</Card>
							</Col>
						</Row>
						<Row>
							<Col>
								<Card style={styles.shadowBox}>
									<CardItem style={{flexDirection:'column', alignItems:'flex-start'}}>
										<View>
											<Text style={styles.cicilanName}>Simulasi Cicilan</Text>
										</View>
										<View style={{marginTop:7}}>
											<Text style={styles.cicilanDesc}>Cicilan Kartu Kredit Bunga 0% dari 17 Bank</Text>
										</View>
									</CardItem>
								</Card>
							</Col>
						</Row>
						<Row>
							<Col>
								<Card style={styles.shadowBox}>
									<CardItem style={{flex:1, flexDirection:'column'}}>
										<Row>
											<Col>
												<Text style={styles.produkInfoTitle}>Informasi Produk</Text>
											</Col>
										</Row>
										<Row style={{marginTop:25, marginBottom:15}}>
											<Col style={styles.produkInfoColumn}>
												<Image source={{uri: this.state.produkInfo[0]}} style={styles.produkInfoIcon}/>
												<Text style={styles.produkDescTop}>Terjual</Text>
												<Text style={styles.produkDescBot}>8</Text>
											</Col>
											<Col style={styles.produkInfoColumn}>
												<Image source={{uri: this.state.produkInfo[1]}} style={styles.produkInfoIcon}/>
												<Text style={styles.produkDescTop}>Dilihat</Text>
												<Text style={styles.produkDescBot}>3,7rb</Text>
											</Col>
											<Col style={styles.produkInfoColumn}>
												<Image source={{uri: this.state.produkInfo[2]}} style={styles.produkInfoIcon}/>
												<Text style={styles.produkDescTop}>Asuransi</Text>
												<Text style={styles.produkDescBot}>Ya</Text>
											</Col>
											<Col style={styles.produkInfoColumn}>
												<Image source={{uri: this.state.produkInfo[3]}} style={styles.produkInfoIcon}/>
												<Text style={styles.produkDescTop}>Berat</Text>
												<Text style={styles.produkDescBot}>4.500gr</Text>
											</Col>
										</Row>
										<Row>
											<Col>
												<List style={{marginTop:15}}>
													<ListItem style={styles.listItemFirst}>
														<View style={{flex:1}}>
															<Text style={styles.listItemLeft}>Transaksi Berhasil</Text>
														</View>
														<View style={{flex:1}}>
															<Text style={styles.listItemRight}>100%</Text>
														</View>
													</ListItem>
													<ListItem style={styles.listItemChild}>
														<View style={{flex:1}}>
															<Text style={styles.listItemLeft}>Kondisi</Text>
														</View>
														<View style={{flex:1}}>
															<Text style={styles.listItemRight}>Baru</Text>
														</View>
													</ListItem>
													<ListItem style={styles.listItemFirst}>
														<View style={{flex:1}}>
															<Text style={styles.listItemLeft}>Pemesanan Min.</Text>
														</View>
														<View style={{flex:1}}>
															<Text style={styles.listItemRight}>1</Text>
														</View>
													</ListItem>
													<ListItem style={styles.listItemFirst}>
														<View style={{flex:1}}>
															<Text style={styles.listItemLeft}>Kategori</Text>
														</View>
														<View style={{flex:1}}>
															<Text style={styles.listItemGreen}>Laptop & Aksesoris</Text>
														</View>
													</ListItem>
													<ListItem style={styles.listItemFirst}>
														<View style={{flex:1}}>
															<Text style={styles.listItemLeft}>Etalase</Text>
														</View>
														<View style={{flex:1}}>
															<Text style={styles.listItemGreen}>NOTEBOOK ASUS</Text>
														</View>
													</ListItem>
												</List>
											</Col>
										</Row>
									</CardItem>
								</Card>
							</Col>
						</Row>
						<Row>
							<Col>
								<Card style={styles.shadowBox}>
									<CardItem style={{flex:1, flexDirection:'column'}}>
										<Row>
											<Col>
												<Text style={styles.produkInfoTitle}>Deskripsi Produk</Text>
											</Col>
										</Row>
										<Row style={{marginTop:10}}>
											<Col>
												<Text style={{color:'#616161'}}>ASUS A407UB-BV065T GRAY {"\n"}ASUS A407UB-BV066T GOLD {"\n"}
												{"\n"}
												Spesifikasi:{"\n"}
												- Layar TFT LCD dengan LED backlight 14 inci resolusi 1366 x 768 pixel, Glare 60Hz Panel dengan 45% NTSC, Asus Splendd, NanoEdge{"\n"}
												- Prosesor Intel Core i3-6006U dual-core 2GHz{"\n"}
												- Chipset Intel{"\n"}
												- Grafis Intel HD Graphics 520 dan Nvidia Geforc...
												</Text>
												<Text style={styles.descMore}>Selengkapnya</Text>
											</Col>
										</Row>
									</CardItem>
								</Card>
							</Col>
						</Row>
						<Row>
							<Col>
								<Card style={styles.shadowBox}>
									<CardItem style={{flex:1, flexDirection:'column'}}>
										<Row>
											<Col>
												<Text style={styles.produkInfoTitle}>Penjual</Text>
											</Col>
										</Row>
										<Row style={{flexDirection:'row', marginTop:10}}>
											<Col>
												<Thumbnail source={{uri: 'https://ecs7.tokopedia.net/img/cache/215-square/shops-1/2015/6/25/492293/492293_32b8f6a4-6f9f-4c5c-b303-6e45e161f235.png'}} />
											</Col>
											<Col style={{flex:2, alignItems:'flex-start', left:-30}}>
												<Text style={{alignSelf:'flex-start', left:-15}}>Vore-Store</Text>
												<Image source={{uri: 'https://ecs7.tokopedia.net/img/repsys/badges-off.jpg'}} style={{height:15, width:11, left:-12}} />
											</Col>
										</Row>
										<Row style={{marginTop:10}}>
											<Col style={{flex:1.5}}>
												<Row>
													<Col>
														<Image source={{uri: 'https://ecs7.tokopedia.net/assets-tokopedia-lite/prod/d7a6d403.png'}} style={{width:11, height:15, left:5}} />
													</Col>
													<Col style={{flex:6, alignItems:'flex-start'}}>
														<Text style={{fontSize:11, color:'#e0e0e0'}}>Kota Tangerang</Text>
													</Col>
												</Row>
												<Row style={{marginTop:3}}>
													<Col>
														<Image source={{uri: 'https://ecs7.tokopedia.net/assets-tokopedia-lite/prod/cb56c6bf.png'}} style={{width:14, height:14, left:5}} />
													</Col>
													<Col style={{flex:5, alignItems:'flex-start'}}>
														<Text style={{fontSize:11, color:'#e0e0e0'}}>1 hari lalu</Text>
													</Col>
												</Row>
											</Col>
											<Col style={{flex:2, alignItems:'flex-end', flexDirection:'row'}}>
												<View style={{flex:1, alignItems:'flex-end'}}>
													<Text style={{color:'#000', fontSize:12, borderRadius:3, borderWidth:0.5, borderColor:'#bdbdbd', padding:8, alignSelf:'flex-end', textAlign:'center'}}>Chat Penjual</Text>
												</View>
												<View style={{flex:1, alignItems:'flex-end'}}>
													<Text style={{fontSize:12, color:'#fff', backgroundColor:'#1CC625', borderRadius:3, padding:8, alignSelf:'flex-end', textAlign:'center'}}><Icon type='FontAwesome' name='plus' style={{fontSize:14, color:'#ffff'}}/> Favoritkan</Text>
												</View>
											</Col>
										</Row>
									</CardItem>
								</Card>
							</Col>
						</Row>
						<Row>
							<Col>
								<View style={{padding:8, marginTop: 20}}>
									<Text style={styles.produkInfoTitle}>Produk Lainnya dari Toko ini</Text>
								</View>
								<View style={{padding:8, marginTop:2}}>
									<ScrollView horizontal={true}>
										<View style={styles.relatedProduct}>
											<Image source={this.state.relatedImg[0]} style={styles.relatedImg}/>
											<Text style={styles.relatedTitle}>X441UV INTEL CORE i3 Window 10 included</Text>
											<Text style={styles.relatedPrice}>Rp 6.050.000</Text>
										</View>
										<View style={styles.relatedProduct}>
											<Image source={this.state.relatedImg[1]} style={styles.relatedImg}/>
											<Text style={styles.relatedTitle}>PAKET SCREEN +KEYB 14" ASUS</Text>
											<Text style={styles.relatedPrice}>Rp 150.000</Text>
										</View>
										<View style={styles.relatedProduct}>
											<Image source={this.state.relatedImg[2]} style={styles.relatedImg}/>
											<Text style={styles.relatedTitle}>ASUS UX550VD ZENBOOK PRO</Text>
											<Text style={styles.relatedPrice}>Rp 23.900.000</Text>
										</View>
										<View style={styles.relatedProduct}>
											<Image source={this.state.relatedImg[3]} style={styles.relatedImg}/>
											<Text style={styles.relatedTitle}>ASUS E402WA-GA001T, E2 6110,</Text>
											<Text style={styles.relatedPrice}>Rp 3.425.000</Text>
										</View>
										<View style={styles.relatedProduct}>
											<Image source={this.state.relatedImg[4]} style={styles.relatedImg}/>
											<Text style={styles.relatedTitle}>ASUS E203NAH,N3350,</Text>
											<Text style={styles.relatedPrice}>Rp 3.520.000</Text>
										</View>
									</ScrollView>
								</View>
							</Col>
						</Row>
						<Row>
							<Col>
								<View style={styles.footerEnd}>
									<Text style={{fontSize:11, color:'#bdbdbd'}}>Perubahan Harga Terakhir : 22-07-2018, 21:53 WIB</Text>
								</View>
							</Col>
						</Row>
					</Content>
					<Footer>
						<FooterTab>
							<Button style={{backgroundColor:'rgb(255, 87, 34)'}} onPress={() => this.props.navigation.navigate('Cart')} >
								<Text style={{fontSize:13, fontWeight:'bold'}}>Beli</Text>
							</Button>
						</FooterTab>
					</Footer>
				</Container>
			</StyleProvider>
		)
	}
}

const styles = StyleSheet.create({
	wrapper: {
		padding:10,
		top:0
	},
	wishBtn: {
		position: 'absolute',
		top:-20,
		right:22,
		paddingRight:8,
		backgroundColor: '#fff',
		elevation:2,
		shadowRadius:5,
		shadowColor:'#424242',
		shadowOffset:{width:2,height:2},
		alignSelf:'center'
	},
	name: {
		color:'rgba(0, 0, 0, 0.7)',
		fontSize:16
	},
	price: {
		color: '#ff5722',
		fontSize: 16
	},
	stockStatus: {
		backgroundColor:'rgb(248, 248, 248)',
		height:32,
		justifyContent:'center',
		borderRadius:3,
		paddingLeft:10,
		paddingRight:10,
		marginTop:7,
		flexDirection: 'row'
	},
	stockIcon: {
		color:'#9e9e9e',
		flex:0.1,
		top:2
	},
	stockText: {
		fontSize: 13,
		color: '#424242',
		flex:0.9,
		top:7,
		left:-5
	},
	infoSection: {
		backgroundColor: '#fff',
		borderLeftWidth: 0.5,
		borderRightWidth: 0.5,
		borderTopWidth: 0.5,
		borderBottomWidth: 0.5,
		borderColor: '#ccc',
		flexWrap: 'nowrap',
		elevation: 3,
		shadowColor: '#000',
		shadowOffset: {width:0, height:2},
		shadowOpacity: 0.1,
		shadowRadius: 1.5
	},
	shadowBox: {
		marginHorizontal:0,
		width:'100%',
		marginLeft:0,
		borderRadius:0,
		marginTop:15
	},
	awBox: {
		borderRightWidth:1,
		borderColor:'#ccc',
		alignItems:'center'
	},
	starColumn: {
		flex:0.1,
		marginRight:1
	},
	starIcon: {
		fontSize:13,
		color:'#fec112'
	},
	greenDesc: {
		fontSize:12,
		color: '#1CC625',
		alignSelf:'center'
	},
	cicilanName: {
		fontSize:15,
		color: '#757575'
	},
	cicilanDesc: {
		fontSize: 11,
		color: '#1CC625'
	},
	produkInfoTitle: {
		fontSize:13,
		color:'#424242',
		fontWeight:'bold'
	},
	produkInfoColumn: {
		justifyContent:'center',
		alignItems:'center'
	},
	produkInfoIcon: {
		width:32,
		height:32
	},
	produkDescTop: {
		fontSize:12,
		color:'#bdbdbd'
	},
	produkDescBot: {
		fontSize:12,
		color:'#616161'
	},
	listItemFirst:{
		flexDirection:'row',
		borderTopWidth:0.5,
		borderColor:'#ccc'
	},
	listItemChild: {
		flexDirection: 'row'
	},
	listItemLeft: {
		fontSize:14,
		color:'#9e9e9e',
		alignSelf:'flex-start'
	},
	listItemRight: {
		fontSize:14,
		alignSelf:'flex-end',
		right:-12
	},
	listItemGreen: {
		fontSize:14,
		alignSelf:'flex-end',
		right:-12,
		color: '#1CC625'
	},
	descMore: {
		color: '#1CC625'
	},
	relatedProduct: {
		borderWidth:0.5,
		borderColor:'#bdbdbd',
		width:160,
		padding:10
	},
	relatedImg: {
		resizeMode:'stretch',
		width:'100%',
		height:150
	},
	relatedTitle: {
		marginTop: 2,
		fontSize: 12,
		color: 'rgba(0,0,0,.7)'
	},
	relatedPrice: {
		marginTop: 5,
		fontSize: 12,
		color: '#ff5722'
	},
	footerEnd: {
		marginTop: 10,
		marginBottom: 10,
		borderTopWidth:0.5,
		borderBottomWidth:0.5,
		borderColor: '#bdbdbd',
		paddingTop:8,
		paddingBottom:8,
		justifyContent: 'center',
		alignItems: 'center'
	}
})