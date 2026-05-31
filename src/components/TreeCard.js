import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
} from 'react-native';

import { COLORS } from '../theme/colors';

const TreeCard = ({ item, onPress }) => {
  return (
    <Pressable
      style={styles.container}
      onPress={() => onPress(item)}
    >
      <Image
        source={item.image}
        style={styles.image}
      />

      <View style={styles.content}>
        <Text style={styles.name}>
          {item.name}
        </Text>

        <View style={styles.categoryContainer}>
          <Text style={styles.category}>
            {item.category}
          </Text>
        </View>

        <Text
          numberOfLines={2}
          style={styles.description}
        >
          {item.shortDescription}
        </Text>
      </View>
    </Pressable>
  );
};

export default TreeCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    marginBottom: 12,
    borderRadius: 14,
    overflow: 'hidden',
    elevation: 3,
  },

  image: {
    width: 110,
    height: 110,
  },

  content: {
    flex: 1,
    padding: 12,
  },

  name: {
    fontSize: 17,
    fontWeight: '600',
    color: COLORS.text,
  },

  categoryContainer: {
    alignSelf: 'flex-start',
    backgroundColor: COLORS.lightGreen,
    marginVertical: 6,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },

  category: {
    color: COLORS.primary,
    fontWeight: '600',
  },

  description: {
    color: COLORS.secondaryText,
    lineHeight: 20,
  },
});