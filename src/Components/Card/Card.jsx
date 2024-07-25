import "./Card.css";
import { FaAsterisk ,FaBus} from "react-icons/fa";

export default function Card(props) {
  return (
    <div>
      <div className="most-popular-item">
        <div className="card-wrapper">
          <img className="most-popular-image" src={props.image} />
          <div className="wrapper-content">
            <h4 className="most-popular-item-title">
              {props.title}<br />
              {props.category}
            </h4>
            <ul>
              <li>
                <span><span style={{color: "yellow"}}><FaAsterisk /> </span>{props.rate}</span>
              </li>
              <li>
                <span><span style={{color: "red"}}><FaBus/> </span>{props.download}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
