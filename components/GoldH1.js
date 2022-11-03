import React from 'react'

function GoldH1({props}) {
  return (
    <h1 className="bg-clip-text bg-gradient-to-r from-step1 via-step2 to-step4">{props.children}</h1>
  )
}

export default GoldH1