import React, { useRef, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ImageColors from 'react-native-image-colors';

import { SimplePokemon } from '../interfaces/pokemonInterfaces';
import { FadeInImage } from './FadeInImage';

const { width:screenWidth } = Dimensions.get('screen');

interface Props {
  pokemon: SimplePokemon;
};
export const PokemonCard = ( {pokemon}: Props ) => {
  const [ bgColor, setBgColor ] = useState('grey');
  const isMounted = useRef(true);
  const navigation = useNavigation();

  useEffect(() => {
    ImageColors.getColors(pokemon.picture, { fallback: 'grey' })
      .then( colors => {
        if ( !isMounted.current ) return;
        (colors.platform === 'ios')
          ? setBgColor( colors.background || 'grey' )
          : setBgColor( colors.dominant || 'grey' );
      });
    return () => {
      isMounted.current = false;
    }
  }, []);
  
  return (
    <TouchableOpacity
      activeOpacity={ 0.9 }
      onPress={
        () => navigation.navigate('PokemonScreen', {
          simplePokemon: pokemon,
          color: bgColor
        })
      }
    >
      <View style={[
        styles.cardContainer,
        {
          width: (Platform.OS !== 'web') ? screenWidth * 0.4 : 300,
          backgroundColor: bgColor
        }
      ]}>
        <View>
          <Text style={ styles.name }>
            { pokemon.name }
            { '\n#' + pokemon.id }
          </Text>
        </View>

        <View style={ styles.pokebolaContainer }>
          <Image
            source={ require('../assets/pokebola-blanca.png')}
            style={ styles.pokebola }
          />
        </View>
        
        <FadeInImage
          uri={ pokemon.picture }
          style={ styles.pokemonImage }
        />
      </View>
      
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
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
      position: 'absolute',
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