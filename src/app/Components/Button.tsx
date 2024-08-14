import { ButtonProps } from "../types/ButtonType"


const Button: React.FC <ButtonProps> = ({label, onClick, className}) =>{
    return(
        <button onClick = {onClick} className={className}>
            {label}
        </button>
    )
} 

export default Button