import React from 'react'
import properties from '../data/properties'
import Property from './Property'

const intialOwnership = {
  byPerson: {
    FRANKLIN: [],
    MICHAEL: [],
    TREVOR: [],
  },
  byProperty: properties.reduce((acc, property) => {
    acc[property.name] = null
    return acc
  }, {}),
}
const ownershipReducer = (ownership, { person, property }) => {
  if (ownership.byProperty[property.name] === person) {
    ownership.byProperty[property.name] = null
    ownership.byPerson[person.key] = ownership.byPerson[person.key].filter(owned => owned !== property)
  } else {
    const currentOwner = ownership.byProperty[property.name]
    if (currentOwner) {
      ownership.byPerson[currentOwner.key] = ownership.byPerson[currentOwner.key].filter(owned => owned !== property)
    }
    ownership.byProperty[property.name] = person
    ownership.byPerson[person.key].push(property)
  }
  return { ...ownership }
}

export default function PropertyTool() {
  const [ownership, updateOwnership] = React.useReducer(ownershipReducer, intialOwnership)
  return (
    <>
      {Object.keys(ownership.byPerson).map(key => (
        <>
          <div>{key}</div>
          {ownership.byPerson[key].length ? (
            <ul>
              <li>
                {ownership.byPerson[key].map(property => (
                  <li>{property.name}</li>
                ))}
              </li>
            </ul>
          ) : null}
        </>
      ))}
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
