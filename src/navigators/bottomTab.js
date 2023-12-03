import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeStack} from './homeStack';
import {SearchStack} from './searchStack';

const Tab = createBottomTabNavigator();

export function BottomTab() {
  return (
    <Tab.Navigator backBehavior="history" screenOptions={{headerShown: false}}>
      <Tab.Screen name="HomeStack" component={HomeStack} />
      <Tab.Screen name="SearchStack" component={SearchStack} />
    </Tab.Navigator>
  );
}
