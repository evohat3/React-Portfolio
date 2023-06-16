import React from 'react';
import ProjectSlot from './ProjectSlot';

// project Objects 
const counter = {
  name: 'Counter App',
  projectimg: 'https://i.imgur.com/f6eI8g7.png',
  url: 'https://evohat3.github.io/counter/',
  }

const coordi = {
  name: 'CoordiNation Station',
  projectimg: 'https://i.imgur.com/slJmhir.jpg',
  url: 'https://coordination-8.herokuapp.com/',
}

const weather = {
  name: 'Weather App',
  projectimg: 'https://i.imgur.com/H5IBWS5.jpg',
  url: 'https://evohat3.github.io/weather-app/',
}

const scheduler = {
  name: 'Work Day Planner',
  projectimg: 'https://i.imgur.com/QE9JuS6.png',
  url: 'https://evohat3.github.io/work-day-scheduler/',
}

const gitFood = {
  name: 'GIT-FOOD.Travel',
  projectimg: 'https://i.imgur.com/GnMcha9.jpg',
  url: 'https://kr1istin.github.io/GIT-FOOD.Travel/',
}

const ezText = {
  name: 'ezText Editor',
  projectimg: 'https://i.imgur.com/fi76xsE.jpg?1',
  url: 'https://eztext-editor.herokuapp.com/',
  transition: 'transform 0.3s ease-in-out',
}

const projectSlotStyle = {
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  boxShadow: '10px 10px 5px',
};

export default function Portfolio() {
  return (

<div>

    <p className="border border-3 border-dark has-text-centered has-text-dark m-3">Portfolio Projects</p>


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


    <style>
      {/* Some good Ole css */}
        {`
          .project-slot:hover {
            transform: scale(1.2);
            border: 4px solid #ff0000;

            @media screen and (max-width: 768px) {
              .columns {
                flex-direction: column;
          }
        `}
      </style>

  </div>
  );
}
