import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Tabs, Tab, Text, Item, Input, Icon, Button, Picker, Form } from 'native-base';
import CheckBox from 'react-native-check-box';

export default class DigitalTabs extends Component {

	constructor() {
	  super();
	
	  this.state = {
	  	nominal: '100k'
	  };
	}

	bayarInstan = () => {
		alert('Checked')
	}

	onValueChange = (value: string) => {
		this.setState({
	    	nominal: value
		});
	}

	render() {
		return (
			<Tabs tabBarUnderlineStyle={{backgroundColor:'#1CC625'}}>
				<Tab heading="Pulsa"
				tabStyle={{backgroundColor:'#fff'}}
				textStyle={{color:'#1CC625'}}
				activeTabStyle={{backgroundColor:'#fff'}}
				activeTextStyle={{color:'#1CC625'}}
				>
					<View style={{padding:15}}>
						<Text style={styles.inputLabel}>Nomor Telepon</Text>
						<View style={{flex:1, flexDirection:'row'}}>
							<Item style={styles.formInput}>
								<Input placeholder='Contoh 081234567890' style={{fontSize:13}}/>
							</Item>
							<Icon active type='FontAwesome' name='address-book-o' style={styles.contactIcon}/>
						</View>
						<View style={{flex:1, marginTop:30}}>
							<Button block style={styles.buyButton}>
								<Text style={{color:'#fff', fontSize:13}}>Beli</Text>
							</Button>
						</View>
					</View>
				</Tab>
				<Tab heading="Paket Data"
				tabStyle={{backgroundColor:'#fff'}}
				textStyle={{color:'#1CC625'}}
				activeTabStyle={{backgroundColor:'#fff'}}
				activeTextStyle={{color:'#1CC625'}}
				/>
				<Tab heading="Vouchers"
				tabStyle={{backgroundColor:'#fff'}}
				textStyle={{color:'#1CC625'}}
				activeTabStyle={{backgroundColor:'#fff'}}
				activeTextStyle={{color:'#1CC625'}}
				/>
				<Tab heading="M-Tix XXI"
				tabStyle={{backgroundColor:'#fff'}}
				textStyle={{color:'#1CC625'}}
				activeTabStyle={{backgroundColor:'#fff'}}
				activeTextStyle={{color:'#1CC625'}}
				>
					<View style={{padding:15}}>
						<Text style={styles.inputLabel}>Nomor Telepon</Text>
						<View style={{flex:1, flexDirection:'row'}}>
							<Item style={styles.formInput}>
								<Input placeholder='Contoh 081234567890' style={{fontSize:13}}/>
							</Item>
							<Icon active type='FontAwesome' name='address-book-o' style={styles.contactIcon}/>
						</View>
						<Text style={[styles.inputLabel, {marginTop:15}]}>Nominal</Text>
						<Form>
							<Picker
							note
							mode="dropdown"
							headerStyle={{width:'100%', borderBottomWidth:1, borderColor:'#424242'}}
							headerTitleStyle={{color:'#424242', fontSize:14}}
							selectedValue={this.state.nominal}
							onValueChange={this.onValueChange}
							>
								<Picker.Item label="Rp 100.000" value="100k" />
								<Picker.Item label="Rp 150.000" value="150k" />
								<Picker.Item label="Rp 200.000" value="200k" />
							</Picker>
						</Form>
						<View style={{flex:1, marginTop:30}}>
							<Button block style={styles.buyButton}>
								<Text style={{color:'#fff', fontSize:13}}>Beli</Text>
							</Button>
						</View>
					</View>
				</Tab>
			</Tabs>
		)
	}
}

const styles = StyleSheet.create({
	buyButton: {
		backgroundColor:'#ff5722',
		justifyContent:'center',
		alignItems:'center'
	},
	inputLabel: {
		fontSize:13,
		color:'#9e9e9e',
		left:3
	},
	contactIcon: {
		flex:0.1,
		fontSize:23,
		color:'#bdbdbd',
		marginTop:11,
		marginLeft:10
	},
	formInput: {
		flex:0.9,
		height:25,
		paddingLeft:0,
		marginTop:10
	}
})