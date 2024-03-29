import React from "react";
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  Pressable,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const CategoryScreen = ({ route }) => {
  const categories = route.params.categories;
  const navigation = useNavigation();
  const renderCategoryItem = ({ item }) => {
    function goToMeal() {
      navigation.navigate("MealOverviewScreen", {
        title: item.title,
        categoryId: item.id,
      });
    }
    return (
      <Pressable
        style={({ pressed }) => [
          styles.categoryItem,
          {
            backgroundColor: pressed ? "#e0e0e0" : item.color,
          },
        ]}
        onPress={goToMeal}
      >
        <Text>{item.title}</Text>
      </Pressable>
    );
  };

  return (
    <View style={[styles.container]}>
      <FlatList
        data={categories}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    height: "100%",
  },
  categoryItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    padding: 16,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    height: 160,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
});

export default CategoryScreen;
