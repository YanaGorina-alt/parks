import {useParams} from "react-router-dom"
import {useState, useEffect} from "react";

export default function ParkPage(props){
    const apiKey = "BKbVJwMHWebXr4eXI9n8TH4sCi0zhT2FTgRcEw0W";
    const params = useParams()
    const symbol = params.symbol;
    const url = ` https://developer.nps.gov/api/v1/parks?parkCode=${symbol}&api_key=${apiKey}`;
                
    const [park, setPark] = useState(null);
    const [refresh, setRefresh] = useState(false)

    const getPark = async () => {
        try{
          const response = await fetch(url);
          const parkData = await response.json();
          setPark(parkData);
        } catch(e){
          console.error(e)
        }
      };

      const handleClick = ()=>{
        setRefresh(!refresh)
      }

      useEffect(() => {
        getPark();
      }, [refresh]);

      //console.log(park.data)

      const loaded = () => {
        return (
          <div>
            <h1>
              {park["data"][0]["fullName"]}
            </h1>
            <p>{park.data[0].description}</p>
            <button onClick={handleClick}>refresh</button>
          </div>
        );
      };

      //console.log(park);

      const loading = () => {
        return <h1>Loading...</h1>;
      };

    return(
        // <h1>This is the ParkPage</h1>
        park ? loaded() : loading()
    )
}