import styled,{css} from 'styled-components';


const handleColorType = color => {
    switch (color) {
      case "1":
        return " border-left: 8px solid #ab1414";
      case "2":
        return "border-left: 8px solid #fcc421";
      case "3":
            return "border-left: 8px solid #149dab";
      default:
        return "border-left: 8px solid red";
    }
};



const Card = styled.div`
    ${({ color }) => handleColorType(color)};;
    height:auto;
    margin-bottom:15px;
    padding:10px;
    color: #808080 !important;
    border-top: 1px solid #ececec;
    
    &:hover{
        //background-color: #11a266;
    }    
`;


export default Card;