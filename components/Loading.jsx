import React from 'react'
import { Text, View, ActivityIndicator } from 'react-native';

const Loading = () => {
    return <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        <ActivityIndicator size="large" />
        <Text style={{
            marginTop: 10,
            fontSize: 18
        }}>Загрузка статей....</Text>
    </View>
}

export default Loading