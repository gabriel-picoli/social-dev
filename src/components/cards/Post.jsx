import styled from "styled-components";

const PostContainer = styled.div`
  background-color: ${props => props.theme.white};
  padding: 20px;
  border-radius: 10px;
`
const StyledUsername = styled.div`
  font-weight: bold;
  font-size: 18px;
`

const StyledDate = styled.div`
  font-size: 12px;
`

const ContainerText = styled.div`
  margin-top: 20px;
`

function Post() {
    return (
        <PostContainer>
            <StyledUsername>@username</StyledUsername>
            <StyledDate>24 de maio de 2021</StyledDate>
            <ContainerText>
                as vezes eu sinto saudade sua, estou maluco e não sei o que fazer a respeito
            </ContainerText>
        </PostContainer>
    )
}

export default Post
