/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import PropTypes from 'prop-types'

const propertyCss = css`
  align-items: center;
  display: grid;
  grid-template-columns: 2fr 3fr;

  .name {
    font-family: 'Passion One', sans-serif;
    font-size: 1.375em;
    grid-column: 1 / -1;
  }
  .purchase-price {
    /* FIXME: Find better red */
    color: #ff0000;
  }
  .income-wrapper {
    display: grid;
  }
  .income {
    /* FIXME: Find better green */
    color: #00cc00;
  }
  .additional-perk {
    font-size: 0.825em;
    font-style: italic;
    grid-column: 1 / -1;
  }
  .potential-owners {
    display: grid;
    grid-column: 1 / -1;
    grid-template-columns: repeat(auto-fit, minmax(calc(120px - 1em), 1fr));
    margin-top: 0.375em;
  }
  .potential-owner {
    font-size: 1em;
    padding: 0.5em 1em;
  }
`

export default function Property({ property, handleOwnerClick }) {
  return (
    <div css={propertyCss}>
      <span className="name">{property.name}</span>
      <span className="additional-perk">{property.additionalPerk}</span>
      <span className="purchase-price">{formatMoney(property.purchasePrice)}</span>
      <div className="income-wrapper">
        {property.income.map(income => (
          <span className="income">
            {formatMoney(income.amount)} / {income.unit}
          </span>
        ))}
      </div>
      <div className="potential-owners">
        {property.potentialOwners.map(person => (
          <button
            type="button"
            className="potential-owner"
            onClick={() => handleOwnerClick(person)}
            css={{ backgroundColor: person.color }}
          >
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
