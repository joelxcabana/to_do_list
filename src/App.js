
import './App.css';
import styled from 'styled-components';
import Header from './components/Header';
import Card from './components/CardTask';
import Formulario from './components/Form';

import { Container} from 'react-bootstrap';
import {useState} from 'react';

const App = () => {
 
const [tareas,setTareas] = useState([{titulo:'Tarea 1',descripcion:'descripcion 1'},
                                     {titulo:'Tarea 2',descripcion:'descripcion 2'}]);



  return (
         <>
           <Header/>
             <Container>
               <Formulario setTareas={setTareas} tareas={tareas}/>
               {
                 tareas.map((tarea,index)=>{
                   return  <Card titulo={tarea.titulo} descripcion={tarea.descripcion} />
                 })
               }
             </Container>
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
