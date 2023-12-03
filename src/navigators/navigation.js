import {NavigationContainer} from '@react-navigation/native';
import {MainStack} from './mainStack';
import {AuthStack} from './authStack';

export function Navigation() {
  const isAuthenticated = true;

  return (
    <NavigationContainer>
      {isAuthenticated ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
