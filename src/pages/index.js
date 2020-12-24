import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styled from "@emotion/styled"

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
  align-content: center;
  justify-content: center;
  height: 100%;
  h1,
  p {
    color: ${props => props.theme.shade[100]};
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Happy Christmas Uncle & Auntie Tripathi" />
    <Container>
      <h1>Happy Christmas Uncle &amp; Auntie Tripathi</h1>
      <p>
        Hope you're having a lovely day, looking forwards to seeing you soon
      </p>
      <ImageContainer>
        <Image />
      </ImageContainer>
    </Container>
  </Layout>
)

export default IndexPage
