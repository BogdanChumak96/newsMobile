import axios from 'axios';
import { useEffect, useState } from 'react';
import { View, Alert, RefreshControl, TouchableOpacity, FlatList, ActivityIndicator, Text } from 'react-native';
import styled from 'styled-components/native';
import Loading from '../components/Loading';

const PostImage = styled.Image`
border-radius: 10px;
width: 100%;
height: 300px;
margin-bottom : 15px;
`;

const PostText = styled.Text`
height: 400px;
font-size: 25px;
line-height: 24px;
`;

export default function FullPostScreen({ route, navigation }) {
    const [data, setData] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const { id, title } = route.params


    async function fetchPosts() {
        try {
            setIsLoading(true)
            const { data } = await axios.get(`https://62e55849de23e263791f158e.mockapi.io/SS/${id}`)
            setData(data)
            console.log(data);
            setIsLoading(false)
        } catch (error) {
            Alert.alert(error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchPosts()
        navigation.setOptions({ title })
    }, [])

    if (isLoading) {
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Loading />
        </View>
    }

    return (
        data ?

            < View style={{
                padding: 20,
                flex: 1,
                alignContent: 'center',
                marginTop: 10
            }}>
                <PostImage
                    source=
                    {{ url: data.imageUrl }}
                />
                <PostText>
                    {data.text}
                </PostText>
            </View > : <Text></Text>

    );
}


