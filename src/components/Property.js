import PropTypes from 'prop-types'
import React from 'react'

export default function Property({ property, handleOwnerClick }) {
  return (
    <div>
      <span className="name">{property.name}</span>
      <span className="purchase-price">{formatMoney(property.purchasePrice)}</span>
      <div className="income-wrapper">
        {property.income.map(income => (
          <span className="income">
            {formatMoney(income.amount)} / {income.unit}
          </span>
        ))}
      </div>
      <span className="additional-perk">{property.additionalPerk}</span>
      <div className="potential-owners">
        {property.potentialOwners.map(person => (
          <button type="button" className="potential-owner" onClick={() => handleOwnerClick(person)}>
            {person.name}
          </button>
        ))}
      </div>
    </div>
  )
}

const formatter = new Intl.NumberFormat(`en-US`, { style: `decimal` })
function formatMoney(amount) {
  return `$${formatter.format(amount)}`
}

Property.propTypes = {
  handleOwnerClick: PropTypes.func.isRequired,
  property: PropTypes.shape({
    name: PropTypes.string.isRequired,
    purchasePrice: PropTypes.number.isRequired,
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
    ).isRequired,
  }).isRequired,
}
