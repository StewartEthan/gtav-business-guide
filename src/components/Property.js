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
    color: #ee0000;
  }
  .income-wrapper {
    display: grid;
  }
  .income {
    color: #008900;
  }
  .additional-perk {
    font-size: 0.825em;
    font-style: italic;
    grid-column: 1 / -1;
  }
  .potential-owners {
    display: grid;
    grid-column: 1 / -1;
    grid-column-gap: 0.25em;
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
        {property.income.map((income, idx) => (
          <span className="income" key={btoa(`${property.name}-income-${idx}`)}>
            {formatMoney(income.amount)} / {income.unit}
          </span>
        ))}
      </div>
      <div className="potential-owners">
        {property.potentialOwners.map(person => (
          <button
            key={btoa(`${person.name}-${property.name}`)}
            type="button"
            className="potential-owner"
            onClick={() => handleOwnerClick(person)}
            css={{
              backgroundColor: person.colors.main,
              border: `2px solid ${person.colors.dark}`,
              borderRadius: `4px`,
            }}
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
        colors: PropTypes.shape({
          main: PropTypes.string.isRequired,
          dark: PropTypes.string.isRequired,
          light: PropTypes.string.isRequired,
        }).isRequired,
      })
    ).isRequired,
  }).isRequired,
}
