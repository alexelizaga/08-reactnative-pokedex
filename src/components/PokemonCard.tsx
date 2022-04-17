import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

import { SimplePokemon } from '../interfaces/pokemonInterfaces';
import { FadeInImage } from './FadeInImage';

const { width:screenWidth } = Dimensions.get('screen');

interface Props {
  pokemon: SimplePokemon;
};
export const PokemonCard = ( {pokemon}: Props ) => {
  return (
    <TouchableOpacity
      activeOpacity={ 0.9 }
    >
      <View style={ [PokemonCardStyles.cardContainer, { width: screenWidth * 0.4}] }>
        <View>
          <Text style={ PokemonCardStyles.name }>
            { pokemon.name }
            { '\n#' + pokemon.id }
          </Text>
        </View>
        
        <FadeInImage
          uri={pokemon.picture}
          style={{
            width: 100,
            height: 100
          }}
        />
      </View>
      
    </TouchableOpacity>
  )
}

const PokemonCardStyles = StyleSheet.create({
    cardContainer: {
      marginHorizontal: 10,
      backgroundColor: 'red',
      height: 120,
      marginBottom: 25,
      borderRadius: 10
    },
    name: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
      top: 20,
      left: 10
    }
});