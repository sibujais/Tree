import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';

import { COLORS } from '../theme/colors';

const TreeDetailScreen = ({ route }) => {
  const { tree, title } = route.params;

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.imageContainer}>
        <Image
          source={tree.image}
          style={styles.image}
        />

        <View style={styles.overlay}>
          <Text style={styles.overlayTitle}>
            {tree.name}
          </Text>

          <Text style={styles.overlaySubtitle}>
            {tree.scientificName}
          </Text>
        </View>
      </View>

      <View style={styles.content}>


        <View style={styles.categoryBadge}>
          <Text style={styles.categoryText}>
            {tree.category}
          </Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.label}>
            Scientific Name
          </Text>

          <Text style={styles.value}>
            {tree.scientificName}
          </Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.label}>
            Climate
          </Text>

          <Text style={styles.value}>
            {tree.climate}
          </Text>
        </View>

        <Text style={styles.sectionTitle}>
          Uses
        </Text>

        <View style={styles.chipsContainer}>
          {tree.uses.map(use => (
            <View
              key={use}
              style={styles.chip}
            >
              <Text style={styles.chipText}>
                {use}
              </Text>
            </View>
          ))}
        </View>

        <Text style={styles.sectionTitle}>
          Description
        </Text>

        <Text style={styles.description}>
          {tree.fullDescription}
        </Text>
      </View>
    </ScrollView>
  );
};

export default TreeDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  imageContainer: {
    position: 'relative',
  },

  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,

    padding: 20,

    backgroundColor:
      'rgba(0,0,0,0.45)',
  },

  overlayTitle: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '700',
  },

  overlaySubtitle: {
    color: '#fff',
    fontSize: 14,
    marginTop: 4,
  },

  image: {
    width: '100%',
    height: 260,
    objectFit: 'fill'
  },

  content: {
    padding: 16,
  },

  name: {
    fontSize: 28,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: 12,
  },

  categoryBadge: {
    alignSelf: 'flex-start',
    backgroundColor: COLORS.lightGreen,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginBottom: 20,
  },

  categoryText: {
    color: COLORS.primary,
    fontWeight: '600',
  },

  infoCard: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
    elevation: 2,
  },

  label: {
    fontSize: 13,
    color: COLORS.secondaryText,
    marginBottom: 4,
  },

  value: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.text,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.text,
    marginTop: 16,
    marginBottom: 12,
  },

  chipsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  chip: {
    backgroundColor: COLORS.lightGreen,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginRight: 8,
    marginBottom: 8,
  },

  chipText: {
    color: COLORS.primary,
    fontWeight: '500',
  },

  description: {
    fontSize: 15,
    lineHeight: 24,
    color: COLORS.secondaryText,
    marginBottom: 30,
  },
});