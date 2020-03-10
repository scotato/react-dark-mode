import React from 'react'
import styled from 'styled-components'

const Links = styled.footer`
  padding: 12px 0;
`

const Link = styled.a.attrs({
  target: "_blank",
  rel: "noopener norefferer"
})`
  margin: 8px;
  text-decoration: none;
  
  .light-mode & {
    color: dodgerblue;
  }

  .dark-mode & {
    color: gold;
  }
`

export default () => (
  <Links>
    <Link href="https://github.com/donavon/use-dark-mode">use-dark-mode</Link>
    <Link href="https://github.com/markusenglund/react-switch">react-switch</Link>
    <Link href="https://github.com/styled-components/styled-components">styled-components</Link>
    <Link href="https://github.com/scotato/react-dark-mode">source</Link>
  </Links>
)
