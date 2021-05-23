import {Modal,Form} from 'react-bootstrap';
import Boton from '../elements/Boton';
import shortid from 'shortid';

const ModalTask = ({show,handleClose,addTask}) => {
    
    const onSend = (e) =>{
        e.preventDefault();
        const {titulo, descripcion,prioridad} = e.target.elements;
        addTask({
            id:shortid.generate(),
            titulo:titulo.value,
            descripcion:descripcion.value,
            prioridad:prioridad.value
        });
        handleClose();
    }

    return (
           <>
           <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Nueva Tarea</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={onSend} >
                            <Form.Group controlId="formBasicTitle">
                                <Form.Label>Titulo:</Form.Label>
                                <Form.Control type="text" placeholder="" name="titulo"  />
                            </Form.Group>

                            <Form.Group controlId="formBasicDescription">
                                <Form.Label>Descripcion:</Form.Label>
                                <Form.Control as="textarea" rows={3} name="descripcion"  />
                            </Form.Group>
                            <Form.Group controlId="formGridState">
                            <Form.Label>Prioridad</Form.Label>
                            <Form.Control as="select" name="prioridad" defaultValue="Selecciona una opcion">
                                <option disabled>Selecciona una opcion</option>
                                <option value={1}>Alta</option>
                                <option value={2}>Media</option>
                                <option value={3}>Baja</option>
                            </Form.Control>
                            </Form.Group>
                            <Modal.Footer>
               <Boton type="button" cancel onClick={handleClose}>Cancelar</Boton>
               <Boton type="submit" success>Agregar</Boton>
              </Modal.Footer>
                    </Form>
                </Modal.Body>
               
            </Modal>
          </>
      );
}
 
export default ModalTask;