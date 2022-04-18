import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

import { PokemonFull, Type } from '../interfaces/pokemonInterfaces';
import { globalStyles } from '../theme/appTheme';

interface Props {
  pokemon: PokemonFull;
}

export const PokemonDetails = ( { pokemon }: Props ) => {
  return (
    <ScrollView
      style={ StyleSheet.absoluteFillObject }
    >
      <View style={[ styles.container, { marginTop: 370 } ]}>
        <Text style={ styles.title }>Types</Text>
        <View style={{ flexDirection: 'row' }}>
          {
            pokemon.types.map( ({type}) => (
              <Text
                key={ type.name }
                style={[ styles.regularText, { marginRight: 10 } ]}
              >
                { type.name }
              </Text>
            ))
          }
        </View>
        
      </View>

      <View style={[ styles.container, { marginTop: 20 } ]}>
        <Text style={ styles.title }>Sprites</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    ...globalStyles,
    container: {
      marginHorizontal: 20,
    },
    title: {
      fontWeight: 'bold',
      fontSize: 22
    },
    regularText: {
      fontSize: 18
    }
});