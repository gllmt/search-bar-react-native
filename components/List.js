import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
} from "react-native";

// definition of the Item, which will be rendered in the FlatList
const Item = ({ name }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{name}</Text>
  </View>
);

// the filter
const List = (props) => {
  const renderItem = ({ item }) => {
    // when no input, show all
    if (props.searchPhrase === "") {
      return <Item name={item.display_name} />;
    }
    if (item.display_name.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(props.searchPhrase.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))) {
      return <Item name={item.display_name} />;
    }
  };

  return (
    <SafeAreaView style={styles.list__container}>
      <View
        onStartShouldSetResponder={() => {
          props.setClicked(false);
        }}
      >
        <FlatList
          data={props.data.data.allProductReference}
          renderItem={renderItem}
          keyExtractor={(item, index) => {return index.toString()}}
        />
      </View>
    </SafeAreaView>
  );
};

export default List;

const styles = StyleSheet.create({
  list__container: {
    margin: 10,
    height: "85%",
    width: "100%",
  },
  item: {
    margin: 30,
    borderBottomWidth: 2,
    borderBottomColor: "lightgrey"
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    fontStyle: "italic",
  },
});
