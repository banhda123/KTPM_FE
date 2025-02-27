import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Danh mục nổi bật</Text>
        <TouchableOpacity style={styles.footerItem}>
          star
          <Text style={styles.text}>Khách hàng thân thiết</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
          ''''
          <Text style={styles.text}>Khách hàng ưu tiên</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
          ''''
          <Text style={styles.text}>Thiên Long Nội Bộ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
            ''''
          <Text style={styles.text}>Gió Hàng</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.bottomFooter}>
        <Text style={styles.copyright}>© 2024 Thiên Long. All rights reserved.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#f8f8f8',
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  section: {
    padding: 15,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  footerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  text: {
    fontSize: 14,
    color: '#666',
    marginLeft: 10,
  },
  bottomFooter: {
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 15,
    alignItems: 'center',
  },
  copyright: {
    fontSize: 12,
    color: '#999',
  },
});

export default Footer;