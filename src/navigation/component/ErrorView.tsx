import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const ErrorView = () => {
  return (
    <View style={styles.rowView}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={styles.detailText}>Error loading data</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  rowView: {
    alignSelf: 'center',
  },
  detailText: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 18,
    color: '#000',
  },
});
export default ErrorView;
