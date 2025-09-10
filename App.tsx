import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider as PaperProvider } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

// Importar telas
import HomeScreen from './src/screens/HomeScreen';
import VoluntariosScreen from './src/screens/VoluntariosScreen';
import OrganizacoesScreen from './src/screens/OrganizacoesScreen';
import ProjetosScreen from './src/screens/ProjetosScreen';
import PerfilScreen from './src/screens/PerfilScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName: keyof typeof Ionicons.glyphMap;

              if (route.name === 'Início') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'Voluntários') {
                iconName = focused ? 'people' : 'people-outline';
              } else if (route.name === 'Organizações') {
                iconName = focused ? 'business' : 'business-outline';
              } else if (route.name === 'Projetos') {
                iconName = focused ? 'folder' : 'folder-outline';
              } else if (route.name === 'Perfil') {
                iconName = focused ? 'person' : 'person-outline';
              } else {
                iconName = 'help-outline';
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#2196F3',
            tabBarInactiveTintColor: 'gray',
            headerStyle: {
              backgroundColor: '#2196F3',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          })}
        >
          <Tab.Screen name="Início" component={HomeScreen} />
          <Tab.Screen name="Voluntários" component={VoluntariosScreen} />
          <Tab.Screen name="Organizações" component={OrganizacoesScreen} />
          <Tab.Screen name="Projetos" component={ProjetosScreen} />
          <Tab.Screen name="Perfil" component={PerfilScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
