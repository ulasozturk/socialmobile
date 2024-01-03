import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useAuth} from '../redux/reducers/auth';

export function SignInScreen() {
  const {signIn} = useAuth();
  const [state, setState] = React.useState({email: '', password: ''});

  const onSignIn = () => {
    signIn({data: state, onError: error => console.log(error.data)});
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TextInput
        value={state.email}
        onChangeText={text => setState({...state, email: text})}
        placeholder="Email"
        autoCapitalize="none"
        style={{
          fontSize: 20,
          padding: 10,
          borderRadius: 5,
          borderWidth: 1,
          width: 200,
        }}
      />
      <TextInput
        value={state.password}
        onChangeText={text => setState({...state, password: text})}
        placeholder="Password"
        style={{
          fontSize: 20,
          padding: 10,
          borderRadius: 5,
          borderWidth: 1,
          width: 200,
        }}
      />
      <TouchableOpacity
        onPress={onSignIn}
        style={{backgroundColor: 'red', padding: 20, borderRadius: 5}}>
        <Text style={{color: 'white', fontSize: 20}}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}
