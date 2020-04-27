import PropTypes from 'prop-types'
import React from 'react'

export default function OwnedPropertyData({ ownedProperties }) {
  return <div>{ownedProperties.length}</div>
}

OwnedPropertyData.propTypes = {
  ownedProperties: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
}
