import "./MostGaming.css"
import {SectionHeader ,SectionWrapper,YourGamingData } from "../index";

const = () => {
  const  cards= YourGamingData.map(card =>{
    return<CardGaming/> 
  })
  // some changes2
  return (
    <div>
      <SectionWrapper>
        <SectionHeader>Your Gaming Library</SectionHeader>
        <div className="most-Gaming-items ">
        <cards/>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default MostGaming;
MostGaming 