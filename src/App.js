import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
const url = "https://course-api.com/react-tours-project";

function App() {
  //Storing vairables that are part of the application's state and will change with user interaction
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  //Here, we are filtering out our data
  //Now, that we have our function, which is filtering, how can we pass it to our component "Tour"?
  //Because, it will be called in a button there.
  //Solution: we pass it as a props
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id); //filtered items
    setTours(newTours);
  };

  //Fetching the data
  const fetchTours = async () => {
    setLoading(true); //just a precaution to set loading to true

    //We can write our response in a try/catch block in order to identify if any errors
    //will occur
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    //useEffect is a good place to fetch data
    fetchTours();
  }, []); //It runs only once

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  // If we're without tours, then...
  if (tours.length == 0) {
    return (
      <main>
        <div className="title">
          <h2>No tours left</h2>
          {/* We call the fetchTours on the click of a button */}
          <button className="btn" onClick={fetchTours}>
            Refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      {/* We pass our filter function here */}
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
