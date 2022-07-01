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

const excludeTerms = ["DE","DU","DES","L","D","LA","LE","LES","ET","A","AU","AUX","EN"];

const extractTerms = (name) => {
  return name.toUpperCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/(\w{2,})(S)/, "$1")
            .split(/\W+/)
            .filter(term => !!term && !excludeTerms.includes(term)); 
            // si chaine vide !! return false et pas inclus dans la list
}

const matchTerms = ({ searchPhrase }, { display_name }) => {
  const itemTerms = extractTerms(display_name);
  
  return extractTerms(searchPhrase).every((term) => {
    return itemTerms.find(itemTerm => itemTerm.indexOf(term) === 0);
  });
}
// the filter
const List = (props) => {
  const renderItem = ({ item }) => {
    // when no input, show all items
    if (props.searchPhrase === "") {
      return <Item name={item.display_name} />;
    }
    // if (item.display_name.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(props.searchPhrase.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))) {
    //   return <Item name={item.display_name} />;
    // }
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
