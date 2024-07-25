import "./GamingLibrary.css"
import {SectionHeader ,SectionWrapper ,CardGaming} from "../index";

import YourGamingData from "../Data/YourGamingData";

export default function GamingLibrary() {

  const  cards= YourGamingData.map(card =>{
    return<CardGaming key={card.id} title={card.title} image={card.image} category={card.category} data_added={card.data_added} hours_played={card.hours_Played} download={card.downloaded} /> 
  })
  
  return (
    <div>
      <SectionWrapper>
        <SectionHeader>Your Gaming Library</SectionHeader>
        <div className="most-Gaming-items ">
        {cards} 
        </div>
      </SectionWrapper>
    </div>
  );
};