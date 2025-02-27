import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';

const CategoryButtons = () => {
  const categories = [
    { id: 1, name: 'Giới thiệu', icon: require('../assets/image/default-avatar.jpg') },
    { id: 2, name: 'Sản phẩm mới', icon: require('../assets/image/default-avatar.jpg') },
    { id: 3, name: 'Quyền chọn hàng', icon: require('../assets/image/default-avatar.jpg') },
    { id: 4, name: 'Giải pháp in ấn', icon: require('../assets/image/default-avatar.jpg') },
    { id: 5, name: 'Văn phòng phẩm', icon: require('../assets/image/default-avatar.jpg') },
  ];

  return (
    <ScrollView 
      horizontal 
      showsHorizontalScrollIndicator={false}
      style={styles.container}
    >
      {categories.map((category) => (
        <TouchableOpacity 
          key={category.id} 
          style={styles.categoryButton}
        >
          <View style={styles.iconContainer}>
            <Image source={category.icon} style={styles.icon} />
          </View>
          <Text style={styles.categoryName}>{category.name}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingVertical: 20,
  },
  categoryButton: {
    alignItems: 'center',
    marginHorizontal: 15,
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  icon: {
    width: 40,
    height: 40,
  },
  categoryName: {
    fontSize: 12,
    color: '#333',
    textAlign: 'center',
  },
});

export default CategoryButtons;