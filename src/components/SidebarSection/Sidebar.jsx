import React from 'react'
import { MdWavingHand } from "react-icons/md";
import { FaWallet } from "react-icons/fa6";
import './sidebar.css'
import Action from './Action';

const Sidebar = () => {
  const object=[
    {
      "id":1,
      "name":"#trd35468",
       "days":"10 days left",
      "text":"2 files are waiting to be Uploaded",
    },
    {
      "id":2,
      "name":"#33255577",
      "days":"10 days left",
      "text":"2 files are waiting to be Uploaded",
    },
    {
      "id":3,
      "name":"#76298347",
      "days":"10 days left",
      "text":"2 files are waiting to be Uploaded",
    },
    {
      "id":4,
      "name":"#65873428",
      "days":"10 days left",
      "text":"2 files are waiting to be Uploaded",
    },
    {
      "id":5,
      "name":"#trd35468",
      "days":"10 days left",
      "text":"2 files are waiting to be Uploaded",
    },
    {
      "id":6,
      "name":"#trd35468",
      "days":"10 days left",
      "text":"2 files are waiting to be Uploaded",
    },
    {
      "id":6,
      "name":"#trd35468",
      "days":"10 days left",
      "text":"2 files are waiting to be Uploaded",
    },
    {
      "id":6,
      "name":"#trd35468",
      "days":"10 days left",
      "text":"2 files are waiting to be Uploaded",
    },

]
  return (
    <>
    <p style={{display:'flex',flexDirection:'column'}}>
      <div className='text'><MdWavingHand className='icons'/>Welcome back, Michael
        <div className='para'>25 May, 2023-Tuesday</div>
      </div>
      <div className='wallet'>My wallet <FaWallet className='icon-wallet'/>
      <div className='Number'>₹2,50,000
        <div className='current'>Current Balance
          <div className='admin'>Running low?<u>Notify admin</u> now</div>
        </div>
      </div>
      </div>
      <div className='pending' style={{backgroundColor:'white'}}>
      <div>Pending Actions</div>
      <Action objList={object}/>
      </div>
      </p>
    </>
  )
}

export default Sidebar
