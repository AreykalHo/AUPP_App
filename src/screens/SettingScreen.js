import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { globalStyles } from '../styles/GlobalStyles';

const SettingScreen = () => {
  return (
    <ScrollView>
    <View style={globalStyles.header}>
      <Text style={globalStyles.SubHTitle}>Settings</Text>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: '#333',
  },
});

export default SettingScreen;
