import React from 'react';
import {
    ScrollView,
    Pressable,
    Text,
    StyleSheet,
} from 'react-native';

import { COLORS } from '../theme/colors';

const CategoryFilter = ({
    categories,
    selectedCategory,
    onSelect,
}) => {
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={
                styles.container
            }
        >
            {categories.map(category => (
                <Pressable
                    key={category}
                    onPress={() => onSelect(category)}
                    style={[
                        styles.button,

                        selectedCategory === category &&
                        styles.activeButton,
                    ]}
                >
                    <Text
                        numberOfLines={1}
                        style={[
                            styles.buttonText,
                            selectedCategory === category &&
                            styles.activeButtonText,
                        ]}
                    >
                        {category}
                    </Text>
                </Pressable>

            ))}
        </ScrollView>
    );
};

export default CategoryFilter;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingRight: 10,
    },

    button: {
        paddingHorizontal: 16,
        paddingVertical: 8,

        backgroundColor: COLORS.white,

        borderRadius: 20,

        marginRight: 10,

        borderWidth: 1,
        borderColor: COLORS.border,
    },

    buttonText: {
        fontSize: 14,
        fontWeight: '500',
    },

    activeButton: {
        backgroundColor: COLORS.primary,
        borderColor: COLORS.primary,
    },

    activeButtonText: {
        color: COLORS.white,
    },
});