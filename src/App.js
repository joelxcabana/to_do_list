import './App.css';
import Header from './components/Header';
import Boton from './elements/Boton';
import ModalTask from './components/ModalTask';
import { Container,Row,Col } from 'react-bootstrap';
import {useState} from 'react';
import NoTask from './elements/NoTasks';
import CardTask from './components/CardTask';

const App = () => {
 

const taskLocal = JSON.parse(localStorage.getItem('tareas')) || {};
const [tareas,setTareas] = useState(taskLocal);

const [show, setShow] = useState(false);
const handleShow = () => setShow(true);
const handleClose = () => setShow(false);


const addTask = (task) =>{
  if(tareas === null ){
    setTareas([task]);
    setTaskLocalStorage(task);
  }else {
    setTaskLocalStorage([...tareas , task]);
    setTareas([...tareas , task]);
   
  }
}

const deleteTask = (id) =>{
  const tarkFinal = tareas.filter((t)=> t.id !== id);
  setTaskLocalStorage(tarkFinal);
  setTareas(tarkFinal);

}


const setTaskLocalStorage = (tareasStorage) =>{
  localStorage.setItem('tareas', JSON.stringify(tareasStorage));
}




  return (
         <>
           <Header/>
             <Container className="cards-content">
               <Row className="mt-2 mb-1 d-flex align-items-center">
                    <Col xs={6}>
                    <span class="title__header"><i class="fas fa-tasks"></i> Tareas</span>
                    </Col>
                    <Col xs={6} className="text-right">
                      <Boton successts onClick={handleShow}>+ Nueva Tarea</Boton>
                      <ModalTask  show={show} handleClose={handleClose} addTask={addTask}/>
                    </Col>
                </Row>
                <Row>
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
