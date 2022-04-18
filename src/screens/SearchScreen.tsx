import React from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PokemonCard } from '../components/PokemonCard';

import { SearchInput } from '../components/SearchInput';
import { usePokemonSearch } from '../hooks/usePokemonSearch';
import { globalStyles } from '../theme/appTheme';


export const SearchScreen = () => {

  const { top } = useSafeAreaInsets();
  const { isFetching, simplePokemonList } = usePokemonSearch();

  if ( isFetching ){
    return (
      <View style={ styles.activityContainer }>
        <ActivityIndicator
          size={50}
          color='grey'
        />
        <Text>Loading...</Text>
      </View>
    )
  }

  return (
    <View style={{
      flex: 1,
      marginTop: top + 10,
      marginHorizontal: 20
    }}>
      <SearchInput />
      <FlatList
        data={ simplePokemonList }
        keyExtractor={ (pokemon) => pokemon.id }
        showsVerticalScrollIndicator={ false }
        numColumns={ 2 }

        // HeaderComponent
        ListHeaderComponent={(
          <Text
            style={[
              globalStyles.globalMargin,
              globalStyles.globalTitle,
              {
                paddingBottom: 10
              }
            ]}
          >Pokedex</Text>
        )}

        renderItem={ ({item}) => <PokemonCard pokemon={item} /> }

      />
    </View>
  )
}

const styles = StyleSheet.create({
    activityContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
});