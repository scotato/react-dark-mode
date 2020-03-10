import React from 'react'
import Switch from 'react-switch'

export default props => (
  <Switch
    width={256}
    height={128}
    handleDiameter={120}
    onColor="#0AE678"
    offColor="#c7ced1"
    checkedIcon={false}
    uncheckedIcon={false}
    {...props}
  />
)
