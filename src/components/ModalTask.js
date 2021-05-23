import {Modal,Button,Form} from 'react-bootstrap';
import Boton from '../elements/Boton';

const ModalTask = ({show,handleClose,addTask}) => {
    
    const onSend = (e) =>{
        e.preventDefault();
        const {titulo, descripcion} = e.target.elements;
        addTask({
            titulo:titulo.value,
            descripcion:descripcion.value
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