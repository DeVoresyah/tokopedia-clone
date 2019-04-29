import React, { Component } from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Content, Thumbnail, Text, Container, Icon, List, ListItem, Button } from 'native-base';
import { Grid, Col, Row } from 'react-native-easy-grid';
import LinearGradient from 'react-native-linear-gradient';

export default class SideNav extends Component {
	constructor() {
	  super();
	
	  this.state = {
	  	avatar: 'https://imagerouter.tokopedia.com/img/100-square/usr-1/2015/6/25/3463656/pic_3463656_39f4fa6b-6445-456a-a1ad-67286f245964.jpg',
	  	logo: require('../../assets/img/logo-toko.png')
	  };
	}

	render() {
		return (
			<Container>
				<Content>
					<TouchableOpacity activeOpacity={1} onPress={() => this.props.navigation.navigate('Profile')}>
					<View style={styles.outerWrapper}>
						<View style={{flex:0.35}}>
							<Thumbnail square large source={{uri: this.state.avatar}} style={styles.avaImg} />
						</View>
						<View style={{flex:0.65}}>
							<Text style={styles.name}>Rully Ardiansyah</Text>
							<View style={{flex:1, flexDirection:'row'}}>
								<Image source={{uri: 'https://ecs7.tokopedia.net/assets/images/promo/tokopoints/egg-icon/v2-egg-silver.png'}} style={{width:14, height:17}} />
								<Text style={styles.pointsText}>3.039 Points</Text>
							</View>
							<Text style={styles.tokoPoints}>TokoPoints</Text>
							<View style={{marginTop:10, flexDirection:'row'}}>
								<Text style={styles.verifiedText}>Verified Account</Text>
								<Icon type='FontAwesome' name='check-circle' style={styles.verifiedIcon} />
							</View>
						</View>
					</View>
					</TouchableOpacity>
					<View style={styles.topNav}>
						<Button transparent iconLeft full style={styles.navItem}>
							<View style={styles.navItemLeft}>
								<Icon type='FontAwesome' name='money' style={styles.navIconLeft}/>
							</View>
							<View style={styles.navItemRight}>
								<Text style={styles.navTextLeft}>Saldo</Text>
								<Text style={styles.navTextPrice}>Rp 1.480</Text>
							</View>
						</Button>
						<Button transparent iconLeft full style={[styles.navItem, {borderBottomWidth:0.5, borderColor:'#bdbdbd'}]}>
							<View style={styles.navItemLeft}>
								<Icon type='Entypo' name='wallet' style={[styles.navIconLeft, {fontSize:20}]}/>
							</View>
							<View style={styles.navItemRight}>
								<Text style={styles.navTextToko}>TokoCash</Text>
								<Text style={styles.navTextActivate}>Aktivasi TokoCash</Text>
							</View>
						</Button>
					</View>
					<View style={{paddingTop:10, paddingBottom:10}}>
						<Button transparent iconLeft full style={styles.menuItem} onPress={() => this.props.navigation.closeDrawer()}>
							<Icon type='FontAwesome' name='home' style={styles.menuItemIcon} />
							<View style={{flex:0.8}}>
								<Text style={styles.menuItemText}>Beranda</Text>
							</View>
						</Button>
						<Button transparent iconLeft full style={styles.menuItem} onPress={() => this.props.navigation.navigate('Products')} >
							<Icon type='FontAwesome' name='list' style={styles.menuItemIcon}/>
							<View style={{flex:0.8}}>
								<Text style={styles.menuItemText}>Kategori</Text>
							</View>
						</Button>
						<Button transparent iconLeft full style={styles.menuItem} onPress={() => this.props.navigation.navigate('Wishlist')}>
							<Icon type='FontAwesome' name='star-o' style={styles.menuItemIcon}/>
							<View style={{flex:0.8}}>
								<Text style={styles.menuItemText}>Wishlist</Text>
							</View>
						</Button>
						<Button transparent iconLeft full style={styles.menuItem}>
							<Icon type='FontAwesome' name='inbox' style={styles.menuItemIcon} />
							<View style={{flex:0.8}}>
								<Text style={styles.menuItemText}>Kotak Masuk</Text>
							</View>
						</Button>
						<Button transparent iconLeft full style={styles.menuItem} onPress={() => this.props.navigation.navigate('Cart')} >
							<Icon type='FontAwesome' name='shopping-cart' style={styles.menuItemIcon}/>
							<View style={{flex:0.8}}>
								<Text style={styles.menuItemText}>Pembelian</Text>
							</View>
						</Button>
						<Button transparent iconLeft full style={styles.menuItem}>
							<Icon type='MaterialCommunityIcons' name='store' style={styles.menuItemIcon} />
							<View style={{flex:0.8}}>
								<Text style={styles.menuItemText}>Penjualan</Text>
							</View>
						</Button>
						<Button transparent iconLeft full style={styles.menuItem}>
							<Icon type='FontAwesome' name='archive' style={styles.menuItemIcon} />
							<View style={{flex:0.8}}>
								<Text style={styles.menuItemText}>Produk</Text>
							</View>
						</Button>
						<Button transparent iconLeft full style={styles.menuItem}>
							<Icon type='FontAwesome' name='bullhorn' style={styles.menuItemIcon} />
							<View style={{flex:0.8}}>
								<Text style={styles.menuItemText}>TopAds</Text>
							</View>
						</Button>
						<Button transparent iconLeft full style={styles.menuItem}>
							<Icon type='FontAwesome' name='cog' style={styles.menuItemIcon} />
							<View style={{flex:0.8}}>
								<Text style={styles.menuItemText}>Pengaturan</Text>
							</View>
						</Button>
						<Button transparent iconLeft full style={styles.menuItem}>
							<Icon type='FontAwesome' name='question-circle' style={styles.menuItemIcon} />
							<View style={{flex:0.8}}>
								<Text style={styles.menuItemText}>Bantuan</Text>
							</View>
						</Button>
						<Button transparent iconLeft full style={styles.menuItem}>
							<Icon type='FontAwesome' name='sign-out' style={styles.menuItemIcon} />
							<View style={{flex:0.8}}>
								<Text style={styles.menuItemText}>Keluar</Text>
							</View>
						</Button>
					</View>
				</Content>
				<LinearGradient colors={['#e0e0e0', '#616161']} style={{height:10, bottom:20, opacity:0.5, paddingTop:30}}/>
				<View style={{
					flex:1,
					flexDirection:'row',
					padding:5,
					position:'absolute',
					backgroundColor:'#fff',
					bottom:0
				}}>
					<View style={{alignItems:'center', flex:0.2, justifyContent:'center'}}>
						<Image source={this.state.logo} style={{width:28, height:28}} />
					</View>
					<View style={{flex:0.8, alignItems:'flex-start'}}>
						<Text style={{fontSize:11, color:'#bdbdbd'}}>Toko saya</Text>
						<Text style={{fontSize:14, color:'#42b549'}}>Vore-Store</Text>
					</View>
				</View>
			</Container>
		)
	}
}

const styles = StyleSheet.create({
	outerWrapper: {
		backgroundColor:'#eee',
		padding:10,
		paddingTop:20,
		flexDirection:'row',
		paddingTop: 20,
		paddingBottom: 20
	},
	avaImg: {
		borderWidth: 1,
		borderColor: '#9e9e9e',
		borderRadius:4
	},
	name: {
		fontSize:14,
		color:'#424242'
	},
	pointsText: {
		marginLeft:8,
		fontSize:13,
		color:'rgba(0,0,0,.54)'
	},
	tokoPoints: {
		fontSize:13,
		color:'#1CC625'
	},
	verifiedText: {
		fontSize:11,
		color:'#9e9e9e',
		fontStyle:'italic'
	},
	verifiedIcon: {
		fontSize:12,
		color:'#0079ff',
		marginLeft:5,
		marginTop:2
	},
	topNav: {
		backgroundColor:'#eee',
		paddingTop:10
	},
	navItem: {
		flex:1,
		flexDirection:'row'
	},
	navItemLeft: {
		flex:0.2
	},
	navItemRight: {
		flex:0.8,
		flexDirection:'row',
		justifyContent:'center'
	},
	navIconLeft: {
		fontSize:17,
		color:'#9e9e9e'
	},
	navTextLeft: {
		flex:0.4,
		alignSelf:'flex-start',
		left:-25,
		fontSize:14,
		color:'#9e9e9e'
	},
	navTextToko: {
		flex: 1,
		alignSelf: 'center',
		left:-25,
		fontSize:14,
		color:'#9e9e9e'
	},
	navTextPrice: {
		flex:0.6,
		alignSelf:'flex-end',
		right:-30,
		fontSize:13,
		color:'#1CC625'
	},
	navTextActivate: {
		alignSelf: 'flex-start',
		padding:5,
		paddingLeft:5,
		paddingRight:5,
		fontSize: 13,
		color: '#fff',
		borderRadius: 2,
		backgroundColor: '#f26039',
		marginRight:5
	},
	menuItem: {
		flex:1,
		flexDirection:'row'
	},
	menuItemIcon: {
		color:'#9e9e9e',
		flex:0.2,
		fontSize:22
	},
	menuItemText: {
		fontSize:14,
		color:'#9e9e9e',
		left:-23,
		paddingLeft:0
	}
})