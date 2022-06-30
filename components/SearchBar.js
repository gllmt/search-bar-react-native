import React from "react";
import { StyleSheet, TextInput, View, Keyboard, Button, Image } from "react-native";


const SearchBar = (props) => {
  return (
    <View style={styles.container}>
      <View
        style={
          !props.clicked
            ? styles.searchBar__unclicked
            : styles.searchBar__clicked
        }
      >
        {/* <Feather
          name="search"
          size={20}
          color="black"
          style={{ marginLeft: 1 }}
        /> */}
        {/* <Image
        source={require('../assets/images/ios-search.svg')}
        style={styles.ImageStyle}
        /> */}
        <TextInput
          style={styles.input}
          placeholder="Recherche"
          value={props.searchPhrase}
          onChangeText={props.setSearchPhrase}
          onFocus={() => {
            props.setClicked(true);
          }}
        />
        
        {/* {props.clicked && (
          <Entypo name="cross" size={20} color="black" style={{ padding: 1 }} onPress={() => {
            props.setSearchPhrase("")
          }}/>
        )} */}
      </View>
      {props.clicked && (
        <View>
          <Button
            title="Annuler"
            onPress={() => {
              Keyboard.dismiss();
              props.setClicked(false);
            }}
          ></Button>
        </View>
      )}
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    margin: 15,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",
    
  },
  searchBar__unclicked: {
    padding: 10,
    flexDirection: "row",
    width: "95%",
    backgroundColor: "#d9dbda",
    borderRadius: 10,
    alignItems: "center",
  },
  searchBar__clicked: {
    padding: 10,
    flexDirection: "row",
    width: "80%",
    backgroundColor: "#d9dbda",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    width: "90%",
  },
  // ImageStyle: {
  //   height: 25,
  //   width: 25,
  //   resizeMode: 'stretch',
  //   alignItems: 'center',
  //   fill:"red"
  // }
});
