import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Button} from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/AntDesign';
import {LOGIN} from '../../utils/routes';
import {userLogOut} from '../../store/actions/authAction';

const Profile = ({navigation}) => {
  const {isLogin, token} = useSelector(state => state.auth);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      {isLogin ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Icon name="logout" size={30} color="#900" />
          <Text style={{marginVertical: 15, fontSize: 14}}>
            lütfen çıkış yapmak için butona tıklayınız.
          </Text>
          <Text>{token}</Text>
          <Button
            status="danger"
            onPress={() => dispatch(userLogOut)}
            style={styles.button}
            appearance="filled">
            Çıkış Yap
          </Button>
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
export default Profile;
