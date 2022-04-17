import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { styles } from '../theme/appTheme';

export const HomeScreen = ({ navigation: { navigate } }) => {
  const {top} = useSafeAreaInsets();
  return (
    <>
      <Image
        source={require('../assets/pokebola.png')}
        style={ styles.pokebolaBG }
      />
      <Text
        style={[
          styles.globalMargin,
          styles.title,
          { top: top + 20 }
        ]}
      >Pokedex</Text>
      <Button
        title='PokemonScreen'
        onPress={() => navigate('PokemonScreen')}
      />
    </>
  )
}