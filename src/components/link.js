import styled from '@emotion/styled'
import theme from "../theme"

const StyledLink = styled.a`
  font-family: "Helvetica Now", "Helvetica Neue", Helvetica, Arial, sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${theme.space[1]}px;
  padding: ${theme.space[1]}px;
  color: ${theme.colors.white};
  background: ${theme.colors.jmRed};
  transition-duration: ${theme.duration.normal};
  border-bottom: 2px solid transparent;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;

  &:hover {
    text-shadow: ${theme.colors.black} 1px 1px 2px;
    border-bottom: 2px solid ${theme.colors.jmBlue};
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0);
  }
`;

export default StyledLink
