import React, { useEffect, useState } from 'react';
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useDebouncedValue } from '../hooks/useDebouncedValue';

interface Props {
  onDebounce: (value: string) => void;
  style?: StyleProp<ViewStyle>;
}

export const SearchInput = ( {onDebounce, style}: Props ) => {

  const [textValue, setTextValue] = useState('');
  const debouncedValue = useDebouncedValue(textValue);

  useEffect(() => {
    console.log( debouncedValue );
    onDebounce( debouncedValue );
  }, [debouncedValue]);
  

  return (
    <View style={[
      styles.container,
      style
    ]}>
      <View style={ styles.textBackground }>
        <TextInput
          placeholder='Pokemon Search'
          style={ styles.textInput }
          autoCapitalize='none'
          autoCorrect={ false }
          value={ textValue }
          onChangeText={ setTextValue }
        />
        <Ionicons
          name="search-outline"
          size={30}
          color="grey"
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {

    },
    textBackground: {
      backgroundColor: '#F3F1F3',
      borderRadius: 50,
      height: 40,
      paddingHorizontal: 20,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    textInput: {
      flex: 1,
      fontSize: 18
    }
});