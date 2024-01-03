import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MainStack} from './mainStack';
import {AuthStack} from './authStack';
import {useInitialRenewToken, useIsAuthenticated} from '../redux/reducers/auth';

export function Navigation() {
  const isAuthChecking = useInitialRenewToken();
  const isAuthenticated = useIsAuthenticated();
  const [isNavigationReady, setIsNavigationReady] = React.useState(false);

  // TODO: show splash screen

  return (
    <NavigationContainer onReady={() => setIsNavigationReady(true)}>
      {isAuthenticated ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
