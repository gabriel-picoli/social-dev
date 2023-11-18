import styled from "styled-components";
const Button = styled.button`
    background-color: ${props => props.theme.primary};
    padding: 10px 20px;
    border-radius: 8px;
    border 0;
    font-weight: bold;
    color: ${props => props.theme.white};
    font-size: 16px;
    transition: 0.25s;

    ${props => !props.disabled && 'cursor: pointer;'}

    :hover{
        background-color: ${props => props.theme.primaryHover};
    }

    :disabled{
        background-color: ${props => props.theme.disabled};
    }

`
export default Button
