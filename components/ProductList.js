import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';

const products = [
  {
    id: '1',
    name: 'Bút bi TL-027',
    price: '15.000đ',
    image: require('../assets/image/default-avatar.jpg'),
    originalPrice: '20.000đ'
  },
  {
    id: '2',
    name: 'Bút bi TL-079',
    price: '25.000đ',
    image: require('../assets/image/default-avatar.jpg'),
    originalPrice: '30.000đ'
  },
  // Thêm các sản phẩm khác
];

const ProductList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Sản phẩm nổi bật</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>Xem tất cả</Text>
        </TouchableOpacity>
      </View>
      
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.productCard}>
            <Image source={item.image} style={styles.productImage} />
            <View style={styles.productInfo}>
              <Text style={styles.productName}>{item.name}</Text>
              <View style={styles.priceContainer}>
                <Text style={styles.price}>{item.price}</Text>
                <Text style={styles.originalPrice}>{item.originalPrice}</Text>
              </View>
              <TouchableOpacity style={styles.addToCartButton}>
                <Text style={styles.addToCartText}>Thêm vào giỏ</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        numColumns={5}
        columnWrapperStyle={styles.productRow}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  viewAll: {
    color: '#0066cc',
    fontSize: 14,
  },
  productRow: {
    justifyContent: 'space-between',
  },
  productCard: {
    width: '19%',
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 20,
    elevation: 2,
  },
  productImage: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
  },
  productInfo: {
    padding: 10,
  },
  productName: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 10,
  },
  price: {
    fontSize: 16,
    color: '#e41e31',
    fontWeight: 'bold',
  },
  originalPrice: {
    fontSize: 14,
    color: '#999',
    textDecorationLine: 'line-through',
  },
  addToCartButton: {
    backgroundColor: '#0066cc',
    padding: 8,
    borderRadius: 4,
    alignItems: 'center',
  },
  addToCartText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '500',
  },
});

export default ProductList;