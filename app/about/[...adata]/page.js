import React from 'react'

export default function page({params}) {
    var {adata}=params;
    var a=adata.join("/")

  return (
    <div>
        <h1>This Is all segment pages {a}</h1>
    </div>
  )
}
