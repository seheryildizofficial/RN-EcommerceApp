import {Image, Text, View, Pressable, Alert} from 'react-native';
import React from 'react';
import {AppColors} from '../../theme/appColors';
import CustomButton from '../../uı/button';
import {productItemStyle} from '../../styles/home/homeStyles';
import {useDispatch} from 'react-redux';
import {addToChart} from '../../store/actions/homeActions';

const ProductItem = ({item}) => {
  const dispatch = useDispatch();
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

        <CustomButton title="Sepete Ekle" onPress={addToChart} />
      </View>
    </Pressable>
  );
};

export default ProductItem;
//hata custom button da
