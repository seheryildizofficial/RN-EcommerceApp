import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import React from 'react';
import {AppColors} from '../theme/appColors';

const Spinner = () => {
  return (
    <View style={StyleSheet.container}>
      <ActivityIndicator size={'large'} color={AppColors.SECONDARY} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Spinner;
