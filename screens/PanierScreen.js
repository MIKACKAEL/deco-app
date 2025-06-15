import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome5, Entypo } from '@expo/vector-icons';

export default function PanierScreen({ navigation }) {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Lit double luxe', price: 800000, quantity: 1 },
    { id: 2, name: 'Canapé royal', price: 900000, quantity: 1 },
    { id: 3, name: 'Table bois massif', price: 70000, quantity: 1 },
  ]);

  const increaseQuantity = (id) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems(items =>
      items
        .map(item =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  const getSubtotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const formatPrice = (number) => {
    return number.toLocaleString('fr-FR') + ' Ar';
  };

  return (
    <View style={styles.wrapper}>
      <ScrollView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Image source={require('../assets/logo-left.png')} style={styles.logo} />
          <Image source={require('../assets/logo-right.png')} style={styles.logo} />
        </View>

        <Text style={styles.title}>Votre panier</Text>

        {cartItems.map((item) => (
          <View key={item.id} style={styles.itemContainer}>
            <Text style={styles.itemName}>{item.name}</Text>
            <View style={styles.rightSection}>
              <Text style={styles.itemPrice}>{formatPrice(item.price)}</Text>
              <View style={styles.quantityControls}>
                <TouchableOpacity onPress={() => decreaseQuantity(item.id)} style={styles.controlButton}>
                  <Entypo name="minus" size={18} color="#a3835b" />
                </TouchableOpacity>
                <Text style={styles.quantityText}>{item.quantity}</Text>
                <TouchableOpacity onPress={() => increaseQuantity(item.id)} style={styles.controlButton}>
                  <Entypo name="plus" size={18} color="#a3835b" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}

        <View style={styles.summaryContainer}>
          <Text style={styles.summaryText}>
            Sous-total ({cartItems.length} articles) : {formatPrice(getSubtotal())}
          </Text>
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.checkoutButton}>
        <Text style={styles.checkoutButtonText}>Passer la commande</Text>
      </TouchableOpacity>

      {/* Navigation bas */}
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

const styles = StyleSheet.create({
  wrapper: { flex: 1, backgroundColor: '#fff' },
  container: { padding: 16 },
  header: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
  logo: { width: 50, height: 50, resizeMode: 'contain' },
  title: { fontSize: 22, fontWeight: 'bold', fontFamily: 'serif', textAlign: 'center', marginBottom: 20 },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  itemName: { fontSize: 16, fontWeight: '500' },
  rightSection: { alignItems: 'flex-end' },
  itemPrice: { fontSize: 16, fontWeight: 'bold', color: '#444' },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  controlButton: {
    backgroundColor: '#eee',
    padding: 6,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  quantityText: { fontSize: 16, fontWeight: '600', color: '#333' },
  summaryContainer: {
    marginTop: 20,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  summaryText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  checkoutButton: {
    position: 'absolute',
    bottom: 70,
    width: '80%', 
    backgroundColor: '#a3835b',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    alignSelf: 'center', 
  },
    
  checkoutButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
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
