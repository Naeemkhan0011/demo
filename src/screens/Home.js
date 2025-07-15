import { FlatList, Image, StatusBar, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React, { useCallback, useState } from 'react'
import axios from 'axios';
import { useFocusEffect } from '@react-navigation/native';
import jestConfig from '../../jest.config';

const Home = ({ navigation }) => {
    const [data, setData] = useState([]);

    useFocusEffect(
        useCallback(() => {
            fetchProducts()
        }, [])
    )

    const fetchProducts = async () => {
        try {
            const response = await axios.get(`https://fakestoreapi.in/api/products`);
            console.log('response', response);
            setData(response?.data?.products)
            return response.data;
        } catch (error) {
            console.error('Error fetching products:', error);
            throw error;
        }
    };


    const { width } = useWindowDimensions();

    // Responsive calculations
    const isSmallScreen = width < 400;
    const imageSize = isSmallScreen ? 80 : 100;
    const fontSizeTitle = isSmallScreen ? 14 : 16;
    const fontSizePrice = isSmallScreen ? 16 : 18;
    const fontSizeDetails = isSmallScreen ? 12 : 14;
    const cardPadding = isSmallScreen ? 8 : 12;
    const cardMargin = isSmallScreen ? 8 : 12;

    return (
        <View style={{
            flex: 1,

        }}>
            <StatusBar
                backgroundColor={'white'}
                barStyle={'dark-content'}
                translucent={false}
            />

            <View style={{
                marginHorizontal: 20,
            }}>

                <Text style={{
                    textAlign: 'center',
                    marginTop: 40,
                    fontSize: 21,
                    fontWeight: '700',
                    color: 'black'
                }}>{`Product List`}</Text>
            </View>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <View
                        style={{
                            flexDirection: 'row',
                            marginBottom: cardMargin,
                            backgroundColor: '#fff',
                            borderRadius: 8,
                            padding: cardPadding,
                            shadowColor: '#000',
                            shadowOffset: { width: 0, height: 2 },
                            shadowOpacity: 0.1,
                            shadowRadius: 4,
                            elevation: 2,
                            marginHorizontal: cardMargin,
                            marginTop: cardMargin
                        }}
                    >
                        <Image
                            source={{ uri: item.image }}
                            style={{
                                width: imageSize,
                                height: imageSize,
                                borderRadius: 4,
                                marginRight: cardPadding
                            }}
                        />
                        <View style={{ flex: 1 }}>
                            <Text
                                style={{
                                    fontSize: fontSizeTitle,
                                    fontWeight: 'bold',
                                    marginBottom: 4
                                }}
                                numberOfLines={2}
                                ellipsizeMode="tail"
                            >
                                {item.title}
                            </Text>
                            <Text
                                style={{
                                    fontSize: fontSizePrice,
                                    color: '#2ecc71',
                                    fontWeight: 'bold',
                                    marginBottom: 4
                                }}
                            >
                                ${item.price}
                                {item.discount && (
                                    <Text
                                        style={{
                                            fontSize: fontSizeDetails,
                                            color: '#e74c3c',
                                            marginLeft: 6
                                        }}
                                    >
                                        {item.discount}% OFF
                                    </Text>
                                )}
                            </Text>
                            <Text style={{
                                fontSize: fontSizeDetails,
                                color: '#7f8c8d',
                                marginBottom: 4
                            }}>
                                {item.brand}
                            </Text>
                            <Text style={{
                                fontSize: fontSizeDetails,
                                color: '#7f8c8d'
                            }}>
                                {item.color}
                            </Text>
                        </View>
                    </View>
                )}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>

    );
};

export default Home

const styles = StyleSheet.create({})