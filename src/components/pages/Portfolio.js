import React from 'react';
import ProjectSlot from '../ProjectSlot';
import '../utils/ProjectSlot.css'
import { counter, coordi, weather, scheduler, gitFood, ezText, } from '../utils/projectdata'
import { projectSlotStyle,  } from '../utils/projectstyle'
export default function Portfolio() {
  return (

<div>

    <h1 className="border border-3 border-dark has-text-centered m-3 is-size-1 has-background-info has-text-light">Portfolio Projects</h1>


    <div className="columns">
      <div className="column m-3 ">

      <div className='p-5 m-5 project-slot' style={{...projectSlotStyle, backgroundImage: `url(${counter.projectimg})`}}> 
        <ProjectSlot name={counter.name} url={counter.url}/>
      </div>

        <div className='p-5 m-5 project-slot' style={{...projectSlotStyle, backgroundImage: `url(${weather.projectimg})`}}>
        <ProjectSlot name={weather.name} url={weather.url}/>
        </div>

        <div className='p-5 m-5 project-slot' style={{...projectSlotStyle, backgroundImage: `url(${coordi.projectimg})`}}>
        <ProjectSlot name={coordi.name} url={coordi.url}/>
        </div>

      </div>
      <div className="column m-3">

      <div className='p-5 m-5 project-slot' style={{...projectSlotStyle, backgroundImage: `url(${scheduler.projectimg})`}}>
        <ProjectSlot name={scheduler.name} url={scheduler.url}/>
        </div>

        <div className='p-5 m-5 project-slot' style={{...projectSlotStyle, backgroundImage: `url(${gitFood.projectimg})`}}>
        <ProjectSlot name={gitFood.name} url={gitFood.url}/>
        </div>

        <div className='p-5 m-5 project-slot' style={{...projectSlotStyle, backgroundImage: `url(${ezText.projectimg})`}}>
        <ProjectSlot  name={ezText.name} url={ezText.url}/>
        </div>

      </div>
    </div>




  </div>
  );
}
