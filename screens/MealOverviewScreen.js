import React, { useLayoutEffect } from 'react';
import { FlatList, View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { useRoute, useNavigation } from "@react-navigation/native";
import { MEALS } from '../data/dummy-data';

const MealOverviewScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const title = route.params?.title;
  const categoryId = route.params?.categoryId;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: title,
    });
  }, [navigation, title]);

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0;
  });

  const renderMealItem = ({ item }) => (
    <Pressable
      style={styles.mealItem}
    >
      <View>
        <Image source={{ uri: item.imageUrl }} style={styles.image} />
        <View style={styles.mealDetails}>
          <Text style={styles.mealTitle}>{item.title}</Text>
          <Text style={styles.mealInfo}>Duration: {item.duration} minutes</Text>
          <Text style={styles.mealInfo}>Complexity: {item.complexity}</Text>
          <Text style={styles.mealInfo}>Affordability: {item.affordability}</Text>

          <Text style={styles.sectionTitle}>Ingredients:</Text>
          {item.ingredients.map((ingredient, index) => (
            <Text key={index} style={styles.mealInfo}>{`${index + 1}. ${ingredient}`}</Text>
          ))}

          <Text style={styles.sectionTitle}>Steps:</Text>
          {item.steps.map((step, index) => (
            <Text key={index} style={styles.mealInfo}>{`${index + 1}. ${step}`}</Text>
          ))}
        </View>
      </View>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        renderItem={renderMealItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mealItem: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  mealDetails: {
    marginTop: 10,
  },
  mealTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  mealInfo: {
    fontSize: 14,
    color: 'gray',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default MealOverviewScreen;
