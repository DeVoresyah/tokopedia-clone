import React from 'react';
import { createDrawerNavigator, createStackNavigator } from 'react-navigation';
import Home from './src/Home/screens/Home';
import Profile from './src/Profile/screens/Profile';
import Products from './src/Products/screens/Products';
import ProductDetails from './src/ProductDetails/screens/ProductDetails';
import Wishlist from './src/Wishlist/screens/Wishlist';
import Cart from './src/Cart/screens/Cart';
import SideNav from './src/Home/components/SideNav';
import HeaderSection from './src/Home/components/HeaderSection';

const Drawer = createDrawerNavigator({
	Home: {
		screen: Home
	}
}, {
	drawerWidth: 280,
	contentComponent: SideNav,
	drawerOpenRoute: 'DrawerOpen',
	drawerCloseRoute: 'DrawerClose',
});

const App = createStackNavigator({
	Main: {
    	screen: Drawer,
    	navigationOptions: {
    		header: null
    	}
  	},
	ProductDetails: {
		screen: ProductDetails,
		navigationOptions: {
			header: null
		}
	},
	Cart: {
		screen: Cart,
		navigationOptions: {
			header: null
		}
	},
	Wishlist: {
		screen: Wishlist,
		navigationOptions: {
			header: null
		}
	},
	Products: {
		screen: Products,
		navigationOptions: {
			header: null
		}
	},
	Profile: {
		screen: Profile,
		navigationOptions: {
			header: null
		}
	}
}, {
	initialRouteName: 'Main'
})

export default App