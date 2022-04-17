import React from 'react';
import { View, Text, Button } from 'react-native';

export const HomeScreen = ({ navigation: { navigate } }) => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
        title='PokemonScreen'
        onPress={() => navigate('PokemonScreen')}
      />
    </View>
  )
}