import React from "react";
import Tour from "./Tour";

// Destructuring it right away
const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      {/* Title */}
      <div className="title">
        <h2>Our tours</h2>
        <div className="underline"></div>
      </div>

      {/* Tours */}
      <div>
        {/* Mapping through each single element */}
        {tours.map((tour) => {
          // We just did the logic of accessing the elements through here
          // then we called the component responsible for rendering each
          // tour. Notice that we passed the id and used the spread operator
          // to pass all the data to the child component
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
