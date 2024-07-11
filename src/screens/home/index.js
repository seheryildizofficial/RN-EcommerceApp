import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getProductList} from '../../store/actions/homeActions';
import Spinner from '../../uı/spinner';
import ProductItem from './productItem';
import {homeScreenStyles} from '../../styles/home/homeStyles';

const Home = () => {
  //hata olabilir
  const {pending, productList} = useSelector(state => state?.home);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductList({}));
  }, []);
  return (
    <View style={homeScreenStyles.container}>
      {pending ? (
        <Spinner />
      ) : (
        <FlatList
          data={productList}
          keyExtractor={item => item.id}
          renderItem={({item}) => <ProductItem item={item} />}
        />
      )}
    </View>
  );
};

export default Home;
