import React from "react";
import { useState } from "react";

export default function InputBox({ onSubmit }) {
  const [userId, setUserId] = useState("");
  const [place, setPlace] = useState("");
  const [countryCode, setCountryCode] = useState("");

  const handleSubmit = () => {
    onSubmit({ user_id: userId, place, country_code: countryCode });
  };

  return (
    <div className="input-box">
      <h2>User Details</h2>

      <input
        type="text"
        placeholder="User ID (1)"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />

      <input
        type="text"
        placeholder="Place"
        value={place}
        onChange={(e) => setPlace(e.target.value)}
      />

      <input
        type="text"
        placeholder="Country Code in UpperCase"
        value={countryCode}
        onChange={(e) => setCountryCode(e.target.value)}
      />

      <button className="submit-btn" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}
