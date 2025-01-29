
import './App.css'
import Footer from './components/FooterSection/Footer'
import Header from './components/Headersection/Header'
import Order from './components/OrderSection/Order'
import Progress from './components/ProgressSection/Progress'
import Services from './components/ServicesSection/Services'
import Sidebar from './components/SidebarSection/Sidebar'
import { LuCalendar } from "react-icons/lu";



function App() {
    return(
        <>
        <div className='header'>
        <Header/>
        </div>
        <div className='sidebar'>
        <Sidebar/>
        </div>
        <div className='services'>
            <Services/>
        </div>
        <div className='orders'>
            <Order/>
        </div>
        <div className='progress'>
            <Progress/>
        </div>
        <div className='footer'>
            <Footer/>
        </div>
        <div className='input'>
            <select value="" className='branch'>All branches
                <option value="">All branches</option>
            </select>
            <div className='select'>
               <select value="" className='range'>Custom range
                <option value="">Custom range</option>
               </select>
               <button className='sub'>March 2020 <LuCalendar className='sub-icon'/>
               </button>
            </div>
        </div>
        </>
    )

}

export default App
