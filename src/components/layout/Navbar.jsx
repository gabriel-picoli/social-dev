import styled from "styled-components";
import axios from "axios";
import { useRouter } from "next/router";

const StyledNavbar = styled.div`
  background-color: ${(props) => props.theme.white};
  height: 80px;
  display: flex;
  align-items: center;
  padding: 0 100px;

  @media (max-width: 500px) {
    padding: 0 20px;
  }
`;

const StyledLogo = styled.div`
  flex: 1;
  font-weight: bold;
`;
const StyledLogout = styled.a`
  cursor: pointer;
`;

const StyledImage = styled.img`
  margin-left: 25px;
  width: 30px;
  cursor: pointer;
  color: ${(props) => props.theme.black};
`;

function Navbar() {
  const router = useRouter();

  const handleLogout = async () => {
    await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/user/logout`);
    router.push("/");
  };

  return (
    <StyledNavbar>
      <StyledLogo># Social Dev</StyledLogo>

      <div>
        <StyledLogout onClick={handleLogout}>Desconectar</StyledLogout>
      </div>

      <StyledImage src="./dark-mode.svg" />
    </StyledNavbar>
  );
}

export default Navbar;
