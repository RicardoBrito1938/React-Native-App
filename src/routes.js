import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Main from './pages/Main';
import User from './pages/User';

const Stack = createStackNavigator();

function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Main"
                headerMode="screen"
                screenOptions={{
                    headerTitleAlign: 'center',
                    headerBackTitle: false,
                    headerStyle: {backgroundColor: '#7159c1'},
                    headerTintColor: '#fff',
                }}>
                <Stack.Screen
                    name="Main"
                    component={Main}
                    options={{
                        title: 'Usuarios',
                    }}
                />
                <Stack.Screen
                    name="User"
                    component={User}
                    options={({route}) => ({title: route.params.user.name})}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;
