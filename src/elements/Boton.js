import styled,{css} from 'styled-components';

const Boton = styled.button`

    width: max-content;
    border-radius: 8px !important;
    height: 40px;
    font-size: 14px;
    min-width: 108px;
    font-weight: 600;
    border: none;
    cursor:pointer;
    font-family: "Open Sans", sans-serif;


    ${props => props.success && css`
       color: #fff;
       background: #24BB72;

       
      &:hover{
        color: #ffffff !important;
        background: #33CC82 !important;
      }
    `}

    ${props => props.cancel && css`
      color: #666;
      background: #DADADA !important;
      border:transparent;
      text-decoration: none;

      &:hover{
          transition: all 0.3s ;
          border: 2px solid #bcc5d4 ;  
      }
    `}

    ${props => props.successts && css`
      background-color: transparent;
      color : #26C281;

      &:hover{
        color: #11a266;
      }   
    `}
`;


export default Boton;