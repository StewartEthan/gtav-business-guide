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
          ul {
            list-style: none;
            margin: 0;
            padding: 0;
          }
        `}
      />
      <h1
        css={{
          fontFamily: `'Passion One', sans-serif`,
          fontSize: `44px`,
          letterSpacing: `1px`,
          margin: 0,
          textTransform: `uppercase`,
        }}
      >
        GTA 5 Properties
      </h1>
      <PropertyTool />
      <footer
        css={{
          margin: `1.5em 0 0.25em`,
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
