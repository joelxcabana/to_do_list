import styled,{css} from 'styled-components';

const Boton = styled.button`
    background-color: #26C281;
    border-radius:4px;
    color: #FFF;
    border: none;
    height:auto;
    width: ${props => props.largo ? '50%' : 'auto'};
    cursor:pointer;
    margin-left:10px;
    padding:5px;

    &:hover{
        background-color: #11a266;
    }

    ${props => props.microsoft && css`
    background-color: #9A9A9A;
    `}
    
`;


export default Boton;