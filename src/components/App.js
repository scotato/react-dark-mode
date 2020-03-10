import React from 'react'
import useDarkMode from 'use-dark-mode'

import Layout, { Title, Main } from './Layout'
import Switch from './Switch'
import Links from './Links'

export default () => {
  const { toggle, value } = useDarkMode()
  
  return (
    <Layout>
      <Title>{value ? "🌝 Dark Mode" : "🌚 Light Mode"}</Title>

      <Main>
        <Switch onChange={toggle} checked={value} />
      </Main>

      <Links />
    </Layout>
  )
}
