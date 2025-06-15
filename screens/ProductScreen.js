import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

export default function ProductScreen({ navigation }) {
  return (
    <View style={styles.wrapper}>
      <ScrollView style={styles.container}>
        {/* Header avec logos */}
        <View style={styles.header}>
          <Image source={require('../assets/logo-left.png')} style={styles.logo} />
          <Image source={require('../assets/logo-right.png')} style={styles.logo} />
        </View>

        <Text style={styles.title}>
          Des accessoires raffinés pour harmoniser et personnaliser votre décoration
        </Text>

        {/* Stars */}
        <View style={styles.starsContainer}>
          <Ionicons name="star" size={24} color="#c2bbaa" />
          <Ionicons name="star" size={24} color="#c2bbaa" />
          <Ionicons name="star" size={24} color="#c2bbaa" />
        </View>

        {/* Sections de produits */}
        <ProductSection title="LIT" products={[
          { image: require('../assets/lit1.png'), price: '300.000 Ar' },
          { image: require('../assets/lit2.png'), price: '350.000 Ar' },
          { image: require('../assets/lit3.png'), price: '500.000 Ar' },
        ]} />

        <ProductSection title="Canapé" products={[
          { image: require('../assets/canape1.png'), price: '600.000 Ar' },
          { image: require('../assets/canape2.png'), price: '750.000 Ar' },
          { image: require('../assets/canape3.png'), price: '820.000 Ar' },
        ]} />

        <ProductSection title="Table à manger" products={[
          { image: require('../assets/table1.png'), price: '650.000 Ar' },
          { image: require('../assets/table2.png'), price: '850.000 Ar' },
          { image: require('../assets/table3.png'), price: '990.000 Ar' },
        ]} />
      </ScrollView>

      {/* Bottom navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate('Welcome')}
        >
          <Ionicons name="home-outline" size={28} color="#a3835b" />
        </TouchableOpacity>
        <TouchableOpacity
         style={styles.navButton}
         onPress={() => navigation.navigate('Product')}
         >
          <MaterialIcons name="storefront" size={28} color="#a3835b" />
        </TouchableOpacity>
        <TouchableOpacity 
            style={styles.navButton}
            onPress={() => navigation.navigate('Panier')}
            >
          <FontAwesome5 name="shopping-cart" size={28} color="#a3835b" />
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.navButton}
          onPress={() => navigation.navigate('Profile')}
                >
          <Ionicons name="person-outline" size={28} color="#a3835b" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

function ProductSection({ title, products }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <View style={styles.row}>
        {products.map((product, index) => (
          <View key={index} style={styles.item}>
            <Image source={product.image} style={styles.productImage} />
            <Text style={styles.price}>{product.price}</Text>
            <TouchableOpacity style={styles.arrowButton}>
              <Text style={styles.arrow}>➔</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'serif',
    textAlign: 'center',
    marginHorizontal: 10,
    marginBottom: 5,
  },
  starsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  section: {
    backgroundColor: '#f9f9f9',
    marginVertical: 10,
    paddingVertical: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'serif',
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
  },
  item: {
    alignItems: 'center',
    width: 100,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 5,
    elevation: 1,
  },
  productImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    borderRadius: 10,
  },
  price: {
    marginTop: 5,
    fontWeight: 'bold',
    fontSize: 14,
  },
  arrowButton: {
    marginTop: 5,
  },
  arrow: {
    fontSize: 22,
    color: '#333',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#eee',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  navButton: {
    alignItems: 'center',
  },
});
