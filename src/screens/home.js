import {Button} from 'react-native';
import {useAuth} from '../redux/reducers/auth';

export function HomeScreen() {
  const {signOut} = useAuth();

  return <Button title="sign out" onPress={signOut} />;
}
