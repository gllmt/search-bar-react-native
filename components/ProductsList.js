import React from "react";
import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";

const Item = ({ name }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{name}</Text>
  </View>
);

const excludeTerms = ["DE","DU","DES","L","D","LA","LE","LES","ET","A","AU","AUX","EN"];

const extractTerms = (name) => {
  return name.toUpperCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/(\w{2,})(S)/, "$1")
            .split(/\W+/)
            .filter(term => !!term && !excludeTerms.includes(term));
}

const matchTerms = ({ searchWord }, { display_name }) => {
  const itemTerms = extractTerms(display_name);
  
  return extractTerms(searchWord).every((term) => {
    return itemTerms.find(itemTerm => itemTerm.indexOf(term) === 0);
  });
}

const ProductsList = (props) => {
  const renderItem = ({ item }) => {
    if (props.searchWord === "") {
      return <Item name={item.display_name} />;
    }

    const itemTerms = extractTerms(item.display_name);
    if (matchTerms(props, item)) {
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

export default ProductsList;

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
