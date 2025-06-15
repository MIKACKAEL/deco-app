import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* En-tête avec deux logos */}
      <View style={styles.header}>
        <Image source={require('../assets/logo-left.png')} style={styles.logo} />
        <Image source={require('../assets/logo-right.png')} style={styles.logo} />
      </View>

      {/* Titre principal */}
      <Text style={styles.title}>DreamHome</Text>

      {/* Image avec texte superposé */}
      <View style={styles.imageContainer}>
        <Image source={require('../assets/interior.jpg')} style={styles.interiorImage} />
        <Text style={styles.imageText}>
          Réinventer{'\n'}votre intérieur{'\n'}avec style
        </Text>
      </View>

      {/* Bouton de navigation vers l'écran Login */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.buttonText}>Se connecter</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 40,
    width: '100%',
    alignSelf: 'center',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 28,
    fontFamily: 'serif',
    color: '#a3835b',
    marginVertical: 10,
  },
  imageContainer: {
    width: '90%',
    height: 300,
    borderRadius: 20,
    overflow: 'hidden',
    marginVertical: 20,
    position: 'relative',
  },
  interiorImage: {
    width: '100%',
    height: '100%',
  },
  imageText: {
    position: 'absolute',
    top: '35%',
    left: 20,
    color: '#333',
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 35,
  },
  button: {
    backgroundColor: '#ccc',
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 50,
    marginTop: 20,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
  },
});
