


import React, { useMemo, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';

import TreeCard from '../components/TreeCard';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';

import { TreeData } from '../data/treesData';
import { categories } from '../constants/categories';
import { COLORS } from '../theme/colors';

const ITEMS_PER_PAGE = 5;

const HomeScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const filteredTrees = useMemo(() => {
    return TreeData.filter(tree => {
      const matchesCategory =
        selectedCategory === 'All'
          ? true
          : tree.category === selectedCategory;

      const matchesSearch =
        tree.name
          .toLowerCase()
          .includes(searchText.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchText]);

  const visibleTrees = filteredTrees.slice(
    0,
    visibleCount,
  );

  const loadMore = () => {
    if (
      visibleCount < filteredTrees.length
    ) {
      setVisibleCount(prev =>
        prev + ITEMS_PER_PAGE
      );
    }
  };

  const handleSearch = text => {
    setSearchText(text);
    setVisibleCount(ITEMS_PER_PAGE);
  };

  const handleCategorySelect = category => {
    setSelectedCategory(category);
    setVisibleCount(ITEMS_PER_PAGE);
  };

  const handleTreePress = tree => {
    navigation.navigate(
      'TreeDetail',
      { tree }
    );
  };

  const renderTree = ({ item }) => (
    <TreeCard
      item={item}
      onPress={handleTreePress}
    />
  );

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Discover Tree Species 🌳
      </Text>

      <Text style={styles.subtitle}>
        Browse, search and learn about trees
      </Text>

      <SearchBar
        value={searchText}
        onChangeText={handleSearch}
      />

      <View style={{ paddingBottom: 15 }}>
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelect={handleCategorySelect}
        />
      </View>

      <FlatList
        data={visibleTrees}
        style={{ flex: 1 }}
        renderItem={renderTree}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={
          false
        }
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}

        ListEmptyComponent={() => (
          <View
            style={
              styles.emptyContainer
            }
          >
            <Text
              style={
                styles.emptyText
              }
            >
              No tree species found
            </Text>
          </View>
        )}
        ListFooterComponent={() =>
          visibleCount <
            filteredTrees.length ? (
            <ActivityIndicator
              size="small"
              style={{
                marginVertical: 20,
              }}
            />
          ) : null
        }
        contentContainerStyle={{
          paddingBottom: 20,
        }}
      />

    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:
      COLORS.background,
    padding: 16,
  },

  subtitle: {
    fontSize: 15,
    color:
      COLORS.secondaryText,
    marginBottom: 16,
  },

  emptyContainer: {
    alignItems: 'center',
  },

  emptyText: {
    fontSize: 16,
    color:
      COLORS.secondaryText,
  },
});