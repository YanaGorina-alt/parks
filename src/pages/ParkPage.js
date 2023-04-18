import {useParams} from "react-router-dom"
import {useState, useEffect} from "react";

export default function ParkPage(props){
    const apiKey = "BKbVJwMHWebXr4eXI9n8TH4sCi0zhT2FTgRcEw0W";
    const params = useParams()
    const symbol = params.symbol;
    const url = ` https://developer.nps.gov/api/v1/parks?parkCode=${symbol}&api_key=${apiKey}`;
                
                
    const [park, setPark] = useState(null)  

    const getPark = async () => {
        try{
          const response = await fetch(url);
          const parkData = await response.json();
          setPark(parkData);
        } catch(e){
          console.error(e)
        }
      };

      

      useEffect(() => {
        getPark();
      }, []);

      //console.log(park.data)

      const loaded = () => {

        const parkData = park.data[0];
        const parkName = parkData.fullName;
        const parkDescription = parkData.description;
        const parkImageUrl = parkData.images[0]?.url; // Get the URL of the first image (if any)
        
        return (
          <div>
            <h1>{parkName}</h1>
            <p>
              {parkDescription}
              <div className="image-container">
                {parkImageUrl && <img src={parkImageUrl} alt={parkName} style={{ width: "1200px", height:"500px"}}/>}
              </div>
            </p>
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