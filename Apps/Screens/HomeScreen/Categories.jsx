import { FlatList, Image, StyleSheet, View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import GlobalApi from "../../Utils/GlobalApi";
import Heading from "../../Components/Heading";
import Colors from "../../Utils/Colors";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = () => {
    GlobalApi.getCategories()
      .then((response) => {
        console.log(response.categories);
        setCategories(response?.categories);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <View style={{ marginTop: 10 }}>
      <Heading text={"Categories"} isViewAll={true} />
      <FlatList
        data={categories}
        numColumns={4}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <View style={styles.iconContainer}>
              <Image
                source={{ uri: item.icon?.url }}
                style={{ width: 25, height: 25 }}
              />
            </View>
            <Text>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  iconContainer: {
    backgroundColor: Colors.LIGHT_GREY,
    padding: 17,
    borderRadius: 50,
  },
});