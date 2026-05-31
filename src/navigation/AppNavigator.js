import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import TreeDetailScreen from '../screens/TreeDetailScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        title: 'Tree Species Selector',
                    }}
                />


                <Stack.Screen
                    name="TreeDetail"
                    component={TreeDetailScreen}
                    options={({ route }) => ({
                        title: route.params?.tree?.name || 'Tree Details',
                        headerTintColor: '#fff',
                        headerStyle: {
                            backgroundColor: '#2E7D32',
                        },
                    })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;