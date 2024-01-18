import React from 'react';
import {View, StyleSheet, ProgressBarAndroid, Text} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>

      <View style={styles.example}>
        <Text>Fixed Progress Value</Text>
        <ProgressBarAndroid
          styleAttr="Horizontal"
          indeterminate={false}
          progress={0.5}
        />

      </View>



    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  example: {
    marginVertical: 24,
  },
});

export default App;