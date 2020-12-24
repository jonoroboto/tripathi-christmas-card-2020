import React from "react"

import theme from "../utils/theme"
import styled from "@emotion/styled"
import { ThemeProvider } from "@emotion/react"
import Snowfall from "react-snowfall"

const Container = styled.main`
  background: ${props => props.theme.red};
  height: 100%;
  width: 100%;
`

const Layout = props => {
  return (
    <>
      <Snowfall />
      <ThemeProvider theme={theme}>
        <Container>{props.children}</Container>
      </ThemeProvider>
    </>
  )
}

export default Layout
