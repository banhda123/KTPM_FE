import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const SideMenu = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const categories = [
    {
      id: 1,
      name: 'Bút viết',
      icon: '✏️',
      subCategories: [
        {
          name: 'Bút bi',
          items: ['Bút bi TL-027', 'Bút bi TL-079', 'Bút bi TL-095']
        },
        {
          name: 'Bút máy',
          items: ['Bút máy cao cấp', 'Bút máy học sinh']
        },
        {
          name: 'Bút chì',
          items: ['Bút chì gỗ', 'Bút chì bấm', 'Bút chì màu']
        },
        {
          name: 'Bút dạ quang',
          items: ['Bút dạ quang FL-04', 'Bút dạ quang HL-012']
        }
      ]
    },
    {
      id: 2,
      name: 'Văn phòng phẩm',
      icon: '📎',
      subCategories: [
        {
          name: 'Kẹp giấy',
          items: ['Kẹp bướm', 'Kẹp đen', 'Kẹp màu']
        },
        {
          name: 'Ghim bấm',
          items: ['Ghim số 10', 'Ghim số 3']
        },
        {
          name: 'Băng keo',
          items: ['Băng keo trong', 'Băng keo 2 mặt']
        }
      ]
    },
    {
      id: 3,
      name: 'Dụng cụ học tập',
      icon: '📏',
      subCategories: [
        {
          name: 'Thước kẻ',
          items: ['Thước 20cm', 'Thước 30cm', 'Thước đo độ']
        },
        {
          name: 'Compa',
          items: ['Compa học sinh', 'Compa kỹ thuật']
        },
        {
          name: 'Tẩy - Gôm',
          items: ['Tẩy trắng', 'Tẩy màu', 'Tẩy bút chì']
        }
      ]
    },
    {
      id: 4,
      name: 'Mỹ thuật',
      icon: '🎨',
      subCategories: [
        {
          name: 'Màu vẽ',
          items: ['Màu nước', 'Màu poster', 'Màu acrylic']
        },
        {
          name: 'Cọ vẽ',
          items: ['Cọ tròn', 'Cọ dẹt', 'Bộ cọ']
        },
        {
          name: 'Giấy vẽ',
          items: ['Giấy canson', 'Giấy màu nước']
        }
      ]
    },
    {
      id: 5,
      name: 'Giấy in',
      icon: '📄',
      subCategories: [
        {
          name: 'Giấy A4',
          items: ['Giấy A4 70gsm', 'Giấy A4 80gsm']
        },
        {
          name: 'Giấy photo',
          items: ['Giấy photo thường', 'Giấy photo đặc biệt']
        }
      ]
    },
    { 
      id: 6, 
      name: 'Bút cao cấp',
      icon: '🖋️',
      subCategories: ['Bút ký', 'Bút quà tặng']
    },
    { 
      id: 7, 
      name: 'STEAM & DIY',
      icon: '🔬',
      subCategories: ['Bộ thí nghiệm', 'Đồ chơi sáng tạo']
    },
    { 
      id: 8, 
      name: 'Sách',
      icon: '📚',
      subCategories: ['Sách giáo khoa', 'Sách tham khảo']
    },
    { 
      id: 9, 
      name: 'Quà tặng - Lifestyle',
      icon: '🎁',
      subCategories: ['Quà tặng văn phòng', 'Phụ kiện lifestyle']
    },
  ];

  const renderSubMenu = (category) => {
    if (hoveredCategory !== category.id) return null;

    return (
      <View style={styles.subMenuContainer}>
        {category.subCategories.map((subCat, index) => (
          <View key={index} style={styles.subCategoryContainer}>
            <Text style={styles.subCategoryTitle}>{subCat.name}</Text>
            {subCat.items.map((item, itemIndex) => (
              <TouchableOpacity key={itemIndex} style={styles.subMenuItem}>
                <Text style={styles.subMenuItemText}>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Danh mục sản phẩm</Text>
      </View>
      <ScrollView style={styles.menuContainer}>
        {categories.map((category) => (
          <View key={category.id}>
            <TouchableOpacity
              style={[
                styles.categoryItem,
                hoveredCategory === category.id && styles.categoryItemHovered
              ]}
              onMouseEnter={() => setHoveredCategory(category.id)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <View style={styles.categoryContent}>
                <Text style={styles.categoryIcon}>{category.icon}</Text>
                <Text style={styles.categoryName}>{category.name}</Text>
              </View>
              <Text style={styles.arrow}>›</Text>
            </TouchableOpacity>
            {renderSubMenu(category)}
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
  menuContainer: {
    flex: 1,
  },
  categoryItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor: '#fff',
  },
  categoryItemHovered: {
    backgroundColor: '#f0f8ff',
  },
  categoryContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryIcon: {
    marginRight: 10,
    fontSize: 16,
  },
  categoryName: {
    fontSize: 14,
    color: '#333',
  },
  arrow: {
    fontSize: 18,
    color: '#666',
  },
  subMenuContainer: {
    position: 'absolute',
    left: '100%',
    top: 0,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 4,
    padding: 15,
    minWidth: 200,
    zIndex: 1000,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  subCategoryContainer: {
    marginBottom: 15,
  },
  subCategoryTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  subMenuItem: {
    paddingVertical: 6,
  },
  subMenuItemText: {
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