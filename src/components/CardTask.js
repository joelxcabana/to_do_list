
import Card from '../elements/Card';


const CardTask = ({titulo,descripcion}) => {
    return ( 
        <>
        <Card>
            <div className="task__title">{titulo}</div>
            <div>{descripcion}</div>
       </Card>
        </>
     );
}
 
export default CardTask;