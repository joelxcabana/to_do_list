
import Card from '../elements/Card';
import {Row,Col} from 'react-bootstrap';


const CardTask = ({id,titulo,descripcion,prioridad,deleteTask}) => {

const deleteTarea = (id)=>{
    deleteTask(id);
}

    return ( 
        <>
        <Card color={prioridad}>
            <Row>
                <Col xs={11}>
                <div className="task__title">{titulo}</div>
                 <div>{descripcion}</div>
                </Col>
                <Col xs={1} >
                    <button onClick={() => deleteTarea(id)}>x</button>
                </Col>
            </Row>
           
       </Card>
        </>
     );
}
 
export default CardTask;