import './App.css';
import Header from './components/Header';
import Boton from './elements/Boton';
import ModalTask from './components/ModalTask';
import { Container,Row,Col } from 'react-bootstrap';
import {useState} from 'react';
import NoTask from './elements/NoTasks';
import CardTask from './components/CardTask';

const App = () => {
 
const [tareas,setTareas] = useState(null);

const [show, setShow] = useState(false);
const handleShow = () => setShow(true);
const handleClose = () => setShow(false);


const addTask = (task) =>{
  if(tareas === null ){
    setTareas([task]);
  }else {
    setTareas([...tareas , task]);
  }
}

const deleteTask = (id) =>{
  const tarkFinal = tareas.filter((t)=> t.id !== id);
  setTareas(tarkFinal);
}

  return (
         <>
           <Header/>
             <Container className="cards-content">
               <Row>
                 <Col md={12} className="mt-2 mb-2">
                   <Boton successts onClick={handleShow}>+ Nueva Tarea</Boton>
                   <ModalTask  show={show} handleClose={handleClose} addTask={addTask}/>
                 </Col>
                 <Col>
                 {
                   tareas && tareas.length ?  
                    tareas.map((tarea)=>{
                      return <CardTask  key={tarea.id} deleteTask={deleteTask} id={tarea.id} titulo={tarea.titulo} descripcion={tarea.descripcion} prioridad={tarea.prioridad}/>
                    })
                    :
                    <NoTask/> 
                 }
                     
                 </Col>
               </Row>
             </Container>
         </>
  );
}

export default App;
