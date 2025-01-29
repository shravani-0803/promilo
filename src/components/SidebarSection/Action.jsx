import React from 'react'

const Action = (props) => {
    return (
        <div>
            {props.objList.map((obj) => {
                return (
                    <>
                       <div className='scroll'>
                            <div className='action'>{obj.name}</div>
                            <div className='digital'>{obj.text}</div>
                            <div className='box'>
                            <button className='btn'>{obj.days}</button>
                            </div>
                            </div>
                    

                    </>
                )
            })}
        </div>
    )
}

export default Action
