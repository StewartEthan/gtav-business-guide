import React from 'react'
import PropertyTool from './PropertyTool'

export default function App() {
  return (
    <>
      <h1>GTA V Properties</h1>
      <div>You can buy properties that can generate income. It's pretty dope</div>
      <PropertyTool />
      <footer>
        <span>&copy;{new Date().getFullYear()} Ethan Stewart</span>
      </footer>
    </>
  )
}
