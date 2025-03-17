import React from 'react';
import { BiHome, BiBookAlt, BiTask, BiSolidReport, BiStats, BiMessage, BiHelpCircle} from 'react-icons/bi';
import '../styles/sidebar.css';
const Sidebar = () => {
  return(
    <div className="menu">
          <div className="logo">
          <BiBookAlt className="logo-icon"/>
           <h2> GigFactory</h2>
           </div>
         <div className="menu--list">
          <a href="#" className="item">
          <BiHome className="icon"/>
          Home       
          </a>
          <a href="#" className="item">
          <BiTask className="icon"/>
           Projects     
           </a>
        
          <a href="#" className="item">
          <BiSolidReport className="icon"/>
           Dashboards      
           </a>
         <a href="#" className="item">
        <BiStats className="icon"/>
        Designs     
        </a>
        <a href="#" className="item">
        <BiMessage className="icon" />

        Documents  
        </a>
        <a href="#" className="item">
        <BiHelpCircle className="icon"/>
        Communications     
        </a>
        
    </div>
</div>
  )
}

export default Sidebar