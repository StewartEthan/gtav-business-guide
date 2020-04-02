import React from 'react'
import characters from '../data/characters'
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
        <div>
          <strong>{characters[key].name}</strong>
          {ownership.byPerson[key].length ? (
            <ul>
              {ownership.byPerson[key].map(property => (
                <li>
                  <span>{property.name}</span>
                  <button
                    type="button"
                    aria-label={`Remove ${property.name} from list`}
                    onClick={() => updateOwnership({ property, person: characters[key] })}
                  >
                    <span title={`Remove ${property.name} from list`} aria-hidden>
                      🗑️
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <span>{characters[key].name} doesn't own any properties</span>
          )}
        </div>
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
