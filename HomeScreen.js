import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import Header from './components/Header';
import SideMenu from './components/SideMenu';
import CategoryButtons from './components/CategoryButtons';
import ProductList from './components/ProductList';
import Carousel from './components/Carousel';

const HomeScreen = () => {
  const renderContent = () => {
    return (
      <>
        <Carousel />
        <CategoryButtons />
        <ProductList />
      </>
    );
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.mainContainer}>
        {/* Menu dọc bên trái */}
        <View style={styles.sideMenuContainer}>
          <SideMenu />
        </View>
        
        {/* Nội dung chính bên phải */}
        <FlatList
          style={styles.content}
          data={[{ key: 'content' }]}
          renderItem={renderContent}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  sideMenuContainer: {
    width: 250,
    borderRightWidth: 1,
    borderRightColor: '#eee',
  },
  content: {
    flex: 1,
  },
});

export default HomeScreen;