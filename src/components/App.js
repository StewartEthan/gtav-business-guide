/** @jsx jsx */
import { css, Global, jsx } from '@emotion/core'
import React from 'react'
import PropertyTool from './PropertyTool'

export default function App() {
  return (
    <React.Fragment>
      <Global
        styles={css`
          @import url('https://fonts.googleapis.com/css?family=Passion+One:700&display=swap');

          @import url('https://fonts.googleapis.com/css?family=Titillium+Web:400,700&display=swap');
          body {
            font-family: 'Titillium Web', sans-serif;
            margin: 0;
            padding: 0;
          }
          *,
          * > * {
            box-sizing: border-box;
          }
        `}
      />
      <h1
        css={{
          fontFamily: `'Passion One', sans-serif`,
          fontSize: `44px`,
          letterSpacing: `1px`,
        }}
      >
        GTA V Properties
      </h1>
      <div>You can buy properties that can generate income. It's pretty dope</div>
      <PropertyTool />
      <footer>
        <span css={{ fontSize: `1rem` }}>&copy;{new Date().getFullYear()} Ethan Stewart</span>
      </footer>
    </React.Fragment>
  )
}
