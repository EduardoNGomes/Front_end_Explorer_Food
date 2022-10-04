import { Container } from "./style";
import { AiOutlinePlus, AiOutlineClose } from 'react-icons/ai'
export const Tag = ({name, isNew=false, ...rest }) => {
  return(
    <Container isNew={isNew}>
      <input 
        type="text" 
        name={name} 
        readOnly={!isNew}
        {...rest}
        />
      <button>
        {isNew? <AiOutlinePlus size={14}/>:<AiOutlineClose size={14}/> }
      </button>
    </Container>
  )
}