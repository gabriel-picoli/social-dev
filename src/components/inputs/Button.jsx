import styled from "styled-components";

const StyledButton = styled.button`
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

const Button = ({ children, loading, disabled, ...props }) => {
    return (
        <StyledButton
            disabled={disabled || loading}
            {...props}
        >
            {loading && <img src="./loading.svg" width="16px" />}
            {!loading && children}
        </StyledButton>
    )

}
export default Button
