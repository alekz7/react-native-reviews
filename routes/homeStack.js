import {createStackNavigator} from 'react-navigation-stack';
import Home from '../screens/home'
import ReviewDetails from '../screens/reviewDetails'
const screens = {
  Home:{
    screen: Home,
    navigationOptions:{
      title: 'Zona de Comidas',      
      // headerStyle: {backgroundColor: '#333'}
    }
  },
  RevDetails:{
    screen:ReviewDetails,
    navigationOptions:{
      title: 'Detalle de comida',
      // headerStyle: {backgroundColor: '#eee'}
    }
  }
}

const HomeStack = createStackNavigator(screens,{
  defaultNavigationOptions:{
    headerTintColor: '#444',
    headerStyle: {backgroundColor: 'gold', height:60}
  }
});
export default HomeStack;