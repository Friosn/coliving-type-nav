import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const TabBar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TabBar</Text>
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

export default TabBar;
