import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';

const DetailsPage = () => {
    const route = useRoute();
    const { cardItem } = route.params;

    return (
        <ScrollView className="bg-gray-100 p-4">
            <View className="bg-white rounded-lg shadow-md p-6 mb-4">
                <Image
                    source={{ uri: cardItem.profilePictureUrl || 'https://via.placeholder.com/100' }} 
                    className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                
                <Text className="text-2xl font-bold text-gray-800 text-center mb-2">{cardItem.name}</Text>
                <Text className="text-lg text-gray-600 text-center mb-4">{cardItem.company.name}</Text>

                
                <View className="mb-4">
                    <Text className="text-lg font-semibold text-gray-700 mb-1">Email:</Text>
                    <Text className="text-base text-gray-600 mb-2">{cardItem.email}</Text>

                    <Text className="text-lg font-semibold text-gray-700 mb-1">Phone:</Text>
                    <Text className="text-base text-gray-600 mb-2">{cardItem.phone}</Text>

                    <Text className="text-lg font-semibold text-gray-700 mb-1">Address:</Text>
                    <Text className="text-base text-gray-600 mb-2">
                        {cardItem.address.street}, {cardItem.address.suite}
                        {'\n'}
                        {cardItem.address.city}, {cardItem.address.zipcode}
                    </Text>

                    <Text className="text-lg font-semibold text-gray-700 mb-1">Website:</Text>
                    <Text className="text-base text-blue-500 underline">{cardItem.website}</Text>
                </View>
            </View>
        </ScrollView>
    );
}

export default DetailsPage;
