import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Image } from 'react-native';
import { Container, Header, Left, Right, Text, Icon, Button, Card, CardItem, Body, Title, Thumbnail, StyleProvider } from 'native-base';
import { Grid, Col, Row } from 'react-native-easy-grid';
import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material';

export default class Profile extends Component {
	constructor() {
	  super();
	
	  this._onScroll = this._onScroll.bind(this)
	  this.state = {
	  	contentOffsetY: 0
	  };
	}

	_onScroll(e){
	    var contentOffset = e.nativeEvent.contentOffset.y;
	    this.state.contentOffsetY < contentOffset ? console.log("Scroll Down") : console.log("Scroll Up");
	    this.setState({contentOffsetY: contentOffset});
	 }

	render() {
		return(
			<StyleProvider style={getTheme(material)}>
				<ScrollView style={{flex:1}} onScroll={this._onScroll}>
					<Header style={{backgroundColor: '#fff', borderBottomWidth:1, borderBottomColor:'#eeeeee'}}>
						<Left>
							<Button transparent onPress={() => this.props.navigation.goBack()} >
				            	<Icon name='arrow-back' style={{color: '#424242'}}/>
				            </Button>
						</Left>
						<Body style={{flex:2}}>
							<Title style={{color: '#424242', fontSize:15, fontWeight:'bold'}}>Rully Ardiansyah</Title>
						</Body>
						<Right />
					</Header>
					<View style={styles.firstView}>
						<Grid>
							<Row>
								<Col>
									<Thumbnail source={{uri: 'https://imagerouter.tokopedia.com/img/100-square/usr-1/2015/6/25/3463656/pic_3463656_39f4fa6b-6445-456a-a1ad-67286f245964.jpg'}} />
								</Col>
								<Col style={{flex:3, justifyContent:'center'}}>
									<Text style={{alignSelf:'flex-start', left:-15}}>Rully Ardiansyah</Text>
								</Col>
							</Row>
							<Row style={{marginTop:15}}>
								<Col style={{borderRightWidth:1, borderRightColor:'#eeeeee'}}>
									<View style={{textAlign:'center', alignItems:'center', justifyContent:'center'}}>
										<Text style={{fontSize:13}}>1</Text>
										<Text style={{fontSize:13, color:'#e0e0e0'}}>Following</Text>
									</View>
								</Col>
								<Col>
									<View style={{textAlign:'center', alignItems:'center', justifyContent:'center'}}>
										<Text style={{fontSize:13}}>5</Text>
										<Text style={{fontSize:13, color:'#e0e0e0'}}>Toko Favorit</Text>
									</View>
								</Col>
							</Row>
						</Grid>
					</View>
					<View style={styles.secondView}>
						<Text style={{color:'#212121', fontWeight:'800', fontSize:16}}>Informasi Pengguna</Text>
						<Text style={{color:'#9e9e9e', marginTop:15, fontSize:12}}>Reputasi <Icon type="FontAwesome" name="info-circle" style={{fontSize:11, color:'#9e9e9e'}}/></Text>

						<Row style={{marginTop:15}}>
							<Col>
								<Row>
									<Col style={{justifyContent:'center', alignItems:'center'}}>
										<Thumbnail source={{uri: 'https://ecs7.tokopedia.net/assets-tokopedia-lite/prod/62c65f7e.png'}} />
									</Col>
									<Col style={{justifyContent:'center', alignItems:'flex-start'}}>
										<Text style={{fontSize:30, fontWeight:'800', color:'#424242'}}>100%</Text>
									</Col>
								</Row>
							</Col>
							<Col>
								<Row>
									<Col style={{alignItems:'flex-end'}}>
										<Image source={{uri: 'https://ecs7.tokopedia.net/assets-tokopedia-lite/prod/5f78141a.png'}} style={{width:16, height:16, marginRight:10}}/>
									</Col>
									<Col>
										<Text style={{color:'#9e9e9e', fontSize:12}}>Positif</Text>
									</Col>
									<Col style={{alignItems:'flex-end'}}>
										<Text style={{color:'#9e9e9e', fontSize:12}}>40</Text>
									</Col>
								</Row>
								<Row style={{marginTop:5}}>
									<Col style={{alignItems:'flex-end'}}>
										<Image source={{uri: 'https://ecs7.tokopedia.net/assets-tokopedia-lite/prod/1e4c3ba0.png'}} style={{width:16, height:16, marginRight:10}}/>
									</Col>
									<Col>
										<Text style={{color:'#9e9e9e', fontSize:12}}>Netral</Text>
									</Col>
									<Col style={{alignItems:'flex-end'}}>
										<Text style={{color:'#9e9e9e', fontSize:12}}>2</Text>
									</Col>
								</Row>
								<Row style={{marginTop:5}}>
									<Col style={{alignItems:'flex-end'}}>
										<Image source={{uri: 'https://ecs7.tokopedia.net/assets-tokopedia-lite/prod/1d93f315.png'}} style={{width:16, height:16, marginRight:10}}/>
									</Col>
									<Col>
										<Text style={{color:'#9e9e9e', fontSize:12}}>Negatif</Text>
									</Col>
									<Col style={{alignItems:'flex-end'}}>
										<Text style={{color:'#9e9e9e', fontSize:12}}>0</Text>
									</Col>
								</Row>
							</Col>
						</Row>
					</View>
					<View style={styles.secondView}>
						<Text style={{color:'#212121', fontWeight:'800', fontSize:16}}>Informasi Toko</Text>

						<Row style={{marginTop:20}}>
							<Col style={{justifyContent:'center'}}>
								<Thumbnail source={{uri: 'https://ecs7.tokopedia.net/img/cache/215-square/shops-1/2015/6/25/492293/492293_32b8f6a4-6f9f-4c5c-b303-6e45e161f235.png'}} />
							</Col>
							<Col style={{flex:2, alignItems:'flex-start', left:-30}}>
								<Text style={{alignSelf:'flex-start', left:-15}}>Vore-Store</Text>
								<Image source={{uri: 'https://ecs7.tokopedia.net/img/repsys/badges-off.jpg'}} style={{height:15, width:11, left:-12}} />
							</Col>
						</Row>

						<Row style={{marginTop:10}}>
							<Col>
								<Row>
									<Col>
										<Image source={{uri: 'https://ecs7.tokopedia.net/assets-tokopedia-lite/prod/d7a6d403.png'}} style={{width:11, height:15, left:5}} />
									</Col>
									<Col style={{flex:7, alignItems:'flex-start'}}>
										<Text style={{fontSize:11, color:'#e0e0e0'}}>Kota Tangerang</Text>
									</Col>
								</Row>
								<Row style={{marginTop:3}}>
									<Col>
										<Image source={{uri: 'https://ecs7.tokopedia.net/assets-tokopedia-lite/prod/cb56c6bf.png'}} style={{width:14, height:14, left:5}} />
									</Col>
									<Col style={{flex:6, alignItems:'flex-start'}}>
										<Text style={{fontSize:11, color:'#e0e0e0'}}>1 hari lalu</Text>
									</Col>
								</Row>
							</Col>
							<Col style={{alignItems:'flex-end'}}>
								<Button iconLeft primary style={{alignSelf:'flex-end'}}>
									<Icon type='FontAwesome' name='plus' style={{fontSize:14}}/>
									<Text style={{fontSize:13}}>Favoritkan</Text>
								</Button>
							</Col>
						</Row>
					</View>
				</ScrollView>
			</StyleProvider>
		)
	}
}

const styles = StyleSheet.create({
	firstView: {
		backgroundColor:'#fff',
		padding:10,
		elevation:1,
		shadowOpacity: 0.5,
		shadowRadius:15,
		shadowColor:'#212121',
		shadowOffset:{width:0,height:0}
	},
	secondView: {
		marginTop:13,
		backgroundColor:'#fff',
		padding:10,
		elevation:3,
		shadowOpacity: 1,
		shadowRadius:2,
		shadowColor:'#212121',
		shadowOffset:{width:0,height:2}
	}
})