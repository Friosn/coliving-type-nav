import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>AppBar</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
});

export default AppBar;
