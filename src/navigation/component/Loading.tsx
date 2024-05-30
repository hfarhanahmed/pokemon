import React from 'react';
import { View, StyleSheet, Text, ActivityIndicator } from 'react-native';

const Loading = () => {
  return (
    <View style={styles.rowView}>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
      >
        <ActivityIndicator />
      </View>
      <Text style={styles.detailText}>Loading...</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  rowView: {
    alignSelf: 'center',
    justifyContent: 'center',
  },
  detailText: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 18,
    color: '#000',
    flex: 1,
  },
});
export default Loading;
