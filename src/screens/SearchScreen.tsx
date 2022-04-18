import React from 'react';
import { Dimensions, FlatList, Platform, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Loading } from '../components/Loading';
import { PokemonCard } from '../components/PokemonCard';

import { SearchInput } from '../components/SearchInput';
import { usePokemonSearch } from '../hooks/usePokemonSearch';
import { globalStyles } from '../theme/appTheme';

const { width: screenWidth } = Dimensions.get('window');


export const SearchScreen = () => {

  const { top } = useSafeAreaInsets();
  const { isFetching, simplePokemonList } = usePokemonSearch();

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
        style={{
          position: 'absolute',
          zIndex: 999,
          width: screenWidth - 40,
          top: (Platform.OS === 'ios') ? top : top + 15,
        }}
      />
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
                marginTop: (Platform.OS === 'ios') ? top + 60 : top + 80,
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
