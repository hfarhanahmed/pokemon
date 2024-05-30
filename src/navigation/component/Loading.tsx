import React from 'react';
import { View, StyleSheet, Text, ActivityIndicator } from 'react-native';

const Loading = () => {
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
    textView: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
  });

  return (
    <View style={styles.rowView}>
      <View style={styles.textView}>
        <ActivityIndicator />
      </View>
      <Text style={styles.detailText}>Loading...</Text>
    </View>
  );
};

export default Loading;
