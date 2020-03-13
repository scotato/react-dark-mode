import React from 'react'
import styled from 'styled-components'
import GlobalStyle from './GlobalStyle'

const Layout = styled.div`
  display: grid;
  padding: 32px;
  grid-template-rows: auto 1fr auto;
  height: 100%;
`

export const Title = styled.h1``

export const Main = styled.main`
  display: grid;
  place-content: center;
`

export default props => (
  <>
    <Layout {...props} />
    <GlobalStyle />
  </>
)
