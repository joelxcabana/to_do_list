import {Form,Button} from 'react-bootstrap';
import {useState} from 'react';

const Formulario = ({setTareas,tareas}) => {

   const [titulo,setTitulo] = useState('');
   const [descripcion,setDescipcion] = useState('');

   const onChange = (e) =>{
       if(e.target.name === "titulo"){
          setTitulo(e.target.value);
       }else if (e.target.name === "descripcion") {
            setDescipcion(e.target.value);
       }  
   }

   const onSubmit = (e) =>{
        e.preventDefault();
        const tareaNueva = {titulo:titulo,descripcion:descripcion};
        setTareas([...tareas , tareaNueva]);
   }

    return ( 
        <>
        <Form onSubmit={onSubmit}>
            <Form.Group controlId="formBasicTitle">
                <Form.Label>Titulo :</Form.Label>
                <Form.Control type="text" placeholder="" name="titulo" value={titulo} onChange={onChange} />
            </Form.Group>

            <Form.Group controlId="formBasicDescription">
                <Form.Label>Descripcion :</Form.Label>
                <Form.Control type="text" placeholder="" name="descripcion" value={descripcion}  onChange={onChange}/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Agregar
            </Button>
        </Form>
        </>
     );
}
 
export default Formulario;