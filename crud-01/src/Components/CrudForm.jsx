import React, {useState} from 'react'

const initialForm = {id:null , company:'',
   bikeModel:  ''}


export default function CrudForm() {
   const [form , setForm] = useState(initialForm)
   const handleChange = (e)=> {
      
   }
   const handleSubmit = (e) => {
      
   }
   const handleReset = (e) => {

   }
  return (
    <div>
      <form onSubmit={handleSubmit}> 
      <input type='text' placeholder='Compañia ...' name='company' value={form.company} onChange={handleChange} />
      <input type='text' placeholder='Modelo ...' name='bikeModel'  value={form.bikeModel} onChange={handleChange} />
      <input type='reset' value='Clean' onClick={handleReset}/>
      <input type='submit' value='Load'/>
</form>
    </div>
  )
}
