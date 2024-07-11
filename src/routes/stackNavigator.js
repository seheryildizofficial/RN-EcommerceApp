import * as React from 'react';
import {PRODUCTLIST, TAB, CART, LOGIN} from '../utils/routes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductList from '../screens/productList';
import TabNavigator from './tabNavigator';
import Cart from '../screens/cart';
import Login from '../screens/login';

const Stack = createNativeStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, headerBackTitle: 'Geri'}}>
      <Stack.Screen name={TAB} component={TabNavigator} />
      <Stack.Screen name={PRODUCTLIST} component={ProductList} />
      <Stack.Screen name={LOGIN} component={Login} />
      <Stack.Screen
        options={{headerShown: true}}
        name={CART}
        component={Cart}
      />
    </Stack.Navigator>
  );
}

export default StackNavigator;
