import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeTabs = ({ activeTab, setActiveTab, activeCard, handleCardPress }) => {
  return (
    <View style={styles.lowerPart}>
      <View style={styles.tabsCard}>
        <View style={styles.tabsContainer}>
          {['Burgers', 'Pizzas', 'Pasta', 'Drinks'].map(tab => (
            <TouchableOpacity key={tab} onPress={() => setActiveTab(tab)}>
              <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>
                {tab}
              </Text>
              {activeTab === tab && <View style={styles.underline} />}
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={styles.popularSection}>
        <Text style={styles.heading}>Popular</Text>
        <View style={styles.row}>
          {['Cheese Burger', 'Chezzy Burger'].map((item, index) => (
            <TouchableOpacity
              key={item}
              onPress={() => handleCardPress(index)}
              style={[
                styles.card,
                activeCard === index && styles.activeCard,
              ]}
            >
              <View style={styles.topRightIcons}>
                <View style={styles.ratingContainer}>
                  {Array(5).fill(0).map((_, i) => (
                    <Ionicons key={i} name="star-outline" size={16} color="#FFD700" />
                  ))}
                </View>
                <View style={styles.favoriteContainer}>
                  <Ionicons name="heart-outline" size={20} color="#FF0000" />
                </View>
              </View>
              <Image source={require('../../assets/beef_burger.png')} style={styles.cardImage} />
              <View style={styles.priceContainer}>
                <Text style={styles.cardPrice}>$05</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={styles.promoSection}>
        <Image source={require('../../assets/promotion_image.png')} style={styles.promoImage} />
        <View style={styles.promoTextContainer}>
          <Text style={styles.promoTitle}>Experience our delicious new dish</Text>
          <Text style={styles.promoDiscount}>30% OFF</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  lowerPart: {
    flex: 1.2,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  tabsCard: {
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: 10,
    marginBottom: 0,
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  tabText: {
    fontSize: 16,
    color: '#FF7043',
  },
  activeTabText: {
    fontWeight: 'bold',
    color: '#FF7043',
  },
  underline: {
    width: '100%',
    height: 2,
    backgroundColor: '#FF7043',
    marginTop: 5,
  },
  popularSection: {
    marginTop: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF7043',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  card: {
    width: 140,
    height: 220,
    backgroundColor: '#FFF',
    borderRadius: 10,
    overflow: 'hidden',
    marginRight: 10,
    elevation: 2,
  },
  activeCard: {
    elevation: 5,
    borderWidth: 2,
    borderColor: '#FF7043',
  },
  topRightIcons: {
    position: 'absolute',
    top: 10,
    right: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 40,
  },
  ratingContainer: {
    flexDirection: 'row',
  },
  favoriteContainer: {
    marginTop: 5,
  },
  cardImage: {
    width: '100%',
    height: '70%',
    resizeMode: 'cover',
  },
  priceContainer: {
    padding: 10,
    alignItems: 'center',
  },
  cardPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF7043',
  },
  promoSection: {
    marginTop: 20,
    backgroundColor: '#FF7043',
    borderRadius: 15,
    overflow: 'hidden',
    padding: 10,
    flexDirection: 'row',
  },
  promoImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  promoTextContainer: {
    justifyContent: 'center',
  },
  promoTitle: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  promoDiscount: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 5,
  },
});

export default HomeTabs;
