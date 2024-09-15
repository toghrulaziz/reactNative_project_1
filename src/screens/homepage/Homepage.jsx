import { StyledView, StyledText, StyledTouchableOpacity } from '@common/StyledComponents'
import React, { useEffect, useState } from 'react'
import Layout from '@common/Layout';
import InfoCard from './components/InfoCard';
import { FlatList } from 'react-native';
import NoData from './components/NoData';
import { storage } from '@utils/MMKVStorage';

const Homepage = () => {
    // const [count, setCount] = useState(0);
    // const increment = () => setCount(count + 1);
    // const decrement = () => setCount(count - 1);

    const loginInfo = storage.getString('loginInfo');

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const result = await response.json();
            console.log('Fetched data:', result);
            setData(result);
        };

        fetchData();
    }, []);



    return (
        // <Layout title="Counter">
        //     <StyledView className='flex-1 bg-red-500 items-center justify-center'>
        //         <StyledText className='text-3xl m-4 text-white'>Counter</StyledText>

        //         <StyledText className='text-5xl text-white mb-4'>{count}</StyledText>

        //         <StyledView className='flex-row'>
        //             <StyledTouchableOpacity
        //                 className='bg-blue-500 p-4 rounded mx-2'
        //                 onPress={decrement}
        //             >
        //                 <StyledText className='text-white text-xl'>-</StyledText>
        //             </StyledTouchableOpacity>

        //             <StyledTouchableOpacity
        //                 className='bg-blue-500 p-4 rounded mx-2'
        //                 onPress={increment}
        //             >
        //                 <StyledText className='text-white text-xl'>+</StyledText>
        //             </StyledTouchableOpacity>
        //         </StyledView>
        //     </StyledView>
        // </Layout>

        <Layout title="Home">
            {/* {data.map(item => (
                <InfoCard key={item.id} cardItem={item} />
            ))} */}
            <StyledText>{loginInfo}</StyledText>

            <FlatList
                contentContainerStyle={{ paddingHorizontal: 8 , paddingVertical: 10}}
                data={data}
                renderItem={({ item }) => <InfoCard cardItem={item} />}
                ListEmptyComponent={() => <NoData />}
            />
        </Layout>
    )
}

export default Homepage