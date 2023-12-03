import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SignInScreen} from '../screens/signIn';
import {SignUpScreen} from '../screens/signUp';

const Stack = createNativeStackNavigator();

export function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  );
}
