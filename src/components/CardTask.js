
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
                  <i class="fa fa-times icon-accion" aria-hidden="true" onClick={() => deleteTarea(id)}></i>
                </Col>
            </Row>
           
       </Card>
        </>
     );
}
 
export default CardTask;