
import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';
import FullPostScreen from './screens/FullPost';
import Navigation from './screens/Navigation';



const AppWrapper = styled.View`
  margin-top: 20px;
`;

export default function App() {
  return (
    <Navigation />
  );
}


