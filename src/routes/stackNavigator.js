import * as React from 'react';
import {PRODUCTLIST, TAB, CART, LOGIN} from '../utils/routes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductList from '../screens/productList';
import TabNavigator from './tabNavigator';
import Cart from '../screens/cart';
import Login from '../screens/login';
import {useDispatch} from 'react-redux';
import {checkUserLogin} from '../store/actions/authAction';
import {useEffect} from 'react';

const Stack = createNativeStackNavigator();

function StackNavigator() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUserLogin());
  }, []);
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, headerBackTitle: 'Geri'}}>
      <Stack.Screen name={TAB} component={TabNavigator} />
      <Stack.Screen
        options={{headerShown: true}}
        name={CART}
        component={Cart}
      />
      <Stack.Screen name={PRODUCTLIST} component={ProductList} />
      <Stack.Screen
        options={{headerShown: true}}
        name={LOGIN}
        component={Login}
      />
    </Stack.Navigator>
  );
}

export default StackNavigator;
