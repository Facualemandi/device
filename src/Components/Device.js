import React from 'react'
import icon from '../Images/icon-dice.svg'
import patterDesktop from '../Images/pattern-divider-desktop.svg'
import '../Styles/Device.css'

const Device = ({changeAdvice, advice, number}) => {
  return (

      <>

        <section className='section_contains'>
            <h2> Advice # {number}</h2>

            <p className='p_device'>
               "{advice}"        
            </p>

           <div className='patter'>
               <img className='img_pattt' alt='pattern' src={patterDesktop}/>
           </div>

            <div className='img_contain' onClick={changeAdvice}>
              <img alt='dice' src={icon} className='icon' />
            </div>
        </section>
          
      
      </>
  )
}

export default Device