import { StatusBar } from "react-native";
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import Home from "./src/screens/Home";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded, error] = useFonts({
          Inter_400Regular,
          Inter_700Bold,
      });
    
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);
    
  if (!loaded && !error) {
    return null;
  }
  
  return(
    <>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent //Sobrepõe a barra de notificações na aplicação
      />
      <Home />
    </>
  );
}