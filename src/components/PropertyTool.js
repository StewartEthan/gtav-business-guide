import React from 'react'
import properties from '../data/properties'
import Property from './Property'

const intialOwnership = {
  ownershipByPerson: {
    FRANKLIN: [],
    MICHAEL: [],
    TREVOR: [],
  },
  ownershipByProperty: properties.reduce((acc, property) => {
    acc[property.name] = null
    return acc
  }, {}),
}
const ownershipReducer = (state, { person, property }) => {
  if (state.ownershipByProperty[property.name] === person) {
    state.ownershipByProperty[property.name] = null
    state.ownershipByPerson[person.key] = state.ownershipByPerson[person.key].filter(owned => owned !== property)
  } else {
    const currentOwner = state.ownershipByProperty[property.name]
    if (currentOwner) {
      state.ownershipByPerson[currentOwner.key] = state.ownershipByPerson[currentOwner.key].filter(
        owned => owned !== property
      )
    }
    state.ownershipByProperty[property.name] = person
    state.ownershipByPerson[person.key].push(property)
  }
  return { ...state }
}

export default function PropertyTool() {
  const [ownershipState, updateOwnership] = React.useReducer(ownershipReducer, intialOwnership)
  return (
    <>
      <ul>
        {Object.keys(ownershipState.ownershipByPerson).map(key =>
          ownershipState.ownershipByPerson[key].map(property => <li>{property.name}</li>)
        )}
      </ul>
      <ul>
        {properties.map(property => (
          <li>
            <Property
              property={property}
              handleOwnerClick={person => {
                updateOwnership({ person, property })
              }}
            />
          </li>
        ))}
      </ul>
    </>
  )
}
