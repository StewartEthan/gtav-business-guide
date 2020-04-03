/** @jsx jsx */
import { css, jsx } from '@emotion/core'
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
const propertyListCss = css`
  display: grid;
  grid-row-gap: 1.5em;
`

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
                <li
                  css={css`
                    display: inline-grid;
                    grid-column-gap: 0.5em;
                    grid-template-columns: auto auto;
                  `}
                >
                  <span>{property.name}</span>
                  <button
                    type="button"
                    aria-label={`Remove ${property.name} from list`}
                    onClick={() => updateOwnership({ property, person: characters[key] })}
                  >
                    <span title={`Remove ${property.name} from list`} aria-hidden>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M0 0h24v24H0z" stroke="none" />
                        <path d="M4 7h16M10 11v6M14 11v6M5 7l1 12a2 2 0 002 2h8a2 2 0 002-2l1-12M9 7V4a1 1 0 011-1h4a1 1 0 011 1v3" />
                      </svg>
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
      <ul css={propertyListCss}>
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
