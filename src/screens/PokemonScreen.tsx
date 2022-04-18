import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { RootStackParams } from '../router/Navigation';
import { FadeInImage } from '../components/FadeInImage';
import { usePokemon } from '../hooks/usePokemon';
import { PokemonDetails } from '../components/PokemonDetails';


interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> {};

export const PokemonScreen = ( { navigation, route }: Props ) => {

  const { simplePokemon, color } = route.params;
  const { id, name, picture } = simplePokemon;
  const { top } = useSafeAreaInsets();
  const { isLoading, pokemon } = usePokemon(id);

  return (
    <View style={{ flex: 1}}>
      <View style={[ 
        styles.headerContainer,
        { backgroundColor: color }
      ]}>
        <TouchableOpacity
          onPress={ () => navigation.pop() }
          activeOpacity={0.8}
          style={ [ styles.backBtn, {top: top + 5} ] }
        >
          <Ionicons
            name="arrow-back-outline"
            size={35}
            color="white"
          />
        </TouchableOpacity>

        <Text
          style={[
            styles.pokemonName,
            { top: top + 40 }
          ]}
        >
          { name + '\n' } #{ id }
        </Text>

        <Image
          source= { require('../assets/pokebola-blanca.png') }
          style= { styles.pokeball }
        />

        <FadeInImage
          uri={ picture }
          style= { styles.pokemonImage }
        />

      </View>

      {
        isLoading
        ? (
          <View style={ styles.loadingIndicator }>
            <ActivityIndicator
              color={ color }
              size={ 50 }
            />
          </View>
        )
        : <PokemonDetails pokemon={ pokemon } />
      }



      
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    height: 370,
    zIndex: 999,
    alignItems: 'center',
    borderBottomLeftRadius: 1000,
    borderBottomRightRadius: 1000
  },
  backBtn: {
    position: 'absolute',
    left: 20
  },
  pokemonName: {
    color: 'white',
    fontSize: 40,
    alignSelf: 'flex-start',
    position: 'relative',
    left: 20
  },
  pokeball: {
    width: 220,
    height: 220,
    bottom: -50,
    opacity: 0.7
  },
  pokemonImage: {
    width: 220,
    height: 220,
    position: 'absolute',
    bottom: -15
  },
  loadingIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});