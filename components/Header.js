import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      {/* Phần trên cùng */}
      <View style={styles.topHeader}>
        <View style={styles.logoContainer}>
          <Image 
            source={require('../assets/image/default-avatar.jpg')} 
            style={styles.logo}
          />
          <Text style={styles.brandName}>TLN VTLK</Text>
        </View>
        
        <View style={styles.mainMenu}>
          <TouchableOpacity>
            <Text style={styles.menuItem}>Trang Chủ</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.menuItem}>Cửa Hàng</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.menuItem}>Bài Viết</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.menuItem}>Liên Hệ</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.rightSection}>
          <TouchableOpacity style={styles.cartIcon}>
            <Image 
              source={require('../assets/image/default-avatar.jpg')}
              style={styles.icon}
            />
          </TouchableOpacity>
          <View style={styles.userSection}>
            <TouchableOpacity style={styles.loginButton}>
              <Text style={styles.loginText}>Đăng nhập</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Phần dưới với tìm kiếm và danh mục */}
      <View style={styles.bottomHeader}>
        
        <View style={styles.searchContainer}>
          <TextInput 
            style={styles.searchInput}
            placeholder="Tìm kiếm sản phẩm..."
          />
          <TouchableOpacity style={styles.searchButton}>
            <Text style={styles.searchButtonText}>Tìm Kiếm</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.contactInfo}>
          <Text style={styles.phoneNumber}>1900 866 819</Text>
          <Text style={styles.supportText}>Hỗ trợ khách hàng</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  topHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 40,
    height: 40,
  },
  brandName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#0066cc',
  },
  mainMenu: {
    flexDirection: 'row',
    gap: 20,
  },
  menuItem: {
    fontSize: 14,
    color: '#333',
  },
  rightSection: {
    alignItems: 'center',
  },
  cartIcon: {
    marginBottom: 5,
  },
  icon: {
    width: 24,
    height: 24,
  },
  userSection: {
    alignItems: 'center',
  },
  loginButton: {
    padding: 5,
  },
  loginText: {
    color: '#0066cc',
    fontSize: 14,
  },
  bottomHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#f8f8f8',
  },
  categoryButton: {
    backgroundColor: '#0066cc',
    padding: 10,
    borderRadius: 4,
    marginRight: 15,
  },
  categoryButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    marginRight: 15,
  },
  searchInput: {
    flex: 1,
    height: 36,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  searchButton: {
    backgroundColor: '#0066cc',
    padding: 8,
    borderRadius: 4,
  },
  searchButtonText: {
    color: '#fff',
  },
  contactInfo: {
    alignItems: 'flex-end',
  },
  phoneNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0066cc',
  },
  supportText: {
    fontSize: 12,
    color: '#666',
  },
});

export default Header;