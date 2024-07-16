import {Image, Text, View, Pressable, Alert} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../../uı/button';
import {productItemStyle} from '../../styles/home/homeStyles';
import {useDispatch, useSelector} from 'react-redux';
import {addToChart} from '../../store/actions/homeActions';
import {LOGIN} from '../../utils/routes';
import{ userLogin}from ""

const ProductItem = ({item}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {loginPending,isLogin} = useSelector(state => state.auth);

  const addChart = () => {
    if (isLogin) {
      dispatch(
        addToChart({
          userId: 3,
          date: 200 - 12 - 1,
          products: [{productId: 1, quantity: 3}],
        }),
      );
    } else {
      Alert.alert(
        'Giriş yap',
        'Giriş yaptıktan sonra ürünü satın alabilirisniz',
        [
          {
            text: 'Giriş yap',
            onPress: () => navigation.navigate(LOGIN),
            style: 'cancel',
          },
          {text: 'Vazgeç', onPress: () => console.log('OK Pressed')},
        ],
      );
    }
  };

  return (
    <Pressable style={productItemStyle.container}>
      <View style={productItemStyle.imageContainer}>
        <Image
          style={{
            width: 51,
            height: 51,
            resizeMode: 'contain',
          }}
          source={{
            uri: item.image,
          }}
        />
      </View>
      <View style={productItemStyle.infoContainer}>
        <Text style={productItemStyle.title}>{item.title}</Text>
        <Text numberOfLines={3} style={productItemStyle.description}>
          {item.description}
        </Text>

        <CustomButton title="Sepete Ekle" onPress={addChart} />
      </View>
    </Pressable>
  );
};

export default ProductItem;
//hata custom button da
