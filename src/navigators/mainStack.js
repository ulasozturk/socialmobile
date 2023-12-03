import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BottomTab} from './bottomTab';

const Stack = createNativeStackNavigator();

export function MainStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="BottomTab" component={BottomTab} />
    </Stack.Navigator>
  );
}
