
import Card from '../elements/Card';


const CardTask = ({titulo,descripcion,prioridad}) => {
    return ( 
        <>
        <Card color={prioridad}>
            <div className="task__title">{titulo}</div>
            <div>{descripcion}</div>
       </Card>
        </>
     );
}
 
export default CardTask;