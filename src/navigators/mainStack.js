import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BottomTab} from './bottomTab';
import {useTokenRenew} from '../redux/reducers/auth';

const Stack = createNativeStackNavigator();

export function MainStack() {
  useTokenRenew();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="BottomTab" component={BottomTab} />
    </Stack.Navigator>
  );
}
