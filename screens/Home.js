import React, { useState, useEffect } from "react";
import { StyleSheet, Text, SafeAreaView, ActivityIndicator } from "react-native";

import ProductsList from "../components/ProductsList";
import SearchBar from "../components/SearchBar";
import DataProducts from "../assets/dataProducts.json"


const Home = () => {
  const [searchWord, setSearchWord] = useState("");
  const [clicked, setClicked] = useState(false);
  const [fakeData, setFakeData] = useState();
  const data = DataProducts;

  // get data from File DataProducts
  useEffect(() => {
    setFakeData(data);
  }, []);

  return (
    <SafeAreaView style={styles.root}>
      {!clicked && <Text style={styles.title}>Omie & Cie</Text>}

      <SearchBar
        searchWord={searchWord}
        setSearchWord={setSearchWord}
        clicked={clicked}
        setClicked={setClicked}
      />
      {!fakeData ? (
        <ActivityIndicator size="large" />
      ) : (
          <ProductsList
            searchWord={searchWord}
            data={fakeData}
            setClicked={setClicked}
          />
      )}
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  root: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    width: "100%",
    marginTop: 50,
    fontSize: 30,
    fontWeight: "bold",
    marginLeft: "10%",
  },
});
