import React from 'react'

export default function CrudTableRow({bike}) {
  return (
      <tr>
         <td>{bike.company}</td>
         <td>{bike.bikeModel}</td>
         <td>
            <button>Editar</button>
            <button>Editar</button>
         </td>
      </tr>      
  )
}
