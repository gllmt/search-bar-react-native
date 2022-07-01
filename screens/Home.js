// Home.js
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";

import List from "../components/List";
import SearchBar from "../components/SearchBar";
import DataProducts from "../assets/dataProducts.json"


const Home = () => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const [fakeData, setFakeData] = useState();
  const data = DataProducts;
  // get data from File DataProducts
  useEffect(() => {
    // console.log(data);
    setFakeData(data);
    // const getData = async () => {
    //   const apiResponse = await fetch(
    //     // "https://gist.githubusercontent.com/gllmt/fa64545b3ae379aff24ebfa7c98b6734/raw/e3b67f45b35e3a7b24063480157599b72a8b40a8/testapiproductslanguages.json"
    //     "https://gist.githubusercontent.com/gllmt/1fe5ff04b63822dfd71e076b759c0685/raw/d543f58c864584804504dce7238a96a1cefddc92/fakedataproducts.json"
    //   );
    //   const data = await apiResponse.json();
    //   setFakeData(data);
    // };
    // getData();
  }, []);

  return (
    <SafeAreaView style={styles.root}>
      {!clicked && <Text style={styles.title}>Omie & Cie</Text>}

      <SearchBar
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        clicked={clicked}
        setClicked={setClicked}
      />
      {!fakeData ? (
        <ActivityIndicator size="large" />
      ) : (
          <List
            searchPhrase={searchPhrase}
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
    marginTop: 20,
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: "10%",
  },
});
