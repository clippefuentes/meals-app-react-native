import React from 'react';
import { FlatList, View, Text, StyleSheet, Pressable, Platform } from 'react-native';
import { useNavigation, useRoute } from "@react-navigation/native";

const MealOverviewScreen = ({}) => {
  const route = useRoute();
  const title = route.params?.title || 'Default Title';
  return (
    <View>
      <Text>
        {title}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
});

export default MealOverviewScreen;