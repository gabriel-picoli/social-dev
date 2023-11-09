import styled from "styled-components"

const WIDTH_BREAK = '730px'

const StyledFlex = styled.div`
    display: flex;
`
const StyledImage = styled.img`
background-image: url('${props => props.image}');
background-position: right;
background-repeat: no-repeat;
background-size: cover;

width: 100%;
height: 100vh;

@media (max-width: ${WIDTH_BREAK}){
    display: none;
}
`

const StyledContainer = styled.div`
background-color: ${props => props.theme.white};
padding: 30px 50px;

display: flex;
flex-direction: column;

height: calc(100vh - 60px);
overflow-y: auto;

&:before, &:after{
    content: "";
    margin: auto;
}

@media (min-width: ${WIDTH_BREAK}){
    width: calc(${WIDTH_BREAK} - 100px);
}

@media (max-width: ${WIDTH_BREAK}){
    width: 100%;
}
`
function ImageWithSpace({ children, image }) {
    return (
        <div>
            <StyledFlex>
                <StyledImage image={image} />
                <StyledContainer>
                    {children}
                </StyledContainer>
            </StyledFlex>
        </div>
    )
}

ImageWithSpace.defaultProps = {
    image: '/coffee-background.jpg'
}

export default ImageWithSpace