import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Detail from './pages/Detail/index';
import Incidents from './pages/Incidents/index';

const appStack = createStackNavigator();

export default function Routes(){
    return(
        <NavigationContainer>
            <appStack.Navigator screenOptions={{headerShown:false}}>
                <appStack.Screen name="Incidents" component={Incidents}/>
                <appStack.Screen name="Detail" component={Detail}/>
            </appStack.Navigator>
        </NavigationContainer>
    )
}

