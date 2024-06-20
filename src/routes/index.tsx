import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Header from '../components/molecules/Header/Header';
import { FinancialProducts } from '../pages/FinancialProducts';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { RegisterProducts } from '../pages/Register';
import { DetailProduct } from '../pages/DetailProduct';
import { EditProducts } from '../pages/Edit';
import { ROUTES } from '../constant';

const Stack = createNativeStackNavigator();

function MyTabs(){
    return (
      <Stack.Navigator
        initialRouteName={ROUTES.FINANCIAL_PRODUCTS}
        screenOptions={{
          header: () => <Header />,
        }}>
        <Stack.Screen
          name={ROUTES.FINANCIAL_PRODUCTS}
          component={FinancialProducts}
        />
        <Stack.Screen
          name={ROUTES.REGISTER_PRODUCTS}
          component={RegisterProducts}
        />
        <Stack.Screen name={ROUTES.EDIT_PRODUCTS} component={EditProducts} />
        <Stack.Screen name={ROUTES.DETAIL_PRODUCTS} component={DetailProduct} />
      </Stack.Navigator>
    );
  };

  export default function Navigation(){
    return (
      <GestureHandlerRootView style={{flex: 1}}>
        <NavigationContainer>
          <MyTabs />
        </NavigationContainer>
      </GestureHandlerRootView>
    );
  }