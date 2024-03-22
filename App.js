import "react-native-gesture-handler";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import Home from './src/Home';
import Lanches from './src/Lanches';
import { useState } from 'react';
import Login from './src/Login';
import Cadastro from "./src/Cadastro";
import Bebidas from "./src/Bebidas";

const Tab = createBottomTabNavigator();

export default function App() {

  const [logado, setLogado] = useState(false)
  const [cadastro, setCadastro] = useState(false)

  if (!logado) {
    return (<Login  setLogado={setLogado} setCadastro={setCadastro} />)
  }

  if (cadastro) {
    return (<Cadastro setCadastro={setCadastro} setLogado={setLogado}/>)
  }

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home"
        screenOptions={{
          tabBarStyle: { backgroundColor: "#464646" },
          headerStyle: { backgroundColor: "#464646" },
          tabBarLabelStyle: { color: "black" },
          headerTitleStyle: { color: "black" },
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "black"
        }}
      >
        <Tab.Screen
          name="Promoção"
          component={Home}
          options={{
            tabBarLabel: 'promoção',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="food-fork-drink" color={color} size={size} />
            ),
          }} />

        <Tab.Screen
          name="Lanches"
          component={Lanches}
          options={{
            tabBarLabel: 'Lanches',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="hamburger" color={color} size={size} />
            ),
          }} />

          <Tab.Screen
          name="Bebidas"
          component={Bebidas}
          options={{
            tabBarLabel: 'Bebidas',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="food" color={color} size={size} />
            ),
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

