/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React from 'react'
import characters from '../data/characters'
import properties from '../data/properties'
import OwnedPropertyData from './OwnedPropertyData'
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
const ownershipListCss = css`
  background-color: #fff;
  box-shadow: 0px 6px 12px -5px #000;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-left: -0.25em;
  position: sticky;
  top: 0;
  width: 100vw;
`
const propertyListCss = css`
  display: grid;
  grid-row-gap: 1.5em;
  margin-top: 1em;
`

export default function PropertyTool() {
  const [ownership, updateOwnership] = React.useReducer(ownershipReducer, intialOwnership)
  const [selectedOwnedDetails, setSelectedOwnedDetails] = React.useState(null)
  return (
    <>
      {selectedOwnedDetails ? (
        <>
          <button type="button" onClick={() => setSelectedOwnedDetails(null)} css={{}}>
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
              <circle cx="12" cy="12" r="9" />
              <path d="M8 12h8M8 12l4 4M8 12l4-4" />
            </svg>
            <span>Back</span>
          </button>
          <OwnedPropertyData ownedProperties={selectedOwnedDetails} />
        </>
      ) : (
        <div css={ownershipListCss}>
          {Object.keys(ownership.byPerson).map(key => (
            <div
              key={btoa(key)}
              css={{
                backgroundColor: characters[key].colors.light,
                display: `grid`,
                gridRowGap: `0.25em`,
                gridTemplateRows: `auto 1fr auto`,
                padding: `0 0.5em`,
              }}
            >
              <strong>{characters[key].name}</strong>
              {ownership.byPerson[key].length ? (
                <span css={{ fontSize: `0.825em` }}>
                  {characters[key].name} owns {ownership.byPerson[key].length} properties
                </span>
              ) : (
                // <ul>
                //   {ownership.byPerson[key].map(property => (
                //     <li
                //       key={btoa(property.name)}
                //       css={css`
                //         display: inline-grid;
                //         grid-column-gap: 0.5em;
                //         grid-template-columns: auto auto;
                //       `}
                //     >
                //       <span>{property.name}</span>
                //       <button
                //         type="button"
                //         aria-label={`Remove ${property.name} from list`}
                //         onClick={() => updateOwnership({ property, person: characters[key] })}
                //       >
                //         <span title={`Remove ${property.name} from list`} aria-hidden>
                //           <svg
                //             xmlns="http://www.w3.org/2000/svg"
                //             width="24"
                //             height="24"
                //             strokeWidth="2"
                //             stroke="currentColor"
                //             fill="none"
                //             strokeLinecap="round"
                //             strokeLinejoin="round"
                //           >
                //             <path d="M0 0h24v24H0z" stroke="none" />
                //             <path d="M4 7h16M10 11v6M14 11v6M5 7l1 12a2 2 0 002 2h8a2 2 0 002-2l1-12M9 7V4a1 1 0 011-1h4a1 1 0 011 1v3" />
                //           </svg>
                //         </span>
                //       </button>
                //     </li>
                //   ))}
                // </ul>
                <span css={{ fontSize: `0.825em`, marginBottom: `1em` }}>
                  {characters[key].name} doesn't own any properties
                </span>
              )}
              {ownership.byPerson[key].length ? (
                <button
                  type="button"
                  onClick={() => setSelectedOwnedDetails(ownership.byPerson[key])}
                  css={{
                    alignItems: `center`,
                    backgroundColor: `transparent`,
                    border: `none`,
                    color: characters[key].colors.darker,
                    display: `flex`,
                    fontSize: `0.75em`,
                    minHeight: `40px`,
                    padding: 0,
                    textAlign: `left`,
                    width: `100%`,
                  }}
                >
                  <svg
                    css={{ marginLeft: -3 }}
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
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 8h.01M11 12h1v4h1" />
                  </svg>
                  <span css={{ marginLeft: 2 }}>View Details</span>
                </button>
              ) : null}
            </div>
          ))}
        </div>
      )}
      <ul css={propertyListCss}>
        {properties.map(property => (
          <li key={btoa(`${property.name}-details`)}>
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
