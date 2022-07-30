import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import FullPostScreen from './FullPost';
import Home from './Home';

const Stack = createNativeStackNavigator();


const Navigation = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} options={{ title: 'Новости' }} />
                <Stack.Screen name="Post" component={FullPostScreen} options={{ title: 'Статья' }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation