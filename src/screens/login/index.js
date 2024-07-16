import {StyleSheet, View, ActivityIndicator} from 'react-native';
import {Button, Input, Text} from '@ui-kitten/components';
import {Formik} from 'formik';
import {AppColors} from '../../theme/appColors';
import {loginSchema} from '../../utils/validations';
import {Image} from 'react-native-svg';
import {useDispatch, useSelector} from 'react-redux';
import {userLogin} from '../../store/actions/authAction';
import {useEffect} from 'react';

const Login = ({navigation}) => {
  const {loginPending, isLogin} = useSelector(state => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isLogin) navigation.goBack();
  }, [isLogin]);
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{username: 'mor_2314', password: '83r5^_'}}
        onSubmit={values => dispatch(userLogin(values))}
        validationSchema={loginSchema}>
        {({handleChange, handleBlur, handleSubmit, values, errors}) => (
          <View style={{padding: 10}}>
            <Input
              size="large"
              status={errors.username ? 'danger' : 'basic'}
              caption={errors.username}
              style={styles.input}
              label="Kullanıcı Adı"
              placeholder="Kullanıcı adınızı giriniz"
              value={values.username}
              onChangeText={handleChange('username')}
            />
            <Input
              status={errors.password ? 'danger' : 'basic'}
              size="large"
              caption={errors.password}
              style={styles.input}
              placeholder="Şifre alanını doldurunuz"
              label="şifre"
              value={values.password}
              onChangeText={handleChange('password')}
            />
            <Button
              onPress={handleSubmit}
              style={loginPending ? styles.passiveButton : styles.activeButton}
              appearance="filled">
              {loginPending ? (
                <ActivityIndicator size={'small'} />
              ) : (
                <Text>Giriş yap</Text>
              )}
            </Button>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.WHITE,
    justifyContent: 'center',
    marginBottom: 50,
  },
  button: {
    marginVertical: 15,
  },
  input: {
    marginVertical: 15,
  },
  activeButton: {
    marginVertical: 15,
  },
  passiveButton: {
    marginVertical: 15,
    backgroundColor: AppColors.GRAY,
  },
});
