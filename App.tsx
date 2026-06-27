/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {  StyleSheet, View, Text } from 'react-native';
import {
  SafeAreaProvider
} from 'react-native-safe-area-context';


function App() {
return (
    <SafeAreaProvider>
            <Text>hello world</Text>
    </SafeAreaProvider>
  );
}


export default App;
