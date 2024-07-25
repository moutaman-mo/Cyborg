import './Home.css'
// import { Hero, MostPopular, GamingLibrary } from "../../Components/index.js ";
import { Hero, MostPopular, GamingLibrary } from "../../Components/index";

export default function Home() {
  return (
    <div>
      <Hero />
      <MostPopular />
      <GamingLibrary />
    </div>
  );
}
