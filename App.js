import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Login from './App/Login';

export default function App() {
  return (
    <View style={{height:'100%'}}>
      <Login/>
      <StatusBar style="light" />
    </View>
  );
}
