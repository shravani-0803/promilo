import React from 'react'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";



const Frequent = (props) => {
  return (
    <div style={{display:'flex'}}>
      {props.serviceList.map((serv)=>{
        return(
            <>
            <div className='position-container'>
            <div className='first-section'>
             <div>{serv.name}</div>
             </div>
             <div className='second-section'>
             <div>{serv.text}</div>
             </div>
             <div className='third-section'>
             <div><u>{serv.start}<MdKeyboardDoubleArrowRight className='section-icon'/></u>
             </div>
             </div>
             </div>
             </>
        )
     })}
    </div>
  )
}

export default Frequent
