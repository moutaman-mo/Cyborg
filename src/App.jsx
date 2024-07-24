import "./App.css";
import { Header, Container,  Hero  ,MostPopular , Card , MostGaming ,SectionWrapper , Footer} from "./Components/index";
export default function  App(){
  return (
    <div>
      <Header />
      <Container>
       <Hero/>
        <MostPopular/> 
        <MostGaming/>
      </Container>
      {/* <Footer /> */}
    </div>
  );
}
