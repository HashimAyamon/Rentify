import React from "react";
import { useParams } from "react-router-dom";
import { villas } from "../../villas";

const SingleVilla = () => {
  const { id } = useParams();
  const numericId = Number(id);
  const filteredVilla = villas.find((villa) => villa.id === numericId);

  if (!filteredVilla) {
    return (
      <section id="singleVilla" className="page">
        <div className="container">
          <h3>Villa not found!</h3>
        </div>
      </section>
    );
  }

  return (
    <section id="singleVilla" className="page">
      <div className="container">
        <h1 className="villa-name">{filteredVilla.name}</h1>
        <div className="villa-content">
          <div className="villa-img-wrapper">
            <img
              className="villa-img"
              src={filteredVilla.image}
              alt={filteredVilla.name}
            />
          </div>
          <div className="villa-details">
            <h3>Location: <br />{filteredVilla.location}</h3>
            <p>
              <strong>Details:</strong> {filteredVilla.bedrooms} Bedrooms /{" "}
              {filteredVilla.guests} Guests / {filteredVilla.bathrooms} Bathrooms
              / {filteredVilla.squareMeter} sqm Area
            </p>
          </div>
        </div>
        <hr />
        <div className="villa-checkin-out">
          <h4>Reservation Details</h4>
          <hr />
          <p>
            <strong>Check-In:</strong> <span>12:00 PM</span>
          </p>
          <p>
            <strong>Check-Out:</strong> <span>11:00 AM</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleVilla;
