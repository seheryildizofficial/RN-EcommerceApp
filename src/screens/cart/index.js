import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {Button} from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/AntDesign';
import {LOGIN} from '../../utils/routes';

const Cart = ({navigation}) => {
  const {isLogin, token} = useSelector(state => state.auth);
  return (
    <View style={styles.container}>
      {isLogin ? (
        <View>
          <Text>Giriş Yapıldı</Text>
        </View>
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Icon name="login" size={30} color="#900" />
          <Text style={{marginVertical: 15, fontSize: 14}}>
            Lütfen Giriş Yapınız
          </Text>
          <Button
            onPress={() => navigation.navigate(LOGIN)}
            style={styles.button}
            appearance="filled">
            Giriş yap
          </Button>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
  },
  button: {
    marginVertical: 15,
  },
});
export default Cart;
