import React, { useState, useEffect } from "react";
import InputBox from './inputBox.jsx';

function Destination() {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchDestinations = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/user/places");
      if (!res.ok) throw new Error("Failed to fetch destinations");

      const data = await res.json();
      setDestinations(data);
      console.log("Fetched data:", data);
    } catch (err) {
      console.error(err);
      setError("Could not load destinations");
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchDestinations();
  }, []);

  if (loading) return <p>Loading destinations...</p>;
  if (error) return <p>{error}</p>;

  const handleAddDest = async ({ user_id: userId, place, country_code: countryCode }) => {
    try {
      await fetch("http://localhost:3000/api/user/places/put", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id: userId, place, country_code: countryCode })
      });

      console.log("Added:", { userId, place, countryCode });

      await fetchDestinations();   
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleRemoveDest = async ({ user_id: userId, place, country_code: countryCode }) => {
    try {
      await fetch("http://localhost:3000/api/user/places/delete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id: userId, place, country_code: countryCode })
      });

      console.log("Deleted:", { userId, place, countryCode });

      await fetchDestinations();    
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h2 className="DestH2">Destinations <InputBox onSubmit={handleAddDest} /></h2>

      {destinations.length === 0 ? (
        <p>No destinations found.</p>
      ) : (
        <div className="cardd-container">
          {destinations.map((dest) => (
            <div className="cardd" key={dest.id}>
              <h3 className="cardd-title">{dest.place}</h3>
              <p className="cardd-country">{dest.country_code}</p>
              <button
                className="Remove"
                onClick={() => handleRemoveDest({
                  user_id: dest.user_id,
                  place: dest.place,
                  country_code: dest.country_code
                })}
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
