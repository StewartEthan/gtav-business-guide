import React from 'react'
import properties from '../data/properties'
import Property from './Property'

export default function PropertyTool() {
  return (
    <ul>
      {properties.map(property => (
        <li>
          <Property property={property} />
        </li>
      ))}
    </ul>
  )
}
