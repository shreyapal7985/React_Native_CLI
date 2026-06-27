/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {  StyleSheet, View, Text } from 'react-native';
import {
  SafeAreaProvider,
  SafeAreaView
} from 'react-native-safe-area-context';


function App() {
return (
    <SafeAreaProvider>//does not affect ui it's like an calculator which calculates inset (means empty spaces )
      <SafeAreaView>// applies those insets to shift the content from the unsafe screen areas(means not overlap with status bar, notches)
            <Text>hello world</Text>
            </SafeAreaView>
    </SafeAreaProvider>
  );
}


export default App;
