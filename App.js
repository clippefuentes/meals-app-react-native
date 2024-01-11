import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoryScreen from './screens/CategoryScreen';
import { CATEGORIES } from './data/dummy-data';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      {/* <View style={styles.container}> */}
        
      {/* </View> */}
      <Stack.Navigator initialRouteName='Categories'>
        <Stack.Screen name="Categories"  component={() => <CategoryScreen categories={CATEGORIES} />}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 1,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
