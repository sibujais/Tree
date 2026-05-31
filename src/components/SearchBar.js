import React from 'react';
import {
  TextInput,
  StyleSheet,
} from 'react-native';

import { COLORS } from '../theme/colors';

const SearchBar = ({
  value,
  onChangeText,
}) => {
  return (
    <TextInput
      placeholder="Search tree species..."
      value={value}
      onChangeText={onChangeText}
      style={styles.input}
    />
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  input: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
});