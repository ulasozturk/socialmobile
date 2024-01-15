import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MainStack} from './mainStack';
import {AuthStack} from './authStack';
import {useInitialRenewToken, useIsAuthenticated} from '../redux/reducers/auth';
import SplashScreen from 'react-native-splash-screen';

export function Navigation() {
  const isAuthChecking = useInitialRenewToken();
  const isAuthenticated = useIsAuthenticated();
  const [isNavigationReady, setIsNavigationReady] = React.useState(false);

  React.useEffect(() => {
    if (!isAuthChecking && isNavigationReady) {
      SplashScreen.hide();
    }
  }, [isNavigationReady]);

  return (
    <NavigationContainer onReady={() => setIsNavigationReady(true)}>
      {isAuthenticated ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
