import React, { useEffect, useState } from 'react';
import { Dimensions, FlatList, Platform, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Loading } from '../components/Loading';
import { PokemonCard } from '../components/PokemonCard';

import { SearchInput } from '../components/SearchInput';
import { usePokemonSearch } from '../hooks/usePokemonSearch';
import { globalStyles } from '../theme/appTheme';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';

const { width: screenWidth } = Dimensions.get('window');


export const SearchScreen = () => {

  const { top } = useSafeAreaInsets();
  const { isFetching, simplePokemonList } = usePokemonSearch();
  const [ filteredPokemons, setFilteredPokemons ] = useState<SimplePokemon[]>([])
  const [ term, setTerm ] = useState('');

  useEffect(() => {
    if( term.length === 0 ){
      return setFilteredPokemons([]);
    }
    setFilteredPokemons(
      simplePokemonList.filter(
        pokemon => pokemon.name
          .toLocaleLowerCase()
          .includes( term.toLocaleLowerCase() )
      )
    )
  }, [ term ])
  

  if ( isFetching ){
    return (
      <Loading />
    )
  }

  return (
    <View style={{
      flex: 1,
      marginHorizontal: 20,
      alignItems: 'center'
    }}>
      <SearchInput
        onDebounce={ (value) => setTerm(value) }
        style={{
          position: 'absolute',
          zIndex: 999,
          width: screenWidth - 40,
          top: (Platform.OS === 'ios') ? top : top + 15,
        }}
      />
      <FlatList
        data={ filteredPokemons }
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
                marginTop: (Platform.OS === 'ios') ? top + 60 : top + 80,
                paddingBottom: 10
              }
            ]}
          >{ term }</Text>
        )}

        renderItem={ ({item}) => <PokemonCard pokemon={item} /> }

      />
    </View>
  )
}
