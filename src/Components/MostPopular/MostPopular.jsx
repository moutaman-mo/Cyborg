
import "./MostPopular.css";

import {Card , SectionHeader ,SectionWrapper,MostPopularData } from "../index";

export default function MostPopular() {
  const cards = MostPopularData.map(card => {
    return <Card  key={card.id} image={card.image} title={card.title} category={card.category} rate={card.rate} download={card.download}/>
  })
  return (
    <div>
      <SectionWrapper>
          <SectionHeader>
            MostPopular
          </SectionHeader>
        <div className="most-popular-items ">
        {cards}
        </div>
      </SectionWrapper>
    </div>
  );
}
