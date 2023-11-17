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
        restos de um moinho que caiu sao como restos de um amor. as ruinas ficam e quando voce olha para elas, lembra da beleza que antes havia ali.. e voce quer de volta
      </ContainerText>
    </PostContainer>
  )
}

export default Post
