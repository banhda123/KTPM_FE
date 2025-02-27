import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const SideMenu = () => {
  const categories = [
    { 
      id: 1, 
      name: 'Bút viết',
      subCategories: ['Bút bi', 'Bút máy', 'Bút chì', 'Bút dạ quang']
    },
    { 
      id: 2, 
      name: 'Văn phòng phẩm',
      subCategories: ['Kẹp giấy', 'Ghim bấm', 'Băng keo', 'Kéo']
    },
    { 
      id: 3, 
      name: 'Dụng cụ học tập',
      subCategories: ['Thước kẻ', 'Compa', 'Tẩy', 'Gọt bút chì']
    },
    { 
      id: 4, 
      name: 'Mỹ Thuật',
      subCategories: ['Màu vẽ', 'Cọ vẽ', 'Giấy vẽ', 'Bút vẽ']
    },
    { 
      id: 5, 
      name: 'Giấy in',
      subCategories: ['Giấy A4', 'Giấy photo', 'Giấy màu']
    },
    { 
      id: 6, 
      name: 'Bút cao cấp',
      subCategories: ['Bút ký', 'Bút quà tặng']
    },
    { 
      id: 7, 
      name: 'STEAM & DIY',
      subCategories: ['Bộ thí nghiệm', 'Đồ chơi sáng tạo']
    },
    { 
      id: 8, 
      name: 'Sách',
      subCategories: ['Sách giáo khoa', 'Sách tham khảo']
    },
    { 
      id: 9, 
      name: 'Quà tặng - Lifestyle',
      subCategories: ['Quà tặng văn phòng', 'Phụ kiện lifestyle']
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>= Danh Sách Sản Phẩm</Text>
      </View>
      <ScrollView>
        {categories.map((category) => (
          <View key={category.id}>
            <TouchableOpacity style={styles.categoryItem}>
              <Text style={styles.categoryName}>{category.name}</Text>
              <Text style={styles.arrow}>›</Text>
            </TouchableOpacity>
            {/* Danh mục con */}
            <View style={styles.subCategoriesContainer}>
              {category.subCategories.map((subCategory, index) => (
                <TouchableOpacity 
                  key={index} 
                  style={styles.subCategoryItem}
                >
                  <Text style={styles.subCategoryText}>{subCategory}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Phần Danh mục nổi bật */}
      <View style={styles.featuredCategories}>
        <Text style={styles.featuredTitle}>Danh mục nổi bật</Text>
        <TouchableOpacity style={styles.featuredItem}>
          <Text style={styles.featuredText}>Khách hàng thân thiết</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.featuredItem}>
          <Text style={styles.featuredText}>Khách hàng ưu tiên</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.featuredItem}>
          <Text style={styles.featuredText}>Thiên Long Nội Bộ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.featuredItem}>
          <Text style={styles.featuredText}>Gió Hàng</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#0066cc',
    padding: 12,
  },
  headerText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  categoryItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor: '#f8f8f8',
  },
  categoryName: {
    fontSize: 14,
    color: '#333',
  },
  arrow: {
    fontSize: 18,
    color: '#666',
  },
  subCategoriesContainer: {
    backgroundColor: '#fff',
  },
  subCategoryItem: {
    padding: 10,
    paddingLeft: 25,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  subCategoryText: {
    fontSize: 13,
    color: '#666',
  },
  featuredCategories: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  featuredTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  featuredItem: {
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  featuredText: {
    fontSize: 14,
    color: '#666',
  },
});

export default SideMenu;