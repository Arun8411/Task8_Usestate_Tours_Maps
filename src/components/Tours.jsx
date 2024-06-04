import { useState } from "react";

function Tours({ tour, removeTour }) {
  const { id, tourImgLink, nameOftheTour, tourDesc, tourPrice } = tour;
  const [showContent, setShowContent] = useState(false);

  return (
    <div
      style={{
        width: "200px",
        border: "2px solid black",
        padding: "0px 5px 20px 5px",
        position: "relative",
      }}
      key={id}
    >
      <img src={tourImgLink} alt={nameOftheTour} />
      <title>{nameOftheTour}</title>
      <p>
        {showContent ? tourDesc : tourDesc.slice(0, 100)}...
        <b onClick={() => setShowContent(!showContent)}>
          {showContent ? "See Less" : "Read More"}
        </b>
      </p>

      <button
        onClick={() => {
          //logic for to remove the tour from the array
          removeTour(id); //you are updating the original array ==> filtering the tours data
        }}
      >
        Not Interested
      </button>
      <p
        style={{
          backgroundColor: "white",
          width: "100px",
          position: "absolute",
          right: "0",
          top: "-10px",
        }}
      >
        ₹{tourPrice}
      </p>
    </div>
  );
}
export default Tours;
