import React,{useContext} from 'react'
import { AppContext } from '../Context/AppContext'

export default function Budget() {
  const {budget}=useContext(AppContext);
  return (
    <div className="alert alert-secondary">
        <span>Budget: ${budget}</span>
    </div>
  )
}
