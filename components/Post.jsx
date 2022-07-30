import React from 'react'
import styled from 'styled-components/native';
import { StyleSheet, Text, View, Image, Alert } from 'react-native';

const PostView = styled.View`
// height : 150px;
padding-top: 15px;
flex-direction: row;
border-bottom-color :  rgba(0,0,0,.1);
border-bottom-width : 1px;
border-bottom-style : solid;
`;

const PostImage = styled.Image`
width : 100px;
height : 100px;
border-radius : 12px;
margin-right: 12px;
margin-left : 10px;
margin-bottom : 10px;
`;

const PostDetails = styled.View`
width : 300px;
flex-direction : column;
justify-content : center;
`;

const PostTitle = styled.Text`
font-size : 18px;
font-weight : 600;
`;

const PostData = styled.Text`
font-size : 12px;
color : 'rgba(0, 0, 0, .4)';
margin-top: 5px;
margin-bottom: 15px;
`;

const trucateTitle = (str) => {
    if (str.length >= 50) {
        return str.substring(0, 50) + '...';
    } else {
        return str;
    }
}

const Post = ({ title, imageUrl, createdAt, text }) => {
    return (
        <PostView>
            <PostImage
                source={{ url: imageUrl }}
            />
            <PostDetails>
                <PostTitle>{trucateTitle(title)}</PostTitle>
                <Text>{text}</Text>
                <PostData>{new Date(createdAt).toLocaleDateString()}</PostData>

            </PostDetails>
        </PostView>
    )
}

export default Post