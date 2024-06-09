import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import "./accordion.css"
const AccordionSlider = () => {
  return (
    <div className='app-accordion'>
      <Accordion style={{width:"300px"}} defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header className='header-accordion'>Shop By Category</Accordion.Header>
        <Accordion.Body>
          <ul>
           <li><a href="#">Headphone</a></li>
           <li><a href="#">Laptop</a></li>
           <li><a href="#">Mobiles</a></li>
           <li><a href="#">Monitors</a></li>
           <li><a href="#">Printers</a></li>
           <li><a href="#">Smart Watchs</a></li>
           <li><a href="#">Soundbars
           </a></li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
      
    </Accordion>
    </div>
  )
}

export default AccordionSlider
