import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const AppHeader = () => {
  return (
    <View>
      <View style={styles.cartdiv}>
        <Text> TOTAL ITEMS IN BASKET: 10</Text>
      </View>
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  cartdiv: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    borderColor: 'red',
    borderWidth: 2,
    margin: 5,
  },
});
