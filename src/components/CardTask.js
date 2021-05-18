
import Card from '../elements/Card';


const CardTaskC = ({titulo,descripcion}) => {
    return ( 
        <>
        <Card>
            <div>{titulo}</div>
            <div>{descripcion}</div>
       </Card>
        </>
     );
}
 
export default CardTaskC;