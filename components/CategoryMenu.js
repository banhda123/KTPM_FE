import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CategoryMenu = () => {
  const categories = [
    { id: 1, name: 'Bút viết' },
    { id: 2, name: 'Văn phòng phẩm' },
    { id: 3, name: 'Dụng cụ học tập' },
    { id: 4, name: 'Mỹ Thuật' },
    { id: 5, name: 'Giấy in' },
    { id: 6, name: 'Bút cao cấp' },
    { id: 7, name: 'STEAM & DIY' },
    { id: 8, name: 'Sách' },
    { id: 9, name: 'Quà tặng - Lifestyle' },
  ];

  return (
    <View style={styles.container}>
      {categories.map((category) => (
        <TouchableOpacity 
          key={category.id} 
          style={styles.categoryItem}
        >
          <Text style={styles.categoryText}>{category.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 250,
    backgroundColor: '#fff',
    borderRightWidth: 1,
    borderRightColor: '#eee',
  },
  categoryItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  categoryText: {
    fontSize: 14,
    color: '#333',
  },
});

export default CategoryMenu;