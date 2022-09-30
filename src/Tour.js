import React, { useState } from "react";

// We destructure it right away
const Tour = ({ name, info, image, price, id, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    // We begin with the image
    <article className="single-tour">
      <img src={image} alt={name} />

      {/* We add the title, price and description */}
      <footer>
        <div className="tour-info">
          <h2>{name}</h2>
          <h4 className="tour-price">${price}</h4>
        </div>
        {/* Is read more true? If yes, show all the info, if not, just part of it */}
        <p>
          {readMore ? info : `${info.substring(0, 150)}...`}
          {/* Since, we're toggling, whatever is the value
                                we change, thus toggling on/off */}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? "Show Less" : "Show More"}
          </button>
        </p>
        {/* then, finally here we call our function passing our id 
                            (3 levels below where the function was declared)*/}
        <button className="delete-btn" onClick={() => removeTour(id)}>
          Not Interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
