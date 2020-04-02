/** @jsx jsx */
import { css, Global, jsx } from '@emotion/core'
import React from 'react'
import PropertyTool from './PropertyTool'

export default function App() {
  return (
    <React.Fragment>
      <Global
        styles={css`
          @import url('https://fonts.googleapis.com/css?family=Passion+One:400,700&display=swap');
          @import url('https://fonts.googleapis.com/css?family=Titillium+Web:400,700&display=swap');
          body {
            font-family: 'Titillium Web', sans-serif;
            font-size: 18px;
            margin: 0;
            padding: 0 0.25em;
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
          textTransform: `uppercase`,
        }}
      >
        GTA V Properties
      </h1>
      {/* <div>You can buy properties that can generate income. It's pretty dope</div> */}
      <PropertyTool />
      <footer
        css={{
          margin: `1.5em auto 0.25em`,
        }}
      >
        <span css={{ fontSize: `1em` }}>
          <span css={{ fontFamily: `sans-serif` }}>&copy;</span>
          {new Date().getFullYear()} Ethan Stewart
        </span>
      </footer>
    </React.Fragment>
  )
}
