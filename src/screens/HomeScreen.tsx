import React from 'react';
import { Text, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { usePokemonPaginated } from '../hooks/usePokemonPaginated';

import { styles } from '../theme/appTheme';

export const HomeScreen = () => {
  const { top } = useSafeAreaInsets();
  const { isLoading, simplePokemonList } = usePokemonPaginated();
  console.log( simplePokemonList );

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
    </>
  )
}