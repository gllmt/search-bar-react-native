import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import Product from './components/Product';
import DataProducts from './assets/dataProducts.json';

const data = DataProducts.data.allProductReference;
// console.log(data)

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.myTextInput = React.createRef();
  // }

  state = {
    search: '',
  };

  filterList(list) {
    return list.filter(
      (listProduct) =>
        listProduct.display_name
          .toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
          .includes(this.state.search.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))
    );
  }

  render() {
    const list = data;

    return (
      <View style={styles.container}>
        <TextInput
          ref={this.myTextInput}
          onChangeText={(search) => this.setState({search})}
          maxLength={60}
          style={styles.searchBar}
        />
        {/* <TouchableOpacity
          style={styles.clearButton}
          onPress={() => this.myTextInputref.clear()}
        >
        <Text style={styles.text}>Annuler</Text>
        </TouchableOpacity> */}
        {this.filterList(list).map((listProduct, index) => (
          <Product key={index} name={listProduct.display_name} />
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    height: '100%',
  },
  searchBar: {
    fontSize: 15,
    margin: 10,
    width: "60%",
    height: 50,
    backgroundColor: '#F2EFF6',
    marginLeft: 20,
    marginRight: "auto",
    borderRadius: 5
  },
  clearButton: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5,
  },
});

export default App;