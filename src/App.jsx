import "./App.css";
import { BrowserRouter as Router ,Route ,Routes } from "react-router-dom";
import { Header, Container,  Card ,SectionWrapper , Footer } from "./Components/index";
import {Home ,Profile} from "./Pages/index";
export default function  App(){
  return (
    <div>
     <Router>
        <Header />
        <Container>
        <Routes>
                <Route path="/" element ={<Home/>}/>
                <Route path="/profile" element ={<Profile/>}/>
                
        </Routes>
        </Container>  
        {/* <Footer /> */}
     </Router>
    </div>
  );
}
