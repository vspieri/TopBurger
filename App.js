import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import Home from './src/Home';
import Lanches from './src/Lanches';

const Tab = createBottomTabNavigator();

export default function App() {
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
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }} />

<Tab.Screen
          name="aaa"
          component={Lanches}
          options={{
            tabBarLabel: 'Lanches',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

