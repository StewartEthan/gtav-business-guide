import PropTypes from 'prop-types'
import React from 'react'

export default function Property({ property }) {
  return <div>{property.name}</div>
}

Property.propTypes = {
  property: PropTypes.shape({
    name: PropTypes.string.isRequired,
    costToBuy: PropTypes.number.isRequired,
    income: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        unit: PropTypes.string.isRequired,
      })
    ).isRequired,
    additionalPerk: PropTypes.string,
    potentialOwners: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
      })
    ),
  }),
}
