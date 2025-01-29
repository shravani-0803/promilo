import React from 'react'
import './order.css'
import { ImDropbox } from "react-icons/im";
import { AiFillClockCircle } from "react-icons/ai";
import { BsBoxSeamFill } from "react-icons/bs";
import { TbCalendarCancel } from "react-icons/tb";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import { HiMiniArrowTrendingDown } from "react-icons/hi2";

const Order = () => {
  return (
    <div className='order-section'>
      <p className='order'>Order Details</p>
      <div className='section'>
        <div className='first'>18<ImDropbox className='order-icon'/>
          <div className='second'>Total Orders
            <div className='third'><HiMiniArrowTrendingUp className='order-arrow' />
            +2.4%</div>
          </div>
        </div>
      <div className='first'>10<AiFillClockCircle className='order-icon'/>
          <div className='second'>In progress           
             <div className='third'><HiMiniArrowTrendingUp className='order-arrow'/>
             +2.4%</div>
          </div>
        </div>
      <div className='first'>5 <BsBoxSeamFill className='order-icon' />
          <div className='second'>Completed Order
            <div className='third'><HiMiniArrowTrendingUp className='order-arrow'/>
            +2.4%</div>
          </div>
        </div>
        <div className='first'>3<TbCalendarCancel className='order-icon'/>
          <div className='second'>Cancelled Order
            <div className='third'><HiMiniArrowTrendingDown className='order-down' />
            +2.4%</div>
          </div>
        </div>
        </div>
       </div>
  )
}

export default Order
