import React from "react"

import theme from "../utils/theme"
import styled from "@emotion/styled"
import { ThemeProvider } from "@emotion/react"
import Snow from "../images/snow.gif"

const Container = styled.main`
  background-image: url("${Snow}"),
    radial-gradient(
      ${props => props.theme.red},
      ${props => props.theme.darkRed}
    );
  height: 100%;
  width: 100%;
`

const Layout = props => {
  return (
    <ThemeProvider theme={theme}>
      <Container>{props.children}</Container>
    </ThemeProvider>
  )
}

export default Layout
