import styled,{css} from 'styled-components';

const Card = styled.div`
    border-left: 8px solid red;
    height:auto;
    margin-bottom:15px;
    padding:10px;
    color: #808080 !important;
   // box-shadow:0px 0px 10px 0px #c4c4c4;
   // -moz-box-shadow:0px 0px 10px 0px #c4c4c4;
   // -webkit-box-shadow:0px 0px 10px 0px #c4c4c4;

    &:hover{
        //background-color: #11a266;
    }

    ${props => props.microsoft && css`
    background-color: #9A9A9A;
    `}
    
`;


export default Card;