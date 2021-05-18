
import './App.css';
import styled from 'styled-components';
import Header from './components/Header';

import { Container,Row,Col } from 'react-bootstrap';

const App = () => {
 
  return (
         <>
           <Header/>
         </>
  );
}

const Pipeline = styled.p`
   margin-top:10px;
   color:blue;
   border: 1px solid green;
   background-color:blueviolet;
`;

export default App;
