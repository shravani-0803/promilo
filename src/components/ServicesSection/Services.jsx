import React from 'react'
import './services.css'
import Frequent from './Frequent'

const Services = () => {
  const service=[
    {
      "id":1,
      "name":"Contract Execution Upload",
      "text":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, alias!",
      "start":"Get started"
    },
    {
      "id":2,
      "name":"E-Stamp Services",
      "text":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, dolorem?",
      "start":"Get started"
    },
    {
      "id":3,
      "name":"E-Sign Services",
      "text":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, laudantium?",
      "start":"Get started"
    },
]
  return (
    <div className='container'>
       <div className='frequent'>Frequently Used</div>
          <div className='top-section' style={{backgroundColor:'white'}}>
             <Frequent serviceList={service}/>
    </div>
    </div>
  )
}

export default Services
