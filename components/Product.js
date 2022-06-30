import React, {Component} from 'react';
import {View, Text, TextInput, Image, StyleSheet} from 'react-native';
// import ProductImage from "../../assets/images/abricot.webp";

class Product extends Component {
  render() {
    console.log("poduct");
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://cdn.sanity.io/images/yue4of8i/production/f1593d4b2397f74709c87c81a7426f6d25f537a6-7772x7772.jpg?w=990&auto=format',
          }}
        />
        <Text style={styles.text}>{this.props.name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    height: 70,
    margin: 10,
    width: '90%'
  },
  text: {
      color: 'white',
      fontSize: 15,
  },
  image: {
    maxWidth: '100%',
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 10
  }
});

export default Product;