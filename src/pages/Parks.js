import { Link } from "react-router-dom";

export default function Parks(props){
   
    const parks = [
        { name: "Acadia National Park", symbol: "acad" },
        { name: "Adams National Historical Park", symbol: "adam" },
        { name: "African American Civil War Memorial", symbol: "afam" },
        { name: "African Burial Ground National Monument", symbol: "afbg" },
        { name: "Agate Fossil Beds National Monument", symbol: "agfo" },
        { name: "Ala Kahakai National Historic Trail", symbol: "alka" },
        { name: "Alagnak Wild River", symbol: "alag" },
        { name: "Alaska Public Lands", symbol: "anch" },
      ];
    return(
        <div className="parks">
            <h1>This is the Parks page</h1>
      {parks.map((park) => {
        const { name, symbol } = park;

        return (
          <Link to={`/parkCode/${symbol}`}>
            <h2>{name}</h2>
          </Link>
        );
      })}
    </div>
        
    )
}