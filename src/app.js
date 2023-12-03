import * as React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Navigation} from './navigators/navigation';

export default function App() {
  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  );
}