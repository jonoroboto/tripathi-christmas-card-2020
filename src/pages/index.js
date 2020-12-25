import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styled from "@emotion/styled"
import Holly from "../images/holly.png"

const ImageContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 64px auto;
  border-radius: 16px;
  overflow: hidden;
`
const Container = styled.div`
  padding: 64px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  h1,
  h2,
  h3,
  p {
    color: ${props => props.theme.shade[100]};
    text-shadow: 0px 0px 10px ${props => props.theme.darkRed},
      0px 0px 20px ${props => props.theme.darkRed};
    /* background: ${props => props.theme.red}; */
    padding: 4px;
  }
`
const ImageTopRight = styled.img`
  position: absolute;
  top: 0;
  right: 0;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Happy Christmas Uncle & Auntie Tripathi" />
    <Container>
      <h1>Happy Christmas Uncle &amp; Auntie Tripathi</h1>
      <h2>Have yourself, a merry little christmas!</h2>
      <h3>Love Jono, Sne & Big Kev</h3>
      <ImageContainer>
        <ImageTopRight src={Holly} alt="Holly leaf" />
        <Image />
      </ImageContainer>
    </Container>
  </Layout>
)

export default IndexPage
