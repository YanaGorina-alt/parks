import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function SearchBar() {
  const apiKey = "BKbVJwMHWebXr4eXI9n8TH4sCi0zhT2FTgRcEw0W";
  const url = ` https://developer.nps.gov/api/v1/parks?api_key=${apiKey}`;
              
  const [parks, setParks] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const getParks = async () => {
    const apiKey = "BKbVJwMHWebXr4eXI9n8TH4sCi0zhT2FTgRcEw0W";
    const url = `https://developer.nps.gov/api/v1/parks?api_key=${apiKey}&limit=50`;
  
    let parksData = [];
  
    try {
      // Send a request for each page of results
      let page = 1;
      while (true) {
        const response = await fetch(`${url}&start=${(page - 1) * 50}`);
        const park = await response.json();
  
        // Add the results to the parksData array
        parksData = [...parksData, ...park.data];
  
        // If there are no more results, break out of the loop
        if (park.data.length === 0) {
          break;
        }
  
        page++;
      }
  
      setParks(parksData);
    } catch (error) {
      console.error(error);
    }
  };
  

  useEffect(() => {
    getParks();
  }, [refresh]);

  const handleChange = (e) => {
    const filteredParks = parks.filter(park => {
      return park.fullName.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setParks(filteredParks);
  };

  const loaded = () => {
    return (
      <div>
        <h1>I am a SearchBar</h1>
        <input type="text" onChange={handleChange} />
        {parks.map((park) => {
          const name = park.fullName;
          const symbol = park.parkCode;

          return (
            <Link to={`/parkCode/${symbol}`} key={park.id}>
              <h2>{name}</h2>
            </Link>
          );
        })}
      </div>
    );
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return (
    parks.length > 0 ? loaded() : loading()
  );
}