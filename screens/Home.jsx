import axios from 'axios';
import { useEffect, useState } from 'react';
import { View, Alert, FlatList, RefreshControl, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import Loading from '../components/Loading';
import Post from '../components/Post';

const AppWrapper = styled.View`
  margin-top: 20px;
`;

export default function HomeScreen({ navigation }) {
    const [items, setItems] = useState()
    const [isLoading, setIsLoading] = useState(true)

    async function fetchPosts() {
        try {
            setIsLoading(true)
            const { data } = await axios.get('https://62e55849de23e263791f158e.mockapi.io/SS')
            setItems(data)
            setIsLoading(false)
        } catch (error) {
            Alert.alert(error)
        } finally {
            setIsLoading(false)
        }
    }
    useEffect(() => {

        fetchPosts()

    }, [])

    if (!isLoading) {
        <Loading />
    }

    return (
        <View>
            <FlatList
                refreshControl=
                {<RefreshControl
                    refreshing={isLoading}
                    onRefresh={fetchPosts}
                />}
                data={items}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('Post', { id: item.id, title: item.title})}>
                        <Post title={item.title} imageUrl={item.imageUrl} createdAt={item.createdAt} />
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}


