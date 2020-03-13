import React from 'react'
import Switch from 'react-switch'

export default props => (
  <Switch
    width={192}
    height={96}
    handleDiameter={88}
    onColor="#0AE678"
    offColor="#c7ced1"
    checkedIcon={false}
    uncheckedIcon={false}
    {...props}
  />
)
