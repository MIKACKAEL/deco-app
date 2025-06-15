import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons'; // Assure-toi d'avoir expo/vector-icons ou react-native-vector-icons
import { useNavigation } from '@react-navigation/native';

const rooms = [
  {
    id: '1',
    name: 'Living Room',
    image: require('../assets/living-room.jpg'), // mets tes images dans assets
  },
  {
    id: '2',
    name: 'Dining Room',
    image: require('../assets/dining-room.jpg'),
  },
  {
    id: '3',
    name: 'Bedroom',
    image: require('../assets/bedroom.jpg'),
  },
];

export default function ProfileScreen() {
  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require('../assets/logo-left.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Image
          source={require('../assets/logo-right.png')}
          style={styles.educationLogo}
          resizeMode="contain"
        />
      </View>

      {/* Profile picture + camera icon */}
      <View style={styles.profileContainer}>
        <Image
          source={require('../assets/profile-photo.jpg')} // Ta photo ici
          style={styles.profileImage}
        />
        <TouchableOpacity style={styles.cameraButton}>
          <Ionicons name="camera" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* User name */}
      <Text style={styles.userName}>Tefy</Text>

      {/* Welcome text */}
      <Text style={styles.welcomeText}>
        Entrez, respirez, détendez-vous ... votre
        {'\n'}havre de paix vous attend
      </Text>

      {/* Rooms section */}
      <Text style={styles.sectionTitle}>Rooms</Text>
      <FlatList
        data={rooms}
        horizontal
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 10 }}
        renderItem={({ item }) => (
          <View style={styles.roomCard}>
            <Image source={item.image} style={styles.roomImage} />
            <View style={styles.roomNameOverlay}>
              <Text style={styles.roomName}>{item.name}</Text>
            </View>
          </View>
        )}
      />

      {/* Stars */}
      <View style={styles.starsContainer}>
        <Ionicons name="star" size={24} color="#c2bbaa" />
        <Ionicons name="star" size={24} color="#c2bbaa" />
        <Ionicons name="star" size={24} color="#c2bbaa" />
      </View>

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
  container: { flex: 1, backgroundColor: '#fff', paddingTop: 40 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  logo: { width: 100, height: 40 },
  educationLogo: { width: 50, height: 50 },

  profileContainer: {
    alignSelf: 'center',
    marginBottom: 15,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  cameraButton: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: '#a3835b',
    borderRadius: 20,
    padding: 8,
    borderWidth: 2,
    borderColor: '#fff',
  },

  userName: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 10,
    fontFamily: 'Arial',
  },

  welcomeText: {
    textAlign: 'center',
    fontSize: 16,
    marginHorizontal: 30,
    marginBottom: 25,
    fontWeight: '600',
  },

  sectionTitle: {
    marginLeft: 15,
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },

  roomCard: {
    width: 130,
    height: 180,
    marginHorizontal: 8,
    borderRadius: 15,
    overflow: 'hidden',
  },
  roomImage: {
    width: '100%',
    height: '100%',
  },
  roomNameOverlay: {
    position: 'absolute',
    bottom: 8,
    left: 8,
    backgroundColor: 'rgba(0,0,0,0.25)',
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 8,
  },
  roomName: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 14,
  },

  starsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 15,
  },

  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#f5f1e9',
  },
  navButton: {
    padding: 6,
  },
});
