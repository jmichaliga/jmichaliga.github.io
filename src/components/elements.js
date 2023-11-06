import styled from '@emotion/styled'
import { space, width, fontSize, color } from "styled-system"

import theme from "../theme"

export const Box = styled.div`
  ${space}
  ${width}
  ${fontSize}
  ${color}
`

export const Flex = styled(Box)`
  display: flex;
  flex-wrap: wrap;
`

export const Bar = styled.div`
  position: fixed;
  top: 0px;
  width: 100%;
  height: 2px;
  background: ${theme.colors.jmRed};
`

export const Center = styled(Box)`
  text-align: center;
  align-items: center;
  justify-content: center;
  height: 100%;
`

export const H1 = styled("h1")`
  color: ${theme.colors.white};
  text-shadow: ${theme.colors.black} 1px 1px 3px;
  letter-spacing: -0.5px;
  font-family: "Helvetica Now", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: ${theme.fontSizes[7]}px;
  font-weight: 300;
  padding: 3rem 1rem;
  text-align: center;
  margin-bottom: 0;
`

export const H2 = styled.h2`
  padding-top: 2rem;
  font-size: 1.75rem;
  text-shadow: 1px 1px 1px ${theme.colors.black};
`

export const H3 = styled.h3`
  padding: 1rem;
  text-transform: uppercase;
  font-size: 1.5rem;
  background: ${theme.colors.jmRed};
  text-shadow: 1px 1px 1px ${theme.colors.black};
`

export const Header = styled.h5`
  color: ${theme.colors.white};
  text-shadow: ${theme.colors.black} 1px 1px 3px;
  letter-spacing: -0.5px;
  font-family: "Helvetica Now", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: ${theme.fontSizes[3]}px;
`

export const Ul = styled.ul`
  ${space}
  list-style: none;
`

export const Li = styled.li`
  line-height: 1.5em;
`

export const Link = styled("a")`
  & {
    border-radius: ${theme.space[1]}px;
    padding: ${theme.space[1]}px;
    color: ${theme.colors.white};
    background: ${theme.colors.jmRed};
    width: 40px;
    height: 40px;
    transition-duration: ${theme.duration.normal};
    border-bottom: 2px solid transparent;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    & svg {
      cursor: pointer;
    }
  }
  &:hover {
    text-shadow: ${theme.colors.black} 1px 1px 2px;
    border-bottom: 2px solid ${theme.colors.jmBlue};
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0);
  }
`
