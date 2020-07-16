import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ImagePicker} from '../screens/ImagePicker';
import {ImageItem} from '../screens/Image';

const Stack = createStackNavigator();

export const MainApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="imagepicker"
          component={ImagePicker}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="image"
          component={ImageItem}
          options={({route}) => ({
            title: route.params.title,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
