import React, {useState} from 'react';
import Home from './screens/home';
import {AppLoading} from 'expo';
import Navigator from './routes/drawer';

// import About from './screens/about'
// import ReviewDetails from './screens/reviewDetails'
import * as Font from 'expo-font';

// LOAD THE FONTS
const getFonts = () => Font.loadAsync({
  'nunito-regular':require('./assets/fonts/Nunito-Regular.ttf'),
  'nunito-bold':require('./assets/fonts/Nunito-Bold.ttf')
});

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if(fontsLoaded){
    return (
      <Navigator />
    );
  } else {
    return(
      <AppLoading 
        startAsync={getFonts}
        onFinish={()=> setFontsLoaded(true)}
      />
    )
  }  
}

// para las fuentes ir a 
// https://fonts.google.com/?query=nunito
// descargar y colocar en la carpeta /assets/fonts solo las que vamos a utilizar