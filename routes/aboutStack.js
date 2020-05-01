import {createStackNavigator} from 'react-navigation-stack';

import About from '../screens/about'

const screens = {
  About:{
    screen: About,
    navigationOptions:{
      title: 'Acerca de revision de comidas',      
      // headerStyle: {backgroundColor: '#333'}
    }
  }
}

const AboutStack = createStackNavigator(screens,{
  defaultNavigationOptions:{
    headerTintColor: '#444',
    headerStyle: {backgroundColor: 'gold', height:60}
  }
});
export default AboutStack;