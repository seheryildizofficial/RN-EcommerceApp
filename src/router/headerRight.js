import React from 'react';
import {View, StyleSheet, Pressable, Text} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {AppColors} from '../theme/appColors';
import {useSelector} from 'react-redux';
import {CART} from '../utils/routes';

const HeaderRight = ({navigation}) => {
  const {count} = useSelector(state => state.home);

  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.navigate(CART)}>
        <Icon size={30} color={AppColors.PRIMARY} name={'basket'} />
        {count > 0 && (
          <View
            style={{
              position: 'absolute',
              right: -5,
              backgroundColor: AppColors.PRIMARY,
              padding: 3,
              borderRadius: 100,
              width: 20,
              height: 20,
              justifyContent: 'center',
              alignItems: 'center',
              top: -5,
            }}>
            <Text style={{color: AppColors.WHITE}}>{count}</Text>
          </View>
        )}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.WHITE,
    paddingHorizontal: 10,
  },
});

export default HeaderRight;
