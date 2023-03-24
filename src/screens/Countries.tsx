import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Countries = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Countries</Text>
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

export default Countries;
