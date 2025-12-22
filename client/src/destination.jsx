import React, { useState, useEffect } from "react";
import InputBox from "./inputBox.jsx";

const API_BASE = "https://travel-planner-44k2.onrender.com";

function Destination() {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchDestinations = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await fetch(`${API_BASE}/api/user/places`);

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text);
      }

      const data = await res.json();

      if (!Array.isArray(data)) {
        throw new Error("Invalid data");
      }

      setDestinations(data);
    } catch (err) {
      console.error(err);
      setError("Could not load destinations");
      setDestinations([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDestinations();
  }, []);

  const handleAddDest = async ({
    user_id: userId,
    place,
    country_code: countryCode
  }) => {
    try {
      await fetch(`${API_BASE}/api/user/places/put`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_id: userId,
          place,
          country_code: countryCode
        })
      });

      await fetchDestinations();
    } catch (err) {
      console.error(err);
    }
  };

  const handleRemoveDest = async ({
    user_id: userId,
    place,
    country_code: countryCode
  }) => {
    try {
      await fetch(`${API_BASE}/api/user/places/delete`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_id: userId,
          place,
          country_code: countryCode
        })
      });

      await fetchDestinations();
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <p>Loading destinations...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2 className="DestH2">
        Destinations <InputBox onSubmit={handleAddDest} />
      </h2>

      {destinations.length === 0 ? (
        <p>No destinations found.</p>
      ) : (
        <div className="cardd-container">
          {destinations.map((dest) => (
            <div
              className="cardd"
              key={`${dest.user_id}-${dest.place}`}
            >
              <h3 className="cardd-title">{dest.place}</h3>
              <p className="cardd-country">{dest.country_code}</p>
              <button
                className="Remove"
                onClick={() =>
                  handleRemoveDest({
                    user_id: dest.user_id,
                    place: dest.place,
                    country_code: dest.country_code
                  })
                }
              >
                -
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Destination;
