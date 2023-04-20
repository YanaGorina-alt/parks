import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function SearchBar() {
              
  const [parks, setParks] = useState([]);

  const getParks = async () => {
    const apiKey = process.env.REACT_APP_API;
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
  }, []);



const handleChange = async (e) => {
    const value = e.target.value.toLowerCase();
  
    if (value === '') {
      // If the search input is empty, fetch all parks data again
      await getParks();
    } else {
      const filteredParks = parks.filter((park) =>
        park.fullName.toLowerCase().includes(value)
      );
      setParks(filteredParks);
    }
  };


  
  const loaded = () => {
    return (
      <div>
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