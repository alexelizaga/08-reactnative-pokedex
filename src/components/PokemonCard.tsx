import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';

import { SimplePokemon } from '../interfaces/pokemonInterfaces';
import { FadeInImage } from './FadeInImage';
import { useState, useEffect } from 'react';

const { width:screenWidth } = Dimensions.get('screen');

interface Props {
  pokemon: SimplePokemon;
};
export const PokemonCard = ( {pokemon}: Props ) => {
  const [ bgColor, setBgColor ] = useState('grey');

  useEffect(() => {
  }, []);
  
  return (
    <TouchableOpacity
      activeOpacity={ 0.9 }
    >
      <View style={[
        PokemonCardStyles.cardContainer,
        {
          width: screenWidth * 0.4,
          backgroundColor: bgColor
        }
      ]}>
        <View>
          <Text style={ PokemonCardStyles.name }>
            { pokemon.name }
            { '\n#' + pokemon.id }
          </Text>
        </View>

        <View style={ PokemonCardStyles.pokebolaContainer }>
          <Image
            source={ require('../assets/pokebola-blanca.png')}
            style={ PokemonCardStyles.pokebola }
          />
        </View>
        
        <FadeInImage
          uri={ pokemon.picture }
          style={ PokemonCardStyles.pokemonImage }
        />
      </View>
      
    </TouchableOpacity>
  )
}

const PokemonCardStyles = StyleSheet.create({
    cardContainer: {
      marginHorizontal: 10,
      height: 120,
      marginBottom: 25,
      borderRadius: 10,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    name: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
      top: 20,
      left: 10
    },
    pokebola: {
      width: 100,
      height: 100,
      position: 'absolute',
      right: -25,
      bottom: -25,

    },
    pokemonImage: {
      width: 120,
      height: 120,
      position: 'absolute',
      right: -8,
      bottom: -5
    },
    pokebolaContainer: {
      width: 100,
      height: 100,
      position: 'absolute',
      bottom: 0,
      right: 0,
      opacity: 0.5,
      overflow: 'hidden'
    }
});